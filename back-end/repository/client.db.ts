import { Client } from '../model/client';

const clients: Client[] = [
    new Client({
        id: 1,
        name: 'Marie Dupont',
        phone_number: '003214567890',
        town: 'Antwerpen',
        adres: 'Meir',
        house_number: 12,
        postal_code: '2000',
    }),
    new Client({
        id: 2,
        name: 'Jean Peeters',
        phone_number: '003214567891',
        town: 'Gent',
        adres: 'Korenmarkt',
        house_number: 5,
        postal_code: '9000',
    }),
];

const createClient = ({
    name,
    phone_number,
    town,
    adres,
    house_number,
    postal_code,
}: Client): Client => {
    const client = new Client({
        name,
        phone_number,
        town,
        adres,
        house_number,
        postal_code,
    });
    return client;
};

const getClientById = ({ id }: { id: number }): Client | null => {
    return clients.find((client) => client.getId() === id) || null;
};

const getAllClients = (): Client[] => clients;

export default {
    createClient,
    getClientById,
    getAllClients,
};
