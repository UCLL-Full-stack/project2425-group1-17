
import {Admin} from '../model/admin';
import { User } from '../model/user';
import adminDb from '../repository/admin.db';
import userService from './user.service';

const createAdmin = (adminData: { username: string; password: string }): User =>{
    const newAdmin = userService.createUser({ ...adminData, role: 'admin' });
    return newAdmin;
}


export default {createAdmin};