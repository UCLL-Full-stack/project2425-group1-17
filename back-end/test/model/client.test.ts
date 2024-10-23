import { Client } from '../../model/client';

test('given: valid values for client, when: client is created, then: client is created with those values', () => {
    //given
    const id = 1;
    const name = 'client_naam';
    const phone_number = '0032 468 00 00 00';
    const town = 'Heverlee';
    const adres = 'adres';
    const house_number = 75;
    const postal_code = '3000';

    //when
    const client = new Client({
        id: id,
        name: name,
        phone_number: phone_number,
        town: town,
        adres: adres,
        house_number: house_number,
        postal_code: postal_code,
    });

    //then
    expect(client.getId()).toEqual(id);
    expect(client.getName()).toEqual(name);
    expect(client.getPhone_number()).toEqual(phone_number);
    expect(client.getTown()).toEqual(town);
    expect(client.getHouse_number()).toEqual(house_number);
    expect(client.getPostal_code()).toEqual(postal_code);
});
