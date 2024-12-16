import { Appointment } from '../model/appointment';

const appointments = [
    new Appointment({
        id: 1,
        title: 'Team Meeting',
        startDate: new Date('2024-12-18T10:00:00'),
        endDate: new Date('2024-12-19T10:00:00'),
        note: 'Discuss project updates.',
    }),
    new Appointment({
        id: 2,
        title: 'Client Presentation',
        startDate: new Date('2024-12-20T14:00:00'),
        endDate: new Date('2024-12-22T14:00:00'),
        note: 'Present new features.',
    }),
    new Appointment({
        id: 3,
        title: 'Workshop',
        startDate: new Date('2024-12-19T09:00:00'),
        endDate:  new Date('2024-12-23T09:00:00'),
        note: 'Technical training.',
    }),
];

const createAppointment = (appointmentInput: Appointment): Appointment => {
    const newAppointment = new Appointment({
        id: appointmentInput.getId(),
        title: appointmentInput.getTitle(),
        startDate: appointmentInput.getStartDate(),
        endDate: appointmentInput.getEndDate(),
        note: appointmentInput.getNote() || '',
    });
    appointments.push(newAppointment);
    return newAppointment;
};

const getAllAppointments = (): Appointment[] => appointments;

const getAppointmentById = (id: number): Appointment | null => {
    const appointment = appointments.find((appointment) => appointment.getId() === id);
    if(!appointment) {
        throw new Error('Appointment not found');
    }
    return appointment;
};

export default {
    createAppointment,
    getAllAppointments,
    getAppointmentById,
};
