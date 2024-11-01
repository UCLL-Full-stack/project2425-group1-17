const getAllEmployees = async () => {
    return await fetch(process.env.NEXT_PUBLIC_API_URL + '/employees', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });
};



const EmployeeService = {
    getAllEmployees
};

export default EmployeeService;