import { Appointment } from '../../model/appointment';
import { set } from 'date-fns';

test('given: valid values for appointment, when: appointment is created, then: appointment is created with those values', () => {
    //when
    const id = 1;
    const title = 'afspraak met huisdokter van ...';
    const date = set(new Date(), { year: 2024, month: 10, date: 22, hours: 10 });
    const duration = 2;
    const note = 'heeft last van ...';

    //then
    const appointment = new Appointment({
        id: id,
        title: title,
        date: date,
        duration: duration,
        note: note,
    });

    //then
    expect(appointment.getId()).toEqual(id);
    expect(appointment.getTitle()).toEqual(title);
    expect(appointment.getDate()).toEqual(date);
    expect(appointment.getDuration()).toEqual(duration);
    expect(appointment.getNote()).toEqual(note);
});
