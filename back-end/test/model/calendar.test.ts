import { Calendar } from '../../model/calendar';
import { Appointment } from '../../model/appointment';
import { set } from 'date-fns';

test('given: valid values for calendar, when: calendar is created, then: calendar is created with those values', () => {
    //given
    const appointment1 = new Appointment({
        id: 1,
        title: 'afspraak met huisdokter van ...',
        date: set(new Date(), { year: 2024, month: 10, date: 22, hours: 10 }),
        duration: 2,
        note: 'heeft last van ...',
    });
    const id = 1;
    const time_frame = 'week';
    const appointments = [appointment1];
    const time_frame_start = set(new Date(), { year: 2024, month: 10, date: 21 });

    //when
    const calendar = new Calendar({
        id: id,
        time_frame: time_frame,
        appointments: appointments,
        time_frame_start: time_frame_start,
    });

    //then
    expect(calendar.getId()).toEqual(id);
    expect(calendar.getTime_frame()).toEqual(time_frame);
    expect(calendar.getAppointments()).toEqual(appointments);
    expect(calendar.getTime_frame_start()).toEqual(time_frame_start);
});
