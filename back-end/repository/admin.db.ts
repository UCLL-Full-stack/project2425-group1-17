import { Admin } from "../model/admin";

const admin = [
    new Admin({
        username: 'admin',
        password: 'admin'   
    })
];

const getAdminByUsername = (username: string): Admin | undefined => {
    try {
        return admin.find((a) => a.getUsername() === username);
    } catch (error) {
        console.error(error);
        throw new Error('An error occurred while getting admin by username');
    }
};

export { getAdminByUsername };
