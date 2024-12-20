import { PrismaClient } from '@prisma/client';
import express, { NextFunction, Request, Response } from 'express';
import { ClientInput, EmployeeInput } from '../types';
import employeeService from '../service/employee.service';

const prisma = new PrismaClient();
const employeeRouter = express.Router();

employeeRouter.post('/',async (req: Request, res: Response) => {
    
        const {name, work_hours, current_hours, phone_number, clientsIds} = req.body;
    try{
        



        const result = await prisma.employee.create({
            data: {
                name,
                work_hours,
                current_hours,
                phone_number,
                clients: {
                    connect: clientsIds?.map((clientId: number) => ({id: clientId})),
                }, },
                include: {clients: {include: {client:true}}},
            });
        res.status(200).json(result);
    } catch (error: any) {
        res.status(400).json({ status: 'error', errorMessage: error.message });
    }
});


employeeRouter.get('/', async (req: Request, res: Response) => {
    try {
        const result = await prisma.employee.findMany({include: {clients: {include: {client:true}}}});
        res.status(200).json(result);
    } catch (error: any) {
        res.status(400).json({ status: 'error', errorMessage: error.message });
    }
});

// employeeRouter.get('/:id/appointments', (req: Request, res: Response, next: NextFunction) => {
//     try{
//         const id = Number(req.params.id);
//         if (isNaN(id)) {
//             throw new Error('Invalid ID');
//         }
//         const result = employeeService.getAppointmentForEmployee({id});
//         res.status(200).json(result);
//     }catch(error: any){
//         res.status(400).json({ status: 'error', errorMessage: error.message });
//     }});

employeeRouter.post('/:id/clients', (req: Request, res: Response, next: NextFunction) => {
    try{
        const employeeId = Number(req.params.id);
        if (isNaN(employeeId)) {
            throw new Error('Invalid ID');
        }
        const addEmployee = employeeService.addClientToEmployee(employeeId,req.body);
        res.status(200).json(addEmployee);
        
    }catch(error: any){
        res.status(400).json({ status: 'error', errorMessage: error.message });
    }});

employeeRouter.delete('/:id', async (req: Request, res: Response) => {
    try {
        const id = parseInt(req.params.id, 10);
        if (isNaN(id)){
            throw new Error('Invalid employee ID');

        }
        await employeeService.deleteEmployee({ id });
        res.status(200).json({ message: `Deleted successfully.` })
    }
    catch(error: any){
        res.status(400).json({status: 'error', errorMessage: error.message});
    }
})


export { employeeRouter };
