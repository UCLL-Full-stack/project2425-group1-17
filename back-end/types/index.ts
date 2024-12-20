

type Role = 'admin' | 'employee' | 'client';

type UserInput = {
    id?: number;
    username: string;
    password: string;
    role: Role;
};

type CalendarInput = {
    id?: number;
    time_frame: string;
    appointments: AppointmentInput[];
    time_frame_start: Date;
};

type EmployeeInput = {
    id?: number;
    name: string;
    work_hours: number;
    current_hours: number;
    phone_number: string;
    calendar: CalendarInput;
    clients: ClientInput[];
};

type ClientInput = {
    id?: number;
    name: string;
    phone_number: string;
    town: string;
    adres: string;
    house_number: number;
    postal_code: string;
};

type AppointmentInput = {
    id?: number;
    title: string;
    startDate: Date;
    endDate: Date;
    note: string;
};

export { Role, UserInput, EmployeeInput, ClientInput, AppointmentInput, CalendarInput };
