import {User} from '../model/user';
import {Role} from '../types/index';

const users = [
    new User({id: 1, username: 'Ballate', password: 'Ballate1234', role: 'client'}),
    new User({id: 1, username: 'Destiny', password: 'Destiny1234', role: 'employee'}),
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