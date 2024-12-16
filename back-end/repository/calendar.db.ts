import { Appointment } from '../model/appointment';
import { Calendar } from '../model/calendar';

const calendars: Calendar[] = [
    new Calendar({
        id: 1,
        time_frame: 'Weekly',
        appointments: [
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
        ],
        time_frame_start: new Date('2024-12-01T00:00:00'),
    }),
    new Calendar({
        id: 2,
        time_frame: 'Daily',
        appointments: [
            new Appointment({
                id: 3,
                title: 'Workshop',
                startDate: new Date('2024-12-19T09:00:00'),
                endDate: new Date('2024-12-19T11:00:00'),
                note: 'Technical training.',
            }),
        ],
        time_frame_start: new Date('2024-12-01T00:00:00'),
    }),
];

//we maken een nieuwe const aan ipv meteen push omdat we anders vefificatie skippen
const createCalendar = ({ id, time_frame, time_frame_start }: Calendar): Calendar => {
    const calendar = new Calendar({
        id,
        time_frame,
        appointments: [],
        time_frame_start,
    });
    calendars.push(calendar);
    return calendar;
};

// voor nu returned die null maar moet nog geimplementeerd worden
const getCalendarById = ({ id }: { id: number }): Calendar | null => {
    return calendars.find((calendar) => calendar.getId() === id) || null;
};

const getAllCalendars = (): Calendar[] => {
    return calendars;
};

export default {
    createCalendar,
    getCalendarById,
    getAllCalendars,
};
