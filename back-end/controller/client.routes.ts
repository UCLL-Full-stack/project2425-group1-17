import express, { Request, Response } from 'express';
import { ClientInput } from '../types';
import clientService from '../service/client.service';

const clientRouter = express.Router();

clientRouter.post('/', (req: Request, res: Response) => {
    try {
        const client = <ClientInput>req.body;
        const result = clientService.createClient(client);
        res.status(200).json(result);
    } catch (error: any) {
        res.status(400).json({ status: 'error', errorMessage: error.message });
    }
});

export { clientRouter };
