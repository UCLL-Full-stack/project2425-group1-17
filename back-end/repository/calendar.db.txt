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
                endDate:  new Date('2024-12-23T09:00:00'),
                note: 'Technical training.',
            }),
        ],
        time_frame_start: new Date('2024-12-01T00:00:00'),
    }),
];

//we maken een nieuwe const aan ipv meteen push omdat we anders vefificatie skippen
const createCalendar = (calendarInput: Calendar): Calendar => {
    if (calendars.some((calendar) => calendar.getId() === calendarInput.getId())) {
        throw new Error('Calendar already exists');
    }
    
    const newCalendar = new Calendar({
        id: calendarInput.getId(),
        time_frame: calendarInput.getTime_frame(),
        appointments: calendarInput.getAppointments(),
        time_frame_start: calendarInput.getTime_frame_start(),
    });
    calendars.push(newCalendar);
    return newCalendar;
};


const getCalendarById = (id: number): Calendar | null => {
    const calendar = calendars.find((calendar) => calendar.getId() === id);
    if(!calendar){
        throw new Error('Calendar not found');
    }
    return calendar;
};

const getAllCalendars = (): Calendar[] => {
    return calendars;
};

export default {
    createCalendar,
    getCalendarById,
    getAllCalendars,
};
