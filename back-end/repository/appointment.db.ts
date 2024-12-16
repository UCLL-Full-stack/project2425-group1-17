import { Appointment } from '../model/appointment';

const appointments = [
    new Appointment({
        id: 1,
        title: 'Team Meeting',
        startDate: new Date('2024-12-18T10:00:00'),
        endDate: new Date('2024-12-18T12:00:00'),
        note: 'Discuss project updates.',
    }),
    new Appointment({
        id: 2,
        title: 'Client Presentation',
        startDate: new Date('2024-12-20T14:00:00'),
        endDate: new Date('2024-12-20T16:00:00'),
        note: 'Present new features.',
    }),
    new Appointment({
        id: 3,
        title: 'Workshop',
        startDate: new Date('2024-12-19T09:00:00'),
        endDate: new Date('2024-12-19T11:00:00'),
        note: 'Technical training.',
    }),
];

const createAppointment = ({ title, startDate, endDate, note }: Appointment): Appointment => {
    const appointment = new Appointment({
        title,
        startDate,
        endDate,
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
