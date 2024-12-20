import React, { useState } from 'react';
import { Employee } from '@types';
import {EmployeeInput} from '../../../back-end/types/index'
import exp from 'constants';

interface EmployeeFormProps {
    onClose: () => void;
    onSubmit: (employeeData: {
        name: string;
        work_hours: number;
        // current_hours: number;
        phone_number: string;
        clients: {name: string; phone_number: string; town: string; adres: string; house_number: number; postal_code: string;}[];
    }) => void;}

const EmployeeForm: React.FC<EmployeeFormProps> = ({ onClose, onSubmit}) => {
    const [name, setName] = useState('');
    const [work_hours, setWork_hours] = useState(40);
    // const [current_hours, setCurrent_hours] = useState(0);
    const [phone_number, setPhone_number] = useState('');

    const [clients, setClients] = useState<{name: string; phone_number: string; town: string; adres: string; house_number:  number; postal_code:string}[]>([]);
    const [newClient, setClient] = useState<{name: string; phone_number: string; town: string; adres: string; house_number: number; postal_code: string}>({name: '', phone_number: '', town: '', adres: '', house_number: 0, postal_code: ''});

    const handleAddClient = () => {
        if(!newClient.name || !newClient.phone_number || !newClient.town || !newClient.adres || !newClient.house_number || !newClient.postal_code){
            alert('Please fill in all fields');
            return;}

    setClients([...clients, newClient]);
    setClient({
        name: '', phone_number: '', town: '', adres: '', house_number: 0, postal_code: ''});};
    

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        onSubmit({name, work_hours: work_hours, phone_number: phone_number, clients : []});
        console.log({name, work_hours, phone_number, clients});
    }


    return(
        <>
        <div className="max-w-lg mx-auto mt-8 p-6 bg-white shadow-lg rounded-lg">
        <h3 className="text-2xl font-semibold text-gray-700 text-center mb-4">Add Employee</h3>

        <div>
        <form onSubmit={handleSubmit}  className="space-y-4">
            <div >
            <label className="form-label ">
                Name:
                <input type="text" name="name" value={name} onChange={(e) => setName(e.target.value)  }/>
            </label>
            <label className="form-label">
                Work Hours:
                <input type="number" name="work_hours" value={work_hours} onChange={(e) => setWork_hours(Number(e.target.value))}/>
            </label>
            {/* <label className="form-label">
                Current Hours:
                <input type="number" name="current_hours" value={current_hours} onChange={handleChange}/>
            </label> */}
            <label className="form-label">
                Phone Number:
                <input type="text" name="phone_number" value={phone_number} onChange={(e) => setPhone_number(e.target.value)}/>
            </label>
            </div>
            <div>
                <h5 className="text-lg font-medium text-gray-700 mb-2">Clients</h5>
                {clients.map((client, index) => (
                    <div key={index} className="border p-2 mb-2">
                    <p>
                    <strong>{client.name}</strong>
                    </p>
                    <p>{client.phone_number}</p>
                    <p>
                      {client.adres}, {client.house_number}, {client.town}, {client.postal_code}
                    </p> 
                    </div>)
                )}

                <h6>Add New Client</h6>
                <div className='mb-2'>
                    <input type='text' placeholder='Name' value={newClient.name} onChange={(e) => setClient({...newClient, name: e.target.value})} required/>
                    <input type='text' placeholder='Phone Number' value={newClient.phone_number} onChange={(e) => setClient({...newClient, phone_number: e.target.value})} required/>
                    <input type='text' placeholder='Town' value={newClient.town} onChange={(e) => setClient({...newClient, town: e.target.value})} required/>
                    <input type='text' placeholder='Adres' value={newClient.adres} onChange={(e) => setClient({...newClient, adres: e.target.value})} required/>
                    <input type='number' placeholder='House Number' value={newClient.house_number} onChange={(e) => setClient({...newClient, house_number: Number(e.target.value)})} required/>
                    <input type='text' placeholder='Postal Code' value={newClient.postal_code} onChange={(e) => setClient({...newClient, postal_code: e.target.value})} required/>
                    <button type='button' className="btn btn-secondary mt-2" onClick={handleAddClient}>Add Client</button>

                </div>

                <button type="submit" className='btn btn-primary' onClick={handleSubmit}>Submit</button>
            </div>
            
            <button type="button" onClick={onClose}>Cancel</button>
        </form>
        </div>
        </div>
        </>
    );


};

export default EmployeeForm;