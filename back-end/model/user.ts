import {Role} from '../types/index';

export class User{
    private id?: number;
    private username: string;
    private password: string;
    private role: Role;

    constructor(user: { id?: number; username: string; password: string; role: Role }) {
        this.id = user.id;
        this.username = user.username;
        this.password = user.password;
        this.role = user.role;

        this.validate();
    }


    private validate() {
        if (this.username.length < 3){
            throw new Error('Username must be atleast 3 characters long.');
        } 
        if (!this.isPasswordStrong(this.password)) {
            throw new Error('Password must contain uppercase, lowercase, and a number');
        }
        
    }
       
    private isPasswordStrong(password: string): boolean {
    return /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password);}

    getUsername(): string {
        return this.username;}

    getPassword(): string {
        return this.password;}

    getRole(): Role {
        return this.role;}

    getId(): number | undefined {
        return this.id;}

}