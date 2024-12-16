import { Appointment } from '../model/appointment';

const appointments = [
    new Appointment({
        id: 1,
        title: 'Team Meeting',
        date: new Date('2024-12-18T10:00:00'),
        duration: 60,
        note: 'Discuss project updates.',
    }),
    new Appointment({
        id: 2,
        title: 'Client Presentation',
        date: new Date('2024-12-20T14:00:00'),
        duration: 90,
        note: 'Present new features.',
    }),
    new Appointment({
        id: 3,
        title: 'Workshop',
        date: new Date('2024-12-19T09:00:00'),
        duration: 120,
        note: 'Technical training.',
    }),
];

const createAppointment = ({ title, date, duration, note }: Appointment): Appointment => {
    const appointment = new Appointment({
        title,
        date,
        duration,
        note,
    });
    appointments.push(appointment);
    return appointment;
};

const getAllAppointments = (): Appointment[] => appointments;

const getAppointmentById = ({ id }: { id: number }): Appointment | null => {
    return appointments.find((appointment) => appointment.getId() === id) || null;
};

export default {
    createAppointment,
    getAllAppointments,
    getAppointmentById,
};
