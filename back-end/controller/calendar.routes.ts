import express, { Request, Response } from 'express';
import { CalendarInput } from '../types';
import calendarService from '../service/calendar.service';

const calendarRouter = express.Router();

calendarRouter.post('/', (req: Request, res: Response) => {
    try {
        const calendar = <CalendarInput>req.body;
        const result = calendarService.createCalendar(calendar);
        res.status(200).json(result);
    } catch (error: any) {
        res.status(400).json({ status: 'error', errorMessage: error.message });
    }
});

export { calendarRouter };
