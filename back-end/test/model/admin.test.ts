import { Admin } from '../../model/admin';

describe('Admin', () => {
    it('given: valid values for username, when: admin is created, then: admin is created with those values', ()=>{
        const adminData = {
            id: 1,
            username: 'ValiddAdmin',
            password: 'StongPassword123',
        };

        const admin = new Admin(adminData);

        expect(admin).toBeInstanceOf(Admin);
        expect(admin.getUsername()).toEqual('ValiddAdmin');
        expect(admin.getPassword()).toEqual('StongPassword123');
        expect(admin.getRole()).toEqual("admin");
        expect(admin.getId()).toEqual(1);
    });
    });
