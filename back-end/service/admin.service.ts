import {Admin} from '../model/admin';

export class AdminService{
    private admins: Admin[] = [];

    create (adminData :{username: string; password: string}): Admin{
        const admin = new Admin(adminData);
        this.validateUniqueUsername(admin.getUsername());
        this.admins.push(admin);
        return admin;
    }

    private validateUniqueUsername(username: string){
        if(this.admins.find(admin => admin.getUsername() === username)){
            throw new Error('Username already taken');
        }
    }
}