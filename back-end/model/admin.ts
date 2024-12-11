import {User} from './user';

export class Admin extends User {
  
    constructor(admin: { id?: number; username: string; password: string }) {
        super({...admin, role: 'admin'});
    }
   
}
