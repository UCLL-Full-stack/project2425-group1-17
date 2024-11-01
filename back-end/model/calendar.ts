import { Appointment } from './appointment';

export class Calendar {
    private id?: number;
    public time_frame: string;
    private appointments: Appointment[];
    private time_frame_start: Date;

    constructor(calendar: {
        id?: number;
        time_frame: string;
        appointments: Appointment[];
        time_frame_start: Date;
    }) {
        this.id = calendar.id;
        this.time_frame = calendar.time_frame;
        this.appointments = calendar.appointments;
        this.time_frame_start = calendar.time_frame_start;
    }

    getId(): number | undefined {
        return this.id;
    }

    getTime_frame(): string {
        return this.time_frame;
    }

    getAppointments(): Appointment[] {
        return this.appointments;
    }

    getTime_frame_start(): Date {
        return this.time_frame_start;
    }
}
