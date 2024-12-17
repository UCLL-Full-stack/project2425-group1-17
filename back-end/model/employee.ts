import { Calendar } from './calendar';
import { Client } from './client';

export class Employee {
    readonly id?: number;
    readonly name: string;
    readonly work_hours: number;
    readonly current_hours: number;
    readonly phone_number: string;
    readonly calendar: Calendar;
    readonly clients: Client[];

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
        //this.validatePhoneNumber(employee.phone_number);
        this.phone_number = employee.phone_number;
        this.clients = employee.clients;
    }

    private validatePhoneNumber(phone_number: string): void {
        const phoneRegex = /^[0][0-9]{8,9}$/; // Starts with '0' and has 9-10 digits
        if (!phoneRegex.test(phone_number)) {
            throw new Error('Phone number must be 9 or 10 digits long and start with 0');
        }
    }

    private validateName(name: string): void {
        if (name.trim().length === 0) {
            throw new Error('Name cannot be empty');
        }
        if (!/^[a-zA-Z\s'-]+$/.test(name)) {
            throw new Error('Name can only contain letters, spaces, hyphens, and apostrophes.');
        }
    }

    addClient(client: Client): void {
        if (this.clients.some((existingClient) => existingClient.getId() === client.getId())) {
            throw new Error('Client already exists');
        }
        this.clients.push(client);
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

    equals(employee: Employee): boolean {
        return (
            this.id === employee.getId() &&
            this.name === employee.getName() &&
            this.work_hours === employee.getWork_hours() &&
            this.current_hours === employee.getCurrent_hours() &&
            this.phone_number === employee.getPhone_number() &&
            this.calendar.equals(employee.getCalendar()) &&
            this.clients.every((client, index) => client.equals(employee.getClients()[index]))
        );
    }
}
