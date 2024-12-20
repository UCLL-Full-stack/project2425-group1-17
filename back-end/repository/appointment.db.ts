import { Appointment } from '../model/appointment';
import database from '../util/database';
import { Appointment as AppointmentPrisma, PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const createAppointment = async (appointmentInput: Appointment): Promise<Appointment> => {
    const appointmentPrisma = await database.appointment.create({
        data: {
            id: appointmentInput.getId(),
            title: appointmentInput.getTitle(),
            startDate: appointmentInput.getStartDate(),
            endDate: appointmentInput.getEndDate(),
            note: appointmentInput.getNote() || '',
        },
    });
    return Appointment.from(appointmentPrisma);
};

const getAllAppointments = async (): Promise<Appointment[]> => {
    try {
        const appointmentsPrisma = await database.appointment.findMany({
            include: { employee: true },
        });
        return appointmentsPrisma.map((appointmentPrisma: AppointmentPrisma) =>
            Appointment.from(appointmentPrisma)
        );
    } catch (error) {
        console.error(error);
        throw new Error('Could not get appointments');
    }
};

const getAppointmentById = async ({ id }: { id: number }): Promise<Appointment | null> => {
    try {
        const appointmentPrisma = await database.appointment.findUnique({
            where: { id },
        });

        if (!appointmentPrisma) {
            return null;
        }

        return Appointment.from(appointmentPrisma);
    } catch (error) {
        console.error(error);
        throw new Error('Could not get appointment by id');
    }
};

export default {
    createAppointment,
    getAllAppointments,
    getAppointmentById,
};
