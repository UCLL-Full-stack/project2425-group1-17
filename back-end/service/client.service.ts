import { Client } from '../model/client';
import clientDb from '../repository/client.db';
import { ClientInput } from '../types';

const createClient = ({
    name,
    phone_number,
    town,
    adres,
    house_number,
    postal_code,
}: ClientInput): Client => {
    const client = new Client({ name, phone_number, town, adres, house_number, postal_code });
    return clientDb.createClient(client);
};

export default { createClient };
