export class Appointment {
    readonly id?: number;
    readonly title: string;
    readonly date: Date;
    readonly duration: number;
    readonly note: string;

    constructor(appointment: {
        id?: number;
        title: string;
        date: Date;
        duration: number;
        note: string;
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

    equals(appointment: Appointment): boolean {
        return (
            this.id === appointment.getId() &&
            this.title === appointment.getTitle() &&
            this.date === appointment.getDate() &&
            this.duration === appointment.getDuration() &&
            this.note === appointment.getNote()
        );
    }
}
