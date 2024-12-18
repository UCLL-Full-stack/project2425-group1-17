import { Appointment } from '../model/appointment';
import { Calendar } from '../model/calendar';
import { Client } from '../model/client';
import { Employee } from '../model/employee';

const employees: Employee[] = [
    new Employee({
        id: 1,
        name: 'Hans Janssens',
        work_hours: 40,
        current_hours: 20,
        phone_number: '0487562222',
        calendar: new Calendar({
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
        clients: [
            new Client({
                id: 1,
                name: 'Marie Dupont',
                phone_number: '0487569586',
                town: 'Antwerpen',
                adres: 'Meir',
                house_number: 12,
                postal_code: '2000',
            }),
            new Client({
                id: 2,
                name: 'Jean Peeters',
                phone_number: '0487563535',
                town: 'Gent',
                adres: 'Korenmarkt',
                house_number: 5,
                postal_code: '9000',
            }),
        ],
    }),
    new Employee({
        id: 2,
        name: 'Katrien Verhoeven',
        work_hours: 35,
        current_hours: 28,
        phone_number: '0487563935',
        calendar: new Calendar({
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
        clients: [
            new Client({
                id: 3,
                name: 'Sophie Claes',
                phone_number: '0487563999',
                town: 'Brugge',
                adres: 'Markt',
                house_number: 3,
                postal_code: '8000',
            }),
        ],
    }),
    new Employee({
        id: 3,
        name: 'Pieter De Vries',
        work_hours: 30,
        current_hours: 15,
        phone_number: '0487563957',
        calendar: new Calendar({
            id: 3,
            time_frame: 'Monthly',
            appointments: [],
            time_frame_start: new Date('2024-12-01T00:00:00'),
        }),
        clients: [],
    }),
];

//we maken een nieuwe const aan ipv meteen push omdat we anders vefificatie skippen
const createEmployee = (employeeInput: Employee): Employee => {
    if (employees.some((employee) => employee.getId() === employeeInput.getId())) {
        throw new Error('Employee already exists');
    }
    const newEmployee = new Employee({
        id: employeeInput.getId(),
        name: employeeInput.getName(),
        work_hours: employeeInput.getWork_hours(),  
        current_hours: employeeInput.getCurrent_hours(),
        phone_number: employeeInput.getPhone_number(),
        calendar: employeeInput.getCalendar(),
        clients: employeeInput.getClients(),
    });
    employees.push(newEmployee);
    return newEmployee;
};

const getEmployeeByName = ({ name }: { name: string }): Employee | null => {
    return employees.find((employee) => employee.getName() === name) || null;
};

const getEmployeeById = ({ id }: { id: number }): Employee | null => {
    return employees.find((employee) => employee.getId() === id) || null;
};

const getAllEmployees = (): Employee[] => {
    return employees;
};

export default {
    createEmployee,
    getEmployeeByName,
    getEmployeeById,
    getAllEmployees,
};
