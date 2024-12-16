import {User} from '../model/user';
import {Role} from '../types/index';
import userDb from '../repository/user.db';
import { create } from 'node:domain';



const createUser = ({ username, password, role }: { username: string; password: string; role: Role }): User => {
    const existingUser = userDb.getUserByUsername({ username });
    if (existingUser) {
        throw new Error(`Username "${username}" is already taken.`);
    }
    const newUser = new User({ username, password, role });
    userDb.addUser(newUser);
    return newUser;
};

  
export default {createUser};

