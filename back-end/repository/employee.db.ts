// Employee.db.ts
import { Employee } from '../model/employee';
import { Calendar } from '../model/calendar';
import { Client } from '../model/client';

// Sample clients
const clientsForMaria = [
    new Client({
        id: 1,
        name: 'Kate',
        phone_number: '123-456-7890',
        town: 'Amsterdam',
        adres: 'Damstraat',
        house_number: 45,
        postal_code: '2345AB'
    }),
    new Client({
        id: 2,
        name: 'Megan',
        phone_number: '234-567-8901',
        town: 'Antwerpen',
        adres: 'Sint-Jacobstraat',
        house_number: 78,
        postal_code: '2000'
    })
];

const clientsForJosef = [
    new Client({
        id: 3,
        name: 'Lilie',
        phone_number: '0384959254',
        town: 'Leuven',
        adres: 'Tiensestraat',
        house_number: 12,
        postal_code: '3000'
    })
];

// Sample calendars
const calendarMaria = new Calendar({
    id: 1,
    time_frame: 'Q1 2024',
    appointments: [],
    time_frame_start: new Date('2024-01-01')
});

const calendarJosef = new Calendar({
    id: 2,
    time_frame: 'Q1 2024',
    appointments: [],
    time_frame_start: new Date('2024-01-01')
});

// Sample employees
const employees = [
    new Employee({
        id: 1,
        name: 'Maria Garcia',
        work_hours: 40,
        current_hours: 10,
        phone_number: '0495839583',
        calendar: calendarMaria,
        clients: clientsForMaria
    }),
    new Employee({
        id: 2,
        name: 'Josef Martinez',
        work_hours: 35,
        current_hours: 20,
        phone_number: '0488986472',
        calendar: calendarJosef,
        clients: clientsForJosef
    })
];

// Get all employees
const getAllEmployees = (): Employee[] => employees;


export default {
    getAllEmployees
};
