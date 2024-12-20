import { Appointment } from '../model/appointment';
import appointmentDb from '../repository/appointment.db';
import { AppointmentInput } from '../types';

// const createAppointment = async (appointmentInput: AppointmentInput): Promise<Appointment> => {

// };

const getAllAppointments = async (): Promise<Appointment[]> => {
    return await appointmentDb.getAllAppointments();
};

export default {
    // createAppointment,
    getAllAppointments,
};
