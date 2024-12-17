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
        this.time_frame_start = calendar.time_frame_start;
        this.appointments = [];

        for (const appointment of calendar.appointments) {
            this.addAppointment(appointment);
        }
    }

    // private validateTimeFrame(time_frame: string): void {
    //     const validTimeFrames = ['day', 'week ', 'month'];
    //     if (!validTimeFrames.includes(time_frame)) {
    //         throw new Error('Invalid time frame. Expected day, week or month.');
    //     }
    // }

    // private validateTimeFrameStart(time_frame_start: Date): void {
    //     if (!(time_frame_start instanceof Date) || isNaN(time_frame_start.getTime())) {
    //         throw new Error('Invalid date');
    //     }
    // }

    // private validateAppointments(
    //     appointments: Appointment[],
    //     time_frame: string,
    //     time_frame_start: Date
    // ): void {
    //     const time_frame_end = this.calculateTimeFrameEnd(time_frame, time_frame_start);

    //     for (let i = 0; i < appointments.length; i++) {
    //         const appointment = appointments[i];
    //         const appointmentStart = appointment.getStartDate();
    //         const appointmentEnd = appointment.getEndDate();

    //         if (appointmentStart < time_frame_start || appointmentEnd > time_frame_end) {
    //             throw new Error('Appointment is outside of the calendar time frame');
    //         }

    //         for (let j = i + 1; j < appointments.length; j++) {
    //             if (this.isOverlapping(appointment, appointments[j])) {
    //                 throw new Error('Appointments cannot overlap');
    //             }
    //         }
    //     }
    // }


    //if front end logic, then for now its not encessary
    // private calculateTimeFrameEnd(time_frame: string, time_frame_start: Date): Date {
    //     const time_frame_end = new Date(time_frame_start);
    //     switch (time_frame) {
    //         case 'day':
    //             time_frame_end.setDate(time_frame_end.getDate() + 1);
    //             break;
    //         case 'week':
    //             time_frame_end.setDate(time_frame_end.getDate() + 7);
    //             break;
    //         case 'month':
    //             time_frame_end.setMonth(time_frame_end.getMonth() + 1);
    //             break;
    //     }
    //     return time_frame_end;
    // }

    private isOverlapping(appointment1: Appointment, appointment2: Appointment): boolean {
        return(
            (appointment1.getStartDate() >= appointment2.getStartDate() && 
            appointment1.getStartDate() < appointment2.getEndDate()) ||
           (appointment1.getEndDate() > appointment2.getStartDate() && 
            appointment1.getEndDate() <= appointment2.getEndDate()) ||
           (appointment1.getStartDate() <= appointment2.getStartDate() && 
            appointment1.getEndDate() >= appointment2.getEndDate())
       );
    
    }


    //CRUD FOR APPOINTMENT WANT JEMOET APPOINTMENT TOEVOEGEN AAN CALENDAR
    addAppointment(appointment: Appointment): void {

       for (const existingAppointment of this.appointments) {
            if (this.isOverlapping(appointment, existingAppointment)) {
                throw new Error('Appointments cannot overlap');
            }
        }
        this.appointments.push(appointment);
    }

    listAppointments(): Appointment[]{
        return this.appointments;
    }

    removeAppointment(appointmentId: number): void {
        const index = this.appointments.findIndex((appointment) => appointment.getId() === appointmentId);
        if (index === -1) {
            throw new Error('Appointment not found');
        }
        this.appointments.splice(index, 1);
    }

    updateAppointment(updatedAppointment: Appointment): void{
        const index = this .appointments.findIndex((appointment) => appointment.getId() === updatedAppointment.getId());
        if (index === -1){
            throw new Error("Appointment not found");
        }
        const existingAppointment = this.appointments[index];
        this.appointments.splice(index, 1);
        try{
        this.addAppointment(updatedAppointment);}
        catch(error){
            this.appointments.splice(index, 0, existingAppointment);
            throw error;
        }
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
