import { Appointment } from '../model/appointment';
import appointmentDb from '../repository/appointment.db';
import { AppointmentInput } from '../types';

// const createAppointment = ({ title, startDate, endDate, note }: AppointmentInput): Appointment => {
//     const appointment = new Appointment({ title, startDate, endDate, note });
//     return appointmentDb.createAppointment(appointment);
// };

const getAllAppointments = async (): Promise<Appointment[]> => {
    return appointmentDb.getAllAppointments();
};

export default {
    // createAppointment,
    getAllAppointments,
};
