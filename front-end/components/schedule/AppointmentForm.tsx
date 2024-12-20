import React , {useState, useEffect} from "react";

type AppointmentFormProps = {
    onAddAppointment: (newEvent: {
        id: number;
        title: string;
        start: Date;
        end: Date;
        notes: string;
        client: string;
        employee: string;
    }) => void;
    defaultStart?: Date;
    };

const formatToLocalDateTime = (date: Date) => {
    const tzOffset = date.getTimezoneOffset()*60000;
    const localISOTime = new Date(date.getTime() - tzOffset).toISOString().slice(0,16);
    return localISOTime;
};

const AppointmentForm: React.FC<AppointmentFormProps> = ({onAddAppointment, defaultStart})=>{
    const [title, setTitle] = useState('');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [notes, setNotes] = useState('');
    const [client, setClient] = useState('');
    const [employee, setEmployee] = useState('');

    useEffect(()=>{
        if(defaultStart)setStartDate(formatToLocalDateTime(defaultStart));
        }, [defaultStart]
    );

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newAppointment = {
            id: Math.random(),
            title,
            start: new Date(startDate),
            end: new Date(endDate),
            notes,
            client,
            employee,};

        onAddAppointment(newAppointment);

        //clear form
        setTitle('');
        setStartDate('');
        setEndDate('');
        setNotes('');
        setClient('');
        setEmployee('');
    };

    return(
        <>
        <form onSubmit={handleSubmit} style={{ marginBottom: '1rem' }}>
        <div>
            <label>
            Title:
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                required
            />
            </label>
        </div>
        <div>
            <label>
            Start Date:
            <input
                type="datetime-local"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                required
            />
            </label>
        </div>
        <div>
            <label>
            End Date:
            <input
                type="datetime-local"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                required
            />
            </label>
        </div>
        <div>
            <label>
            Notes:
            <input
                type="text"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
            />
            </label>
        </div>
        <div>
            <label>
            Employee:
            <input
                type="text"
                value={employee}
                onChange={(e) => setEmployee(e.target.value)}
                required
            />
            </label>
        </div>
        <div>
            <label>
            Client:
            <input
                type="text"
                value={client}
                onChange={(e) => setClient(e.target.value)}
                required
            />
            </label>
        </div>
        <button type="submit">Add Appointment</button>
        </form>
        </>
    );

};

export default AppointmentForm;