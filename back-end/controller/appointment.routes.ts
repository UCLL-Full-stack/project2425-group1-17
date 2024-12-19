import express, { Request, Response } from 'express';
import { AppointmentInput } from '../types';
import appointmentService from '../service/appointment.service';

const appointmentRouter = express.Router();

appointmentRouter.get('/', async (req: Request, res: Response) => {
    try {
        const appointments = await appointmentService.getAllAppointments();
        res.status(200).json(appointments);
    } catch (error: any) {
        res.status(400).json({ status: 'error', errorMessage: error.message });
    }
});

export { appointmentRouter };
