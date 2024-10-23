export class Admin {
    private id?: number;
    private username: string;
    private password: string;

    constructor(admin: { id?: number; username: string; password: string }) {
        this.id = admin.id;
        this.username = admin.username;
        this.password = admin.password;
    }

    getId(): number | undefined {
        return this.id;
    }

    getUsername(): string {
        return this.username;
    }

    getPassword(): string {
        return this.password;
    }
}
