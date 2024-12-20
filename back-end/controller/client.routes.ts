import express, { Request, Response } from 'express';
import { ClientInput } from '../types';
import clientService from '../service/client.service';

const clientRouter = express.Router();

clientRouter.post('/', async(req: Request, res: Response) => {
    try {
        const {name, phone_number, town, adres, house_number, postal_code} = req.body;
       
        const newClient = await clientService.createClient({
            name,
            phone_number,
            town,
            adres,
            house_number,
            postal_code,
        });
        res.status(200).json(newClient);
    } catch (error: any) {
        res.status(400).json({ status: 'error', errorMessage: error.message });
    }
});

clientRouter.get('/', async (req: Request, res: Response) => {
    try {
        const clients = await clientService.getAllClients();
        res.status(200).json(clients);
    } catch (error: any) {
        res.status(400).json({ status: 'error', errorMessage: error.message });
    }
});

clientRouter.put('/:id', async(req: Request, res: Response) => {
    try{
        const id = parseInt(req.params.id, 10);
        if(isNaN(id)){
            throw new Error('Invalid client ID.');
        }

        const clientData = req.body;
        const updatedClient = await clientService.updateClient({id}, clientData);

        if(!updatedClient){
            return res.status(404).json({message: 'Client not found'});
        }

        res.status(200).json(updatedClient);
    } catch (error:any){
        res.status(400).json({status: 'error', errorMessage: error.message});
    }
})

export { clientRouter };
