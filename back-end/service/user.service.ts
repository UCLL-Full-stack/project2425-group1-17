import {User} from '../model/user';
import {Role} from '../types/index';

export class UserService{
    private users: User[] = [];


    createUser(userData :{username: string; password: string; role: Role}): User{
        this.validateUniqueUsername(userData.username);
        const newUser = new User(userData);
        this.users.push(newUser);
        return newUser;
    }

    /**
     * Retrieves a user by their ID.
     */
    getUserById(userId: number): User | undefined {
        return this.users.find(user => user.getId() === userId);
    }

    /**
     * Retrieves a user by their username.
     */
    getUserByUsername(username: string): User | undefined {
        return this.users.find(user => user.getUsername() === username);
    }

    /**
     * Validates that the given username is unique.
     */
    private validateUniqueUsername(username: string): void {
        if (this.users.some(user => user.getUsername() === username)) {
            throw new Error(`Username "${username}" is already taken.`);
        }
    }

    /**
     * Deletes a user by their ID.
     */
    deleteUserById(userId: number): boolean {
        const userIndex = this.users.findIndex(user => user.getId() === userId);
        if (userIndex === -1) {
            return false; // User not found
        }
        this.users.splice(userIndex, 1);
        return true; // User successfully deleted
    }

    // /**
    //  * Updates an existing user's data.
    //  */
    // updateUser(userId: number, updatedData: { username?: string; password?: string; role?: Role }): User {
    //     const user = this.getUserById(userId);
    //     if (!user) {
    //         throw new Error(`User with ID ${userId} not found.`);
    //     }

    //     // Update fields only if new data is provided
    //     if (updatedData.username) {
    //         this.validateUniqueUsername(updatedData.username);
    //         (user as any).username = updatedData.username; // Update username
    //     }
    //     if (updatedData.password) {
    //         (user as any).password = updatedData.password; // Update password
    //     }
    //     if (updatedData.role) {
    //         (user as any).role = updatedData.role; // Update role
    //     }

    //     // Validate the updated user
    //     (user as any).validate();

    //     return user;
    // }
}