import { Calendar } from './calendar';
import { Client } from './client';

export class Employee {
    private id?: number;
    private name: string;
    private work_hours: number;
    private current_hours: number;
    private phone_number: string;
    private calendar: Calendar;
    private clients: Client[];

    constructor(employee: {
        id?: number;
        name: string;
        work_hours: number;
        current_hours: number;
        phone_number: string;
        calendar: Calendar;
        clients: Client[];
    }) {
        this.calendar = employee.calendar;
    
        this.id = employee.id;
        this.validateName(employee.name);
        this.name = employee.name;
        
        this.work_hours = employee.work_hours;
        this.current_hours = employee.current_hours;
        this.phone_number = employee.phone_number;
        
        this.clients = employee.clients;
    }



    private validateName(name: string): void{
        if(name.trim().length === 0){
            throw new Error('Name cannot be empty');
        }
        if (!/^[a-zA-Z\s'-]+$/.test(name)) {
            throw new Error('Name can only contain letters, spaces, hyphens, and apostrophes.');
        }
    }

    getId(): number | undefined {
        return this.id;
    }

    getName(): string {
        return this.name;
    }
      
    getWork_hours(): number {
        return this.work_hours;
    }
    getCurrent_hours(): number {
        return this.current_hours;
    }

    getPhone_number(): string {
        return this.phone_number;
    }

    getCalendar(): Calendar {
        return this.calendar;
    }

    getClients(): Client[] {
        return this.clients;
    }
}
