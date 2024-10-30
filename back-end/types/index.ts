import { Calendar } from '../model/calendar';

type Role = 'admin' | 'employee' | 'client';

type EmployeeInput = {
    id? : number;
    name: string;       
    work_hours: number;
    current_hours: number;
    phone_number: string;
    calendar: Calendar;
    clients: ClientInput[];
}

type ClientInput = {    
    id? : number;
    name: string;
    phone_number: string;
    email: string;
    calendar: Calendar;
    employee: EmployeeInput[];
}

type AppointmentInput = {   
    id? : number;
    title: string;
    date: Date;
    duration: number;
    note?: string;
    client: ClientInput;
    employee: EmployeeInput;
}

export{
    Role,
    EmployeeInput,
    ClientInput,
    AppointmentInput
}