import { Appointment } from '../model/appointment';
import appointmentDb from '../repository/appointment.db';
import { AppointmentInput } from '../types';

const createAppointment = ({ title, date, duration, note }: AppointmentInput): Appointment => {
    const appointment = new Appointment({ title, date, duration, note });
    return appointmentDb.createAppointment(appointment);
};

export default {
    createAppointment,
};
