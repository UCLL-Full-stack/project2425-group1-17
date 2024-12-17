import express, { NextFunction, Request, Response } from 'express';
import { ClientInput, EmployeeInput } from '../types';
import employeeService from '../service/employee.service';

const employeeRouter = express.Router();

employeeRouter.post('/', (req: Request, res: Response) => {
    try {
        const employee = <EmployeeInput>req.body;
        const result = employeeService.createEmployee(employee);
        res.status(200).json(result);
    } catch (error: any) {
        res.status(400).json({ status: 'error', errorMessage: error.message });
    }
});

employeeRouter.get('/:id/appointments', (req: Request, res: Response, next: NextFunction) => {
    try{
        const id = Number(req.params.id);
        if (isNaN(id)) {
            throw new Error('Invalid ID');
        }
        const result = employeeService.getAppointmentForEmployee({id});
        res.status(200).json(result);
    }catch(error: any){
        res.status(400).json({ status: 'error', errorMessage: error.message });
    }});

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


export { employeeRouter };
