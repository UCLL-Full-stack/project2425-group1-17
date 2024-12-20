import {Role} from '../types/index';
import {User as UserPrisma} from '@prisma/client';



export class User{
    private id?: number;
    private username: string;
    private password: string;
    private role: Role;

    constructor(user: { id?: number; username: string; password: string; role: Role }) {
        this.id = user.id;
        this.username = user.username;
        this.password = user.password;
        this.role = user.role.toLowerCase() as Role;

        this.validate();
    }


    private validate() {
        if (this.username.length < 3){
            throw new Error('Username must be atleast 3 characters long.');
        } 
        if (!this.isPasswordStrong(this.password)) {
            throw new Error('Password must contain uppercase, lowercase, and a number');
        }

         const validRoles: Role[] =["admin", "employee", "client"];
         if (!validRoles.includes(this.role)){
             throw new Error(`Role must be one of the following: admin, employee, client`);
         }

        
    }
       
    private isPasswordStrong(password: string): boolean {
    return /(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password);}


    public static from(userPrisma: UserPrisma): User {
        return new User({
            id: userPrisma.id,
            username: userPrisma.username,
            password: userPrisma.password,
            role: userPrisma.role as Role,
        });
    }
    
    getUsername(): string {
        return this.username;}

    getPassword(): string {
        return this.password;}

    getRole(): Role {
        return this.role;}

    getId(): number | undefined {
        return this.id;}

}