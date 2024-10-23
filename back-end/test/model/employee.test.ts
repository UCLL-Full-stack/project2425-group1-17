import { Appointment } from '../../model/appointment';
import { Calendar } from '../../model/calendar';
import { Client } from '../../model/client';
import { Employee } from '../../model/employee';
import { set } from 'date-fns';

test('given: valid values for employee, when: employee is created, then: employee is created with those values', () => {
    //given
    const appointment1 = new Appointment({
        id: 1,
        title: 'afspraak met huisdokter van ...',
        date: set(new Date(), { year: 2024, month: 10, date: 22, hours: 10 }),
        duration: 2,
        note: 'heeft last van ...',
    });
    const calendar1 = new Calendar({
        id: 1,
        time_frame: 'week',
        appointments: [appointment1],
        time_frame_start: set(new Date(), { year: 2024, month: 10, date: 21 }),
    });
    const client = new Client({
        id: 1,
        name: 'client_naam',
        phone_number: '0032 468 00 00 00',
        town: 'Heverlee',
        adres: 'adres',
        house_number: 75,
        postal_code: '3000',
    });
    const id = 1;
    const name = 'employ name';
    const work_hours = 40;
    const current_hours = 40;
    const phone_number = '0032 469 00 00 00';
    const calendar = calendar1;
    const clients = [client];

    //when
    const employee = new Employee({
        id: id,
        name: name,
        work_hours: work_hours,
        current_hours: current_hours,
        phone_number: phone_number,
        calendar: calendar,
        clients: clients,
    });

    //then
    expect(employee.getId()).toEqual(id);
    expect(employee.getName()).toEqual(name);
    expect(employee.getWork_hours()).toEqual(work_hours);
    expect(employee.getCurrent_hours()).toEqual(current_hours);
    expect(employee.getPhone_number()).toEqual(phone_number);
    expect(employee.getCalendar()).toEqual(calendar);
    expect(employee.getClients()).toEqual(clients);
});
