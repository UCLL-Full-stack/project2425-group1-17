import exp from 'constants';
import { Calendar } from '../../back-end/model/calendar';


export type Admin = {
    username: string;
    password: string;
}

export type Client ={
    id: number;
    name: string;
    phone_number: string;
    email: string;
    calendar: Calendar;
    employee: Employee[];
}

export type Employee = {        
    id: number;
    name: string;
    work_hours: number;
    current_hours: number;
    phone_number: string;
    calendar: Calendar;
    clients: Client[];
}

export type Appointment = {
    id: number;
    title: string;
    date: Date;
    duration: number;
    note?: string;
    client: Client;
    employee: Employee;
}