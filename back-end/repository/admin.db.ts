import {Admin} from '../model/admin';

const admins: Admin[] = [
    new Admin({id: 1, username: 'admin', password: 'Admin123'}),
];  

const getAdminByUsername = (username: string): Admin | undefined => {
    return admins.find(admin => admin.getUsername() === username);
}

const addAdmin = (admin: Admin): void => {
    admins.push(admin);
}

const deleteAdminById = (id:number): boolean => {
    const index = admins.findIndex(admin => admin.getId() === id);
    if (index === -1) {
        admins.splice(index, 1);
        return true;
    }
    return false;
}

export default {getAdminByUsername, addAdmin, deleteAdminById};