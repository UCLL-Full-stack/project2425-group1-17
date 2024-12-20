import express, { Request, Response } from 'express';
import { AppointmentInput } from '../types';
import appointmentService from '../service/appointment.service';

const appointmentRouter = express.Router();

appointmentRouter.post('/', async (req: Request, res: Response) => {
    try {
        const appointmentInput: AppointmentInput = req.body;
        const newAppointment = await appointmentService.createAppointment(appointmentInput);
        res.status(201).json(newAppointment);
    } catch (error: any) {
        res.status(400).json({ status: 'error', errorMessage: error.message });
    }
});

appointmentRouter.get('/', async (req: Request, res: Response) => {
    try {
        const appointments = await appointmentService.getAllAppointments();
        res.status(200).json(appointments);
    } catch (error: any) {
        res.status(400).json({ status: 'error', errorMessage: error.message });
    }
});

export { appointmentRouter };
