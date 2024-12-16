import { Calendar } from '../model/calendar';
import appointmentDb from '../repository/appointment.db';
import calendarDb from '../repository/calendar.db';
import { CalendarInput , AppointmentInput} from '../types';

const createCalendar = ({
    time_frame,
    appointments:appointmentInputs,
    time_frame_start,
}: CalendarInput): Calendar => {
    const appointments = appointmentInputs.map((input) =>{

        const appointment= appointmentDb.getAppointmentById(input.id!);
        if(!appointment){
            throw new Error('Appointment not found');
        }
        return appointment;
    });

    const newCalendar = new Calendar({ time_frame, appointments, time_frame_start });
    return calendarDb.createCalendar(newCalendar);
};

export default {
    createCalendar,
};
