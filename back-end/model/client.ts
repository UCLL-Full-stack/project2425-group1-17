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
        this.validateName(client.name);
        this.name = client.name;
        this.validatePhoneNumber(client.phone_number);
        this.phone_number = client.phone_number;
        this.validateTown(client.town);
        this.town = client.town;
        this.validateAdres(client.adres, client.house_number);
        this.adres = client.adres;
        this.house_number = client.house_number;
        this.validatePostalCode(client.postal_code);
        this.postal_code = client.postal_code;
    }


    private validateName(name: string): void{
        if (name.trim().length === 0){
            throw new Error('Name cannot be empty');
        }
    }

    private validatePhoneNumber (phone_number:string ): void{
        const phoneRegex = /^[0][0-9]{8,9}$/; // Starts with '0' and has 9-10 digits
        if (!phoneRegex.test(phone_number)) {
            throw new Error('Phone number must be 9 or 10 digits long and start with 0');
        }
    }

    private validateTown(town: string): void{
        if (town.trim().length === 0){
            throw new Error('Town cannot be empty');
        }
    }

    private validateAdres(adres: string, house_number:number): void{
        if (adres.trim().length === 0){
            throw new Error('Adres cannot be empty');
        }
        if (house_number < 0){
            throw new Error('House number must be a positive number');
        }

    }

    private validatePostalCode(postal_code: string): void{
        if (!/^\d{4}$/.test(postal_code)|| parseInt(postal_code, 10) < 1000 || parseInt(postal_code, 10) > 9999) {
            throw new Error('Postal code must be a 4 digit number between 1000 and 9999');
        }
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
