import EmployeeDetails from '@components/employees/EmployeeDetails';
import Header from '@components/header';
import EmployeeService from '@services/EmployeeService';
import { Employee } from '@types';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const ReadEmployeeById = () => {
    const [employee, setEmployee] = useState<Employee | null>(null);

    const router = useRouter();
    const { employeeId } = router.query;

    // als we 2 asynchrone functies zouden hebben door verschillende dynamic routings te doen
    // hebben we promise.all om te zeggen dat die op beide moet wachten niet enkel 1 van de 2
    // hier niet perse nodig omdat we maar 1 gebruiken
    const getEmployeeById = async () => {
        const [employeeResponse] = await Promise.all([
            EmployeeService.getEmployeeById(employeeId as string),
        ]);
        const [local_employee] = await Promise.all([employeeResponse.json()]);
        setEmployee(local_employee);
    };

    useEffect(() => {
        if (employeeId) getEmployeeById();
    });

    return (
        <>
            <Head>
                <title>Employee info</title>
            </Head>
            <Header />
            <main className="d-flex flex-column justify-content-center align-items-center">
                <h1>Info over {employee && employee.name}</h1>
                {!employeeId && <p>Loading</p>}
                <section>
                    {employee && <EmployeeDetails employee={employee}></EmployeeDetails>}
                </section>
            </main>
        </>
    );
};

export default ReadEmployeeById;