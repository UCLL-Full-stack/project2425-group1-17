import { Appointment } from '../model/appointment';
import appointmentDb from '../repository/appointment.db';
import { AppointmentInput } from '../types';

const createAppointment = async (appointmentInput: AppointmentInput): Promise<Appointment> => {
    try {
        const newAppointment = new Appointment({
            title: appointmentInput.title,
            startDate: appointmentInput.startDate,
            endDate: appointmentInput.endDate,
            note: appointmentInput.note,
        });
        return await appointmentDb.createAppointment(newAppointment);
    } catch (error) {
        console.error(error);
        throw new Error('Failed to create appointment');
    }
};

const getAllAppointments = async (): Promise<Appointment[]> => {
    return await appointmentDb.getAllAppointments();
};

const getAppointmentById = async ({ id }: { id: number }): Promise<Appointment | null> => {
    try {
        return await appointmentDb.getAppointmentById({ id });
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch appointment by id');
    }
};

export default {
    createAppointment,
    getAllAppointments,
    getAppointmentById,
};
