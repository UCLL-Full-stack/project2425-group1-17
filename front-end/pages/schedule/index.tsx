import Head from 'next/head';
import AppointmentForm from '@components/schedule/AppointmentForm';
import Image from 'next/image';
import { useState } from 'react';
import Header from '@components/header';
import styles from '@styles/home.module.css';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';

const Schedule: React.FC = () => {

  const [events, setEvents] = useState([{
    id: 1,
    title: 'Team Meeting',
    start: new Date(2024, 11, 20, 10, 0),
    end: new Date(2024, 11, 20, 11, 0),
    notes: 'Discuss upcoming projects',
  },]);
  const [showForm, setShowForm] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState<{start: Date, end: Date} | null>(null);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const localizer = momentLocalizer(moment);

  const addAppointment = (newEvent: {id: number, title: string, start : Date, end: Date , notes: string, client: string, employee: string}) => {
    setEvents((prevEvents) => [...prevEvents, newEvent]);
    setShowForm(false);
    setErrorMessage(null);
  };

  const handleSelectSlot = (slotInfo: {start: Date, end: Date}) => {
    const now = new Date();

    if(slotInfo.start < now){
      setErrorMessage('Cannot schedule an appointment in the past');
      return;
    }
    
    setSelectedSlot(slotInfo);
    setShowForm(true);
    setErrorMessage(null);
    
  }

  const handleCloseForm = () => {
    setShowForm(false);
    setSelectedSlot(null);
    setErrorMessage(null);
  }
  return (
    <>
            <Head>
                <title>Schedule Overview</title>
            </Head>
            <Header />
            <main className="d-flex flex-column justify-content-center align-items-center">
                <h1>Schedule</h1>
                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
                {showForm && selectedSlot && (
                  <div className='absolute top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50'>
                    <div className='bg-white p-4 rounded shadow-lg'>
                    <AppointmentForm 
                      onAddAppointment={(newEvent) => {
                        newEvent.start= selectedSlot.start;
                        newEvent.end = selectedSlot.end;
                        addAppointment(newEvent);
                    } }
                      defaultStart = {selectedSlot.start}/>
                   <button className='mt-2 text-red-500'
                   onClick={handleCloseForm}>Cancel</button>
                   </div>
                   </div>
                )}
                  {/*Calendar*/}
                  <div className="w-full h-full p-4"></div>
                  <Calendar
                  localizer={ localizer}
                  events={events}
                  startAccessor="start"
                  endAccessor="end"
                  selectable
                  onSelectSlot={handleSelectSlot}
                  style = {{height: '70vh', width:'100%'}} 
                  />
                
            </main>
        </>
  );
};

export default Schedule;