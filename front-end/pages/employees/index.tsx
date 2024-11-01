import Header from '@components/header';
import EmployeeService from '@services/EmployeeService';
import { Employee } from '@types';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';

const Employees: React.FC = () => {
    const [employees, setEmployees] = useState<Employee[]>([]);

    const getEmployees = async () => {
        const employees = await EmployeeService.getAllEmployees();
        const json = await employees.json();
        setEmployees(json);
    };

    useEffect(() => {
        getEmployees();
    }, []);

    return (
        <>
            <Head>
                <title>Employees</title>
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.3/css/bootstrap.min.css"
                    integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRjH/E3A5C5E3Z9whsTw5b1D8ZjE3ZRXl4yP6MfEO"
                    crossOrigin="anonymous"
                />
            </Head>
            <Header />
            <div className="container my-4">
                <h1 className="text-center mb-4">Employees</h1>
                <div className="table-responsive">
                    <table className="table table-striped table-hover">
                        <thead className="table-dark">
                            <tr>
                                <th scope="col">ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Phone Number</th>
                                <th scope="col">Work Hours</th>
                                <th scope="col">Current Hours</th>
                                <th scope="col">Client</th>
                            </tr>
                        </thead>
                        <tbody>
                            {employees.map((employee) => (
                                <tr key={employee.id}>
                                    <td>{employee.id}</td>
                                    <td>{employee.name}</td>
                                    <td>{employee.phone_number}</td>
                                    <td>{employee.work_hours}</td>
                                    <td>{employee.current_hours}</td>
                                    <td>
                                        {employee.clients && employee.clients.length > 0 ? (
                                            <ul className="list-unstyled mb-0">
                                            {employee.clients.map(client => (
                                                <li key={client.id}>{client.name} - {client.town}</li>
                                            ))}
                                        </ul>
                                        ) : (
                                            'No clients'
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
};

export default Employees;
