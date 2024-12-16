import express, { Request, Response } from 'express';
import { AppointmentInput } from '../types';
import appointmentService from '../service/appointment.service';

const appointmentRouter = express.Router();

appointmentRouter.post('/', (req: Request, res: Response) => {
    try {
        const appointment = <AppointmentInput>req.body;
        const result = appointmentService.createAppointment(appointment);
        res.status(200).json(result);
    } catch (error: any) {
        res.status(400).json({ status: 'error', errorMessage: error.message });
    }
});

export { appointmentRouter };
