import { ca } from 'date-fns/locale';
import { Client } from '../model/client';
import { Employee } from '../model/employee';
//import calendarDb from '../repository/calendar.db';
import employeeDb from '../repository/employee.db';
import { EmployeeInput, ClientInput } from '../types';
import { Appointment } from '@prisma/client';


const createEmployee = async (employeeInput: EmployeeInput): Promise<Employee> => {
    try {
        const newEmployee = new Employee({
            name: employeeInput.name,
            work_hours: employeeInput.work_hours,
            current_hours: employeeInput.current_hours ?? 0,
            phone_number: employeeInput.phone_number,
            appointments: [], // Appointments are added separately
            clients: (employeeInput.clients || []).map(
                (clientInput) =>
                    new Client({
                        id: clientInput.id,
                        name: clientInput.name,
                        phone_number: clientInput.phone_number,
                        town: clientInput.town,
                        adres: clientInput.adres,
                        house_number: clientInput.house_number,
                        postal_code: clientInput.postal_code,
                    })
            ),
        });
        return await employeeDb.createEmployee(newEmployee);

        } catch (error) {
            console.error(error);
            throw new Error('Failed to create employee');
        }
    }

    const getEmployeeByName = async ({name}: {name: string}): Promise<Employee | null> => { 
        try{
            return await employeeDb.getEmployeeByName({name});
        } catch(error){
            console.error(error);
            throw new Error('Failed to fetch employee by name');
        }
    };

    const getEmployeeById = async ({id}: {id: number}): Promise<Employee | null> => {
        try {
            return await employeeDb.getEmployeeById({id});
        } catch (error) {
            console.error(error);
            throw new Error('Failed to fetch employee by id');
        }
    };

    const getEmployees = async (): Promise<Employee[]> => {
        try{
            return await employeeDb.getAllEmployees();
        }
        catch (error){
            console.error(error);
            throw new Error('Failed to fetch all employees');
        }
    };



// const getAppointmentForEmployee = async({id} : {id: number}) : Promise<Appointment[]> => {
//     const employee = await employeeDb.getEmployeeById({id});
//     if (!employee) {
//         throw new Error('Employee not found');
//     }
//     return employee.getAppointments();

// };

const addClientToEmployee = async(employeeId: number, clientInput: ClientInput): Promise<Employee> => {
    try{
    const employee = await employeeDb.getEmployeeById({id: employeeId});

    if (!employee) {
        throw new Error('Employee not found');
    }
    const newClient = new Client(clientInput);
    employee.addClient(newClient);
    const updatedEmployee = await employeeDb.createEmployee(employee);
    return updatedEmployee;}
    catch   (error){
        console.error(error);
        throw new Error('Failed to add client to employee');
    }
};

const  deleteEmployee = async({ id }: { id: number }): Promise<void> => {
    try {
        const employee = await employeeDb.getEmployeeById({id});
        if (!employee){
            throw new Error('Employee not found');

        }
        await employeeDb.deleteEmployee({id});
        console.log(`Employee has been deleted successfully.`)
    }catch(error){
        console.error(error);
        throw new Error('Failed to delete employee.');
    }
}


export default { createEmployee , getEmployeeByName, getEmployeeById, getEmployees, addClientToEmployee, deleteEmployee};
