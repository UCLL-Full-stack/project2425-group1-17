import { Appointment } from '../model/appointment';
import database from '../util/database';
import { Appointment as AppointmentPrisma}  from '@prisma/client'

// const createAppointment = (appointmentInput: Appointment): Appointment => {
//     const newAppointment = new Appointment({
//         id: appointmentInput.getId(),
//         title: appointmentInput.getTitle(),
//         startDate: appointmentInput.getStartDate(),
//         endDate: appointmentInput.getEndDate(),
//         note: appointmentInput.getNote() || '',
//     });
//     appointments.push(newAppointment);
//     return newAppointment;
// };

const getAllAppointments = async (): Promise<Appointment[]> => {
    try{
        const appointmentsPrisma = await database.appointment.findMany({include: {employee: true}});
        return appointmentsPrisma.map((appointmentPrisma: AppointmentPrisma) => Appointment.from(appointmentPrisma));
    } catch (error) {
        console.error(error);
        throw new Error('Could not get appointments');
    }
};

// const getAppointmentById = (id: number): Appointment | null => {
//     const appointment = appointments.find((appointment) => appointment.getId() === id);
//     if (!appointment) {
//         throw new Error('Appointment not found');
//     }
//     return appointment;
// };

export default {
    // createAppointment,
    getAllAppointments,
    // getAppointmentById,
};
