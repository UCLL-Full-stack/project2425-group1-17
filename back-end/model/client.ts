export class Client {
    readonly id?: number;
    readonly name: string;
    readonly phone_number: string;
    readonly town: string;
    readonly adres: string;
    readonly house_number: number;
    readonly postal_code: string;

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
        if (!/^0\d{8,9}$/.test(phone_number.replace(/\s/g, ''))) {
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

    equals(client: Client): boolean {
        return (
            this.id === client.getId() &&
            this.name === client.getName() &&
            this.phone_number === client.getPhone_number() &&
            this.town === client.getTown() &&
            this.adres === client.getAdres() &&
            this.house_number === client.getHouse_number() &&
            this.postal_code === client.getPostal_code()
        );
    }
}
