import { Calendar } from '../model/calendar';

type Role = 'admin' | 'employee' | 'client';

type UserInput = {
    id?: number;
    username: string;
    password: string,
    role: Role;
    
};


type EmployeeInput = {
    id? : number;
    name: string;       
    work_hours: number;
    current_hours: number;
    phone_number: string;
    role: Role;
    calendarId: number;
    clientIds: number[];
};

type ClientInput = {    
    id? : number;
    name: string;
    phone_number: string;
    email: string;
    calendarId: number;
    employeeIds: number[];
    town: string;
    adress: string;
    houuse_number: number;
    postal_code: string;
};

type AppointmentInput = {   
    id? : number;
    title: string;
    date: Date;
    duration: number;
    note?: string;
    clientId: number;
    employeeId: number;
};

export{
    Role,
    UserInput,
    EmployeeInput,
    ClientInput,
    AppointmentInput
}