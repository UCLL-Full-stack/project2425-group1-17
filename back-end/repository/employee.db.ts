import { PrismaClient } from '@prisma/client';
import { Appointment } from '../model/appointment';
import { Client } from '../model/client';
import { Employee } from '../model/employee';

const prisma = new PrismaClient();

//we maken een nieuwe const aan ipv meteen push omdat we anders vefificatie skippen
const createEmployee = async (employee: Employee): Promise<Employee> => {
    const createdEmployee = await prisma.employee.create({
        data: {
            name: employee.getName(),
            work_hours: employee.getWork_hours(),
            current_hours: employee.getCurrent_hours(),
            phone_number: employee.getPhone_number(),
            clients: {
                create: employee.getClients().map((client) => ({
                    clientId: client.getId() as number,
                })),
            },
            appointments: {
                create: employee.getAppointments().map((appointment) => ({
                    title: appointment.getTitle(),
                    startDate: appointment.getStartDate(),
                    endDate: appointment.getEndDate(),
                    note: appointment.getNote(),
                })),
            },
        },
        include: {
            clients: { include: { client: true } },
            appointments: true,
        },
    });
    return Employee.from(createdEmployee);
};

const getEmployeeByName = async ({ name }: { name: string }): Promise<Employee | null> => {
    try {
        const employeePrisma = await prisma.employee.findFirst({
            where: { name },
            include: {
                clients: { include: { client: true } },
                appointments: true,
            },
        });
        if (!employeePrisma) {
            return null;
        }
        return Employee.from(employeePrisma);
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch employee by name');
    }
};

const getEmployeeById = async ({ id }: { id: number }): Promise<Employee | null> => {
    try {
        const employeePrisma = await prisma.employee.findUnique({
            where: { id },
            include: {
                appointments: true,
                clients: { include: { client: true } },
            },
        });

        if (!employeePrisma) {
            return null;
        }
        return Employee.from(employeePrisma);
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch employee by id');
    }
};

const getAllEmployees = async (): Promise<Employee[]> => {
    try {
        const employeesPrisma = await prisma.employee.findMany({
            include: {
                clients: { include: { client: true } },
                appointments: true,
            },
        });

        return employeesPrisma.map((employeePrisma) => Employee.from(employeePrisma));
    } catch (error) {
        console.error(error);
        throw new Error('Failed to fetch all employees');
    }
};

export default {
    createEmployee,
    getEmployeeByName,
    getEmployeeById,
    getAllEmployees,
};
