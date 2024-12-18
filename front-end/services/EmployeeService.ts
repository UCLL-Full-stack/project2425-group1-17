const getAllEmployees = async () => {
    return fetch(process.env.NEXT_PUBLIC_API_URL + '/employees', {
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

const addEmployee = async (employeeData: {
    name: string;
    phone_number: string;
    work_hours: number;
    current_hours: number;
    client: string;
}) => {
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
