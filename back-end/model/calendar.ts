import { Appointment } from './appointment';

export class Calendar {
    readonly id?: number;
    readonly time_frame: string;
    readonly appointments: Appointment[];
    readonly time_frame_start: Date;

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

    equals(calendar: Calendar): boolean {
        return (
            this.id === calendar.getId() &&
            this.time_frame === calendar.getTime_frame() &&
            this.appointments.every((appointment, index) =>
                appointment.equals(calendar.getAppointments()[index])
            ) &&
            this.time_frame_start === calendar.getTime_frame_start()
        );
    }
}
