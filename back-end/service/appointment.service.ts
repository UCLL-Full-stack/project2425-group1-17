import { Appointment } from '../model/appointment';
import appointmentDb from '../repository/appointment.db';
import { AppointmentInput } from '../types';

const createAppointment = ({ title, startDate, endDate, note }: AppointmentInput): Appointment => {
<<<<<<< HEAD
    const appointment = new Appointment({ title,startDate, endDate, note });
=======
    const appointment = new Appointment({ title, startDate, endDate, note });
>>>>>>> 2285ac39d0ec16d392640101a629e5a6f4f79f68
    return appointmentDb.createAppointment(appointment);
};

export default {
    createAppointment,
};
