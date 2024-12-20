import { EmployeeInput } from "../../back-end/types";

const getAllEmployees = async () => {
    return await fetch(process.env.NEXT_PUBLIC_API_URL + '/employees', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

const getEmployeeById = (employeeId: string) => {
    return fetch(process.env.NEXT_PUBLIC_API_URL + `/employees/${employeeId}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

const addEmployee = async (employeeData:{name: string; work_hours: number; phone_number:string;  clients: { name: string; phone_number: string; town: string; adres: string; house_number: number; postal_code: string;}[]; }) => {
    return await fetch(process.env.NEXT_PUBLIC_API_URL + '/employees', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(employeeData),
    });
};

const EmployeeService = {
    getAllEmployees,
    getEmployeeById,
    addEmployee,
};

export default EmployeeService;
