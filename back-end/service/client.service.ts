import { Client } from '../model/client';
import clientDb from '../repository/client.db';
import { ClientInput } from '../types';

const createClient = async (clientData:{
    name: string,
    phone_number: string,
    town: string,
    adres:string,
    house_number: number,
    postal_code: string,
}): Promise<Client> => {
    
    
    
    const client = new Client({ name: clientData.name, phone_number: clientData.phone_number, town: clientData.town, adres: clientData.adres, house_number: clientData.house_number, postal_code: clientData.postal_code });

    return clientDb.createClient(client);
};

const getAllClients = async (): Promise<Client[]> => {
    return clientDb.getAllClients();
};


const updateClient = async({id}: {id: number}, clientData: Partial<Client>) : Promise<Client | null> => {
    return await clientDb.updateClient({id}, clientData);
}

export default { createClient , getAllClients, updateClient};
