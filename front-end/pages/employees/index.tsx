import EmployeeOverviewTable from '@components/employees/EmployeeOverviewTable';
import Header from '@components/header';
import EmployeeService from '@services/EmployeeService';
import { Employee } from '@types';
import Head from 'next/head';
import React, { useEffect, useState } from 'react';

const Employees: React.FC = () => {
    const [employees, setEmployees] = useState<Array<Employee>>();

    //employees hierboven is een state variabele local_employees is een lokale variabele
    //die enkel gekent is in onderste functie
    const getEmployees = async () => {
        const response = await EmployeeService.getAllEmployees();
        const local_employees = await response.json();
        setEmployees(local_employees);
    };

    useEffect(() => {
        getEmployees();
    }, []);

    return (
        <>
            <Head>
                <title>Employees</title>
            </Head>
            <Header />
            <main className="d-flex flex-column justify-content-center align-items-center">
                <h1>Employees</h1>
                <section>{employees && <EmployeeOverviewTable employees={employees} />}</section>
            </main>
        </>
    );
};

// const Employees: React.FC = () => {
//     const [employees, setEmployees] = useState<Employee[]>([]);
//     const [showModal, setShowModal]= useState<boolean>(false);
//     const [formData, setFormData] = useState({
//         name: '',
//         phone_number: '',
//         work_hours: 40,
//         current_hours: 0,
//         client: '',
//     });

//     const getEmployees = async () => {
//         const employees = await EmployeeService.getAllEmployees();
//         const json = await employees.json();
//         setEmployees(json);
//     };

//     const handleAddEmployee = async () => {
//         await EmployeeService.addEmployee(formData);
//         setShowModal(false); // Close modal after adding
//         getEmployees(); // Refresh employees list
//     };

//     const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//         const { name, value } = e.target;
//         setFormData(prevState => ({
//             ...prevState,
//             [name]: name === 'work_hours' || name === 'current_hours' ? Number(value) : value
//         }));
//     };

//     useEffect(() => {
//         getEmployees();
//     }, []);

//     return (
//         <>
//             <Head>
//                 <title>Employees</title>
//                 <link
//                     rel="stylesheet"
//                     href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.1.3/css/bootstrap.min.css"
//                     integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRjH/E3A5C5E3Z9whsTw5b1D8ZjE3ZRXl4yP6MfEO"
//                     crossOrigin="anonymous"
//                 />
//             </Head>
//             <Header />
//             <div className="container my-4">
//                 <h1 className="text-center mb-4">Employees</h1>
//                 <button className="btn btn-primary mb-3" onClick={() => setShowModal(true)}>
//                     Add Employee
//                 </button>
//                 <div className="table-responsive">
//                     <table className="table table-striped table-hover">
//                         <thead className="table-dark">
//                             <tr>
//                                 <th scope="col">ID</th>
//                                 <th scope="col">Name</th>
//                                 <th scope="col">Phone Number</th>
//                                 <th scope="col">Work Hours</th>
//                                 <th scope="col">Current Hours</th>
//                                 <th scope="col">Client</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {employees.map((employee) => (
//                                 <tr key={employee.id}>
//                                     <td>{employee.id}</td>
//                                     <td>{employee.name}</td>
//                                     <td>{employee.phone_number}</td>
//                                     <td>{employee.work_hours}</td>
//                                     <td>{employee.current_hours}</td>
//                                     <td>
//                                         {employee.clients && employee.clients.length > 0 ? (
//                                             <ul className="list-unstyled mb-0">
//                                             {employee.clients.map(client => (
//                                                 <li key={client.id}>{client.name} - {client.town}</li>
//                                             ))}
//                                         </ul>
//                                         ) : (
//                                             'No clients'
//                                         )}
//                                     </td>
//                                 </tr>
//                             ))}
//                         </tbody>
//                     </table>
//                 </div>
//             </div>

//             {showModal && (
//                 <div className="modal show d-block" tabIndex={-1}>
//                     <div className="modal-dialog">
//                         <div className="modal-content">
//                             <div className="modal-header">
//                                 <h5 className="modal-title">Add Employee</h5>
//                                 <button type="button" className="btn-close" onClick={() => setShowModal(false)}></button>
//                             </div>
//                             <div className="modal-body">
//                                 <form>
//                                     <div className="mb-3">
//                                         <label className="form-label">Name</label>
//                                         <input type="text" className="form-control" name="name" value={formData.name} onChange={handleChange} />
//                                     </div>
//                                     <div className="mb-3">
//                                         <label className="form-label">Phone Number</label>
//                                         <input type="text" className="form-control" name="phone_number" value={formData.phone_number} onChange={handleChange} />
//                                     </div>
//                                     <div className="mb-3">
//                                         <label className="form-label">Work Hours</label>
//                                         <input type="number" className="form-control" name="work_hours" value={formData.work_hours} onChange={handleChange} />
//                                     </div>
//                                     <div className="mb-3">
//                                         <label className="form-label">Current Hours</label>
//                                         <input type="number" className="form-control" name="current_hours" value={formData.current_hours} onChange={handleChange} />
//                                     </div>
//                                     <div className="mb-3">
//                                         <label className="form-label">Client</label>
//                                         <input type="text" className="form-control" name="client" value={formData.client} onChange={handleChange} />
//                                     </div>
//                                 </form>
//                             </div>
//                             <div className="modal-footer">
//                                 <button type="button" className="btn btn-secondary" onClick={() => setShowModal(false)}>
//                                     Close
//                                 </button>
//                                 <button type="button" className="btn btn-primary" onClick={handleAddEmployee}>
//                                     Save
//                                 </button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             )}
//         </>
//     );
// };

export default Employees;
