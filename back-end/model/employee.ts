//import { Calendar } from './calendar';
import { Appointment } from './appointment';
import { Client } from './client';
import {Employee as EmployeePrisma, Appointment as AppointmentPrisma, ClientOnEmployee, Client as ClientPrisma} from '@prisma/client';

export class Employee {
    readonly id?: number;
    readonly name: string;
    readonly work_hours: number;
    readonly current_hours: number;
    readonly phone_number: string;
    //readonly calendar: Calendar;
    readonly appointments: Appointment[]
    readonly clients: Client[];

    constructor(employee: {
        id?: number;
        name: string;
        work_hours: number;
        current_hours: number;
        phone_number: string;
        appointments: Appointment[];    
        //calendar: Calendar;
        clients: Client[];
    }) {
        //this.calendar = employee.calendar;

        this.id = employee.id;
        this.validateName(employee.name);
        this.name = employee.name;
        this.work_hours = employee.work_hours;
        this.current_hours = employee.current_hours;
        //this.validatePhoneNumber(employee.phone_number);
        this.appointments = employee.appointments;
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

    public static from(employeePrisma: EmployeePrisma &{
        appointments?: AppointmentPrisma[],
        clients?: (ClientOnEmployee& { client: ClientPrisma })[];
    }): Employee {
        return new Employee({
            id: employeePrisma.id,
            name: employeePrisma.name,
            work_hours: employeePrisma.work_hours,
            current_hours: employeePrisma.current_hours,
            phone_number: employeePrisma.phone_number,
            appointments:(employeePrisma.appointments ?? []).map((appointment) =>
                Appointment.from(appointment)),
            clients: (employeePrisma.clients ?? []).map((clientRelation) => 
                Client.from(clientRelation.client)),
        });
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

    getAppointments(): Appointment[] {
        return this.appointments;
    }

    getPhone_number(): string {
        return this.phone_number;
    }

    // getCalendar(): Calendar {
    //     return this.calendar;
    // }

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
            // this.calendar.equals(employee.getCalendar()) &&
            this.clients.every((client, index) => client.equals(employee.getClients()[index]))
        );
    }
}
