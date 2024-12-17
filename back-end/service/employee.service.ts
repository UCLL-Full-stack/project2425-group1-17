import { Client } from '../model/client';
import { Employee } from '../model/employee';
import calendarDb from '../repository/calendar.db';
import employeeDb from '../repository/employee.db';
import { EmployeeInput, ClientInput } from '../types';

const createEmployee = ({
    
    name,
    work_hours,
    current_hours,
    phone_number,
    calendar: calendarInput,
    clients,
}: EmployeeInput): Employee => {
    if (calendarInput.id === undefined) {
        throw new Error('Calendar ID is undefined');
    }
    const calendar = calendarDb.getCalendarById(calendarInput.id);
    if (calendar === null) {
        throw new Error('Calendar not found');
    }

    //niet verplicht omdat je weet dat die validatie regels door vorige laag worden gedaan maar volgens regels moeten alle lagen apart kunnen werken dus moet validatie opnieuw doen
    const newEmployee = new Employee({
        name,
        work_hours,
        current_hours,
        phone_number,
        calendar,
        clients: [],
    });

    return employeeDb.createEmployee(newEmployee);
};

const getAppointmentForEmployee = ({id} : {id: number}) => {
    const employee = employeeDb.getEmployeeById({id});
    if (!employee) {
        throw new Error('Employee not found');
    }
    return employee.getCalendar().getAppointments();

};

const addClientToEmployee = (employeeId: number, client: ClientInput): Employee => {
    const employee = employeeDb.getEmployeeById({id: employeeId});
    if (!employee) {
        throw new Error('Employee not found');
    }
    const newClient = new Client(client);
    employee.addClient(newClient);
    return employee;
};

export default { createEmployee , getAppointmentForEmployee, addClientToEmployee};
