import {User} from '../model/user';
import {Role} from '../types/index';

const users = [
    new User({id: 1, username: 'Jan', password: 'Jan1234', role: 'admin'}),
    new User({id: 2, username: 'Ballate', password: 'Ballate1234', role: 'client'}),
    new User({id: 3, username: 'Destiny', password: 'Destiny1234', role: 'employee'}),
    new User({id: 4, username: 'Yannah', password: 'Yannah1234', role: 'employee'}),
    new User({id: 5, username: 'Lucann', password: 'Lucann1234', role: 'client'}),

]

const getAllUsers = () : User[] => {
    return users;
}

const getUserByUsername = ({ username }: { username: string }): User | null => {
    try {
        return users.find((user) => user.getUsername() === username) || null;
    } catch (error) {
        console.error(error);
        throw new Error('Database error. See server log for details.');
    }
};

const addUser = (user: User): void => {
    users.push(user);
};

export default {
    getAllUsers,
    getUserByUsername,
    addUser,
};