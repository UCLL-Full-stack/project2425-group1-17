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
                            <th scope="col">Current Hours</th>
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
                                <td>{employee.current_hours}</td>
                                {/* <td>{employee.calendar.time_frame}</td> */}
                                <td>{employee.clients.map((client) => client.name).join(', ')}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            )}
        </>
    );
};

export default EmployeeOverviewTable;
