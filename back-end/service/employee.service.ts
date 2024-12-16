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
}: EmployeeInput): Employee => {
    const calendar = calendarDb.getCalendarById({ id: calendarInput.id });

    //niet verplicht omdat je weet dat die validatie regels door vorige laag worden gedaan maar volgens regels moeten alle lagen apart kunnen werken dus moet validatie opnieuw doen
    const employee = new Employee({
        name,
        work_hours,
        current_hours,
        phone_number,
        calendar,
        clients: [],
    });

    return employeeDb.createEmployee(employee);
};

export default { createEmployee };
