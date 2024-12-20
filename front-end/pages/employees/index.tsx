import EmployeeOverviewTable from '@components/employees/EmployeeOverviewTable';
import Header from '@components/header';
import EmployeeService from '@services/EmployeeService';
import { Employee } from '@types';
import Head from 'next/head';
import React, { use, useEffect, useState } from 'react';
import EmployeeForm from '@components/employees/EmployeeForm';

const Employees: React.FC = () => {
    const [employees, setEmployees] = useState<Array<Employee>>([]);
    const [showForm, setShowForm] = useState<boolean>(false);
     
    const fetchEmployees = async () => {
        try{
            const response = await EmployeeService.getAllEmployees();
            const data = await response.json();
            setEmployees(data);
    
        } catch (error) {
            console.error(error);
        }
    }

    const handleAddEmployee = async (employeeData: {
        name: string;
        work_hours: number; 
        phone_number: string;
        clients: {name: string; phone_number: string; town: string; adres: string; house_number: number; postal_code: string;}[];
    }) => {
        try{
            await EmployeeService.addEmployee(employeeData);
            setShowForm(true);
            fetchEmployees();
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchEmployees();
    }, [])
    return (
        <>
            <Head>
                <title>Employees</title>
            </Head>
            <Header />
            <main className="d-flex flex-column justify-content-center align-items-center">
                <h1>Employees</h1>
                <button className="btn btn-primary mb-3" onClick={() => setShowForm(true)}>Add Employee </button>
                {showForm && (<EmployeeForm onClose={() => setShowForm(false)} onSubmit={handleAddEmployee} />)}
                <section>{employees && <EmployeeOverviewTable employees={employees} />}</section>
            </main>
        </>
    );
};



export default Employees;