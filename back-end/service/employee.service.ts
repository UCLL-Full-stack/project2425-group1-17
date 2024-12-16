import { Employee } from '../model/employee';
import calendarDb from '../repository/calendar.db';
import employeeDb from '../repository/employee.db';
import { EmployeeInput } from '../types';

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

export default { createEmployee };
