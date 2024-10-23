export class Client {
    private id?: number;
    private name: string;
    private phone_number: string;
    private town: string;
    private adres: string;
    private house_number: number;
    private postal_code: string;

    constructor(client: {
        id?: number;
        name: string;
        phone_number: string;
        town: string;
        adres: string;
        house_number: number;
        postal_code: string;
    }) {
        this.id = client.id;
        this.name = client.name;
        this.phone_number = client.phone_number;
        this.town = client.town;
        this.adres = client.adres;
        this.house_number = client.house_number;
        this.postal_code = client.postal_code;
    }

    getId(): number | undefined {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    getPhone_number(): string {
        return this.phone_number;
    }

    getTown(): string {
        return this.town;
    }

    getAdres(): string {
        return this.adres;
    }

    getHouse_number(): number {
        return this.house_number;
    }

    getPostal_code(): string {
        return this.postal_code;
    }
}
