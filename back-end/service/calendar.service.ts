import { Calendar } from '../model/calendar';
import appointmentDb from '../repository/appointment.db';
import calendarDb from '../repository/calendar.db';
import { CalendarInput } from '../types';

const createCalendar = ({
    time_frame,
    appointments: appointmentInput,
    time_frame_start,
}: CalendarInput): Calendar => {
    const appointments = appointmentDb.getAppointmentById({ id: appointmentInput.id });

    const calendar = new Calendar({ time_frame, appointments, time_frame_start });
    return calendarDb.createCalendar(calendar);
};

export default {
    createCalendar,
};
