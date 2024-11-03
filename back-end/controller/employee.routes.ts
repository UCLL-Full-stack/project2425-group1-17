import express, { NextFunction, Request, Response } from 'express';
import employeeService from '../service/employee.service';

const employeeRouter = express.Router();

employeeRouter.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const employees =  await employeeService.getAllEmployees();
        res.status(200).json(employees);
    } catch (e) {
        next(e);
    }
});



export { employeeRouter};