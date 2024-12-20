import { PrismaClient } from '@prisma/client';
import { Client } from '../model/client';

const prisma = new PrismaClient();

const createClient = async (client: Client): Promise<Client> => {
    const createdClient = await prisma.client.create({
        data: {name: client.getName(),
        phone_number: client.getPhone_number(),
        town: client.getTown(),
        adres: client.getAdres(),
        house_number: client.getHouse_number(),
        postal_code: client.getPostal_code(),
    },
  
});
    return Client.from(createdClient);
}

const getClientById = async({ id }: { id: number }): Promise<Client | null> => {
   const client = await prisma.client.findUnique({
        where: {id},
});
    return client ? Client.from(client) : null;
}



const updateClient = async ({id}:{id:number},  clientData: Partial<Client>):Promise<Client | null> => {
   try{
    const updatedClient = await prisma.client.update({
        where: {id},
        data: {
            name: clientData.getName ? clientData.getName() : undefined,
            phone_number: clientData.getPhone_number ? clientData.getPhone_number() : undefined,
            town: clientData.getTown ? clientData.getTown() : undefined,
            adres: clientData.getAdres ? clientData.getAdres() : undefined,
            house_number: clientData.getHouse_number ? clientData.getHouse_number() : undefined,
            postal_code: clientData.getPostal_code ? clientData.getPostal_code() : undefined,
        }})
        return Client.from(updatedClient); }

        catch(error)
        {
            console.error(error);
            throw new Error('Failed to update client');
        }  
};

const getAllClients = async(): Promise<Client[]> => {
    const clients = await prisma.client.findMany({
        include: {
            employees: {
                include: {
                    employee: true,
                },
            },
        },
    });
    return clients.map(Client.from);
}

export default {
    createClient,
    getClientById,
    updateClient,
    getAllClients,
};
