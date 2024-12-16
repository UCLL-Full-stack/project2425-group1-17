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

    private validateTimeFrame(time_frame: string): void {
        const validTimeFrames = ['day', 'week ', 'month'];
        if (!validTimeFrames.includes(time_frame)) {
            throw new Error('Invalid time frame. Expected day, week or month.');
        }
    }

    private validateTimeFrameStart(time_frame_start: Date): void {
        if (!(time_frame_start instanceof Date) || isNaN(time_frame_start.getTime())) {
            throw new Error('Invalid date');
        }
    }

    private validateAppointments(
        appointments: Appointment[],
        time_frame: string,
        time_frame_start: Date
    ): void {
        const time_frame_end = this.calculateTimeFrameEnd(time_frame, time_frame_start);

        for (let i = 0; i < appointments.length; i++) {
            const appointment = appointments[i];
            const appointmentStart = appointment.getStartDate();
            const appointmentEnd = appointment.getEndDate();

            if (appointmentStart < time_frame_start || appointmentEnd > time_frame_end) {
                throw new Error('Appointment is outside of the calendar time frame');
            }

            for (let j = i + 1; j < appointments.length; j++) {
                if (this.isOverlapping(appointment, appointments[j])) {
                    throw new Error('Appointments cannot overlap');
                }
            }
        }
    }

    private calculateTimeFrameEnd(time_frame: string, time_frame_start: Date): Date {
        const time_frame_end = new Date(time_frame_start);
        switch (time_frame) {
            case 'day':
                time_frame_end.setDate(time_frame_end.getDate() + 1);
                break;
            case 'week':
                time_frame_end.setDate(time_frame_end.getDate() + 7);
                break;
            case 'month':
                time_frame_end.setMonth(time_frame_end.getMonth() + 1);
                break;
        }
        return time_frame_end;
    }

    private isOverlapping(appointment1: Appointment, appointment2: Appointment): boolean {
        const start1 = appointment1.getStartDate();
        const end1 = appointment1.getEndDate();
        const start2 = appointment2.getStartDate();
        const end2 = appointment2.getEndDate();

        return (
            (start1 >= start2 && start1 < end2) ||
            (end1 > start2 && end1 <= end2) ||
            (start1 <= start2 && end1 >= end2)
        );
    }

    addAppointment(appointment: Appointment): void {
        const timeFramEnd = this.calculateTimeFrameEnd(this.time_frame, this.time_frame_start);
        const appointmentStart = appointment.getStartDate();
        const appointmentEnd = appointment.getEndDate();

        if (appointmentStart < this.time_frame_start || appointmentEnd > timeFramEnd) {
            throw new Error('Appointment is outside of the calendar time frame');
        }

        if (
            this.appointments.some((existingAppointment) =>
                this.isOverlapping(existingAppointment, appointment)
            )
        ) {
            throw new Error('Appointments cannot overlap');
        }

        this.appointments.push(appointment);
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
