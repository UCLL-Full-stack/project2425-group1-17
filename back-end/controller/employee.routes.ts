import express, { Request, Response } from 'express';
import { EmployeeInput } from '../types';
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

export { employeeRouter };
