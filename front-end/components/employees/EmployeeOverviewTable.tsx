import React from 'react';
import { Employee } from '@types';

type Props = {
    employees: Array<Employee>;
    //onSelectEmployee: (employee: Employee) => void;
};

//const EmployeeOverviewTable: React.FC<Props> = ({ employees, onSelectEmployee }: Props) => {
const EmployeeOverviewTable: React.FC<Props> = ({ employees }: Props) => {
    return (
        <>
            {employees && (
                <table className="table table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Name</th>
                            <th scope="col">Work Hours</th>
                            <th scope="col">Phone Number</th>
                            {/* <th scope="col">Current Hours</th> */}
                            {/* <th scope="col">Calendar</th> */}
                            <th scope="col">Clients</th>
                        </tr>
                    </thead>
                    <tbody>
                        {employees.map((employee, index) => (
                            //              <tr key={index}>onClick={() => onSelectEmployee(employee)} role="button">
                            <tr key={index}>
                                <td>{employee.name}</td>
                                <td>{employee.work_hours}</td>
                                <td>{employee.phone_number}</td>
                                {/* <td>{employee.calendar.time_frame}</td> */}
                                <td>
                                    
                                    <ul>
                                    {employee.clients.map((client) => (<li key={client.id}>{client.name}</li>))}</ul>
                                    </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
};

export default EmployeeOverviewTable;
