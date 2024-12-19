import { Appointment as AppointmentPrisma } from '@prisma/client';
import { Calendar } from './calendar';
export class Appointment {
    readonly id?: number;
    readonly title: string;
    readonly startDate: Date;
    readonly endDate: Date;
    readonly note?: string;
    readonly calendar: Calendar;

    constructor(appointment: {
        id?: number;
        title: string;
        startDate: Date;
        endDate: Date;
        note?: string;
    }) {
        if (appointment.title.trim().length === 0) {
            throw new Error('Title cannot be empty');
        }

        if (!(appointment.startDate instanceof Date) || isNaN(appointment.startDate.getTime())) {
            throw new Error('Invalid start date');
        }

        if (!(appointment.endDate instanceof Date) || isNaN(appointment.endDate.getTime())) {
            throw new Error('Invalid end date');
        }

        // if (appointment.startDate < new Date()) {
        //     throw new Error('Date cannot be in the past');
        // }

        if (appointment.endDate <= appointment.startDate) {
            throw new Error('End date must be after start date');
        }

        this.id = appointment.id;
        this.title = appointment.title;
        this.startDate = appointment.startDate;
        this.endDate = appointment.endDate;
        this.note = appointment.note ?? '';
        this.calendar = appointment.calendar;
    }

    getId(): number | undefined {
        return this.id;
    }

    getTitle(): string {
        return this.title;
    }

    getStartDate(): Date {
        return this.startDate;
    }

    getEndDate(): Date {
        return this.endDate;
    }

    getNote(): string | undefined {
        return this.note;
    }

    equals(appointment: Appointment): boolean {
        return (
            this.id === appointment.getId() &&
            this.title === appointment.getTitle() &&
            this.startDate === appointment.getStartDate() &&
            this.endDate === appointment.getEndDate() &&
            this.note === appointment.getNote()
        );
    }

    static from({ id, title, startDate, endDate, note }: AppointmentPrisma) {
        return new Appointment({
            id,
            title,
            startDate,
            endDate,
            note: note ?? '',
        });
    }
}
