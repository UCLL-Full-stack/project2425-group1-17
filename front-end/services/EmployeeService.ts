const getAllEmployees = async () => {
    return await fetch(process.env.NEXT_PUBLIC_API_URL + '/employees', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
};

const addEmployee = async (employeeData: { name: string; hours: number; client: string; phone_number: string; }) => {
    return await fetch(process.env.NEXT_PUBLIC_API_URL + '/employees', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(employeeData),
    });
};


const EmployeeService = {
    getAllEmployees,
    addEmployee,
};

export default EmployeeService;