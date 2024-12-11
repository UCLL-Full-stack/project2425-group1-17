import {User} from '../../model/user';

describe('User', ()=>{
    it('given: valid values for username, when: user is created, then: user is created with those values', ()=>{
        const userData = {
            id: 1,
            username: 'ValiddUser',
            password: 'StongPassword123',
            role: 'admin' as const,
        };

        const user = new User(userData);

        expect(user).toBeInstanceOf(User);
        expect(user.getUsername()).toEqual('ValiddUser');
        expect(user.getRole()).toEqual('admin');
    });

    it('given: invalid password, when: user is created, then: throws error', () => {
        const userData = {
            username: 'ValidUser',
            password: 'weakpass',
            role: 'client' as const,
        };

        expect(() => new User(userData)).toThrow(
            'Password must contain uppercase, lowercase, and a number'
        );
    });


})