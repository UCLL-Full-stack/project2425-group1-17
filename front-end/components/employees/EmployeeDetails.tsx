import React from 'react';
import { Employee } from '@types';

type Props = {
    employee: Employee;
};

const EmployeeDetails: React.FC<Props> = ({ employee }: Props) => {
    //volgende regel wordt nog nooit opgeroepen maar is voor zekerheid omdat in employeeId wordt dit pas opgeroepen als er een employee is
    if (!employee) return <p>Deze medewerker bestaat niet.</p>;

    return (
        <>
            {employee && (
                <table>
                    <tr>
                        <td>ID:</td>
                        <td>{employee.id}</td>
                    </tr>
                    <tr>
                        <td>Name:</td>
                        <td>{employee.name}</td>
                    </tr>
                    {/*<tr>
            <td>E-mail:</td>
            <td>{lecturer.user.email}</td>
          </tr>
          <tr>
            <td>Expertise:</td>
            <td>{lecturer.expertise}</td>
          </tr> */}
                </table>
            )}
        </>
    );
};

export default EmployeeDetails;
