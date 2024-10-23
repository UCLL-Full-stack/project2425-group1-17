export class Appointment {
    private id?: number;
    private title: string;
    private date: Date;
    private duration: number;
    private note?: string;

    constructor(appointment: {
        id?: number;
        title: string;
        date: Date;
        duration: number;
        note?: string;
    }) {
        this.id = appointment.id;
        this.title = appointment.title;
        this.date = appointment.date;
        this.duration = appointment.duration;
        this.note = appointment.note;
    }

    getId(): number | undefined {
        return this.id;
    }

    getTitle(): string {
        return this.title;
    }

    getDate(): Date {
        return this.date;
    }

    getDuration(): number {
        return this.duration;
    }

    getNote(): string | undefined {
        return this.note;
    }
}
