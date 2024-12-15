import { before } from "node:test";
import { UserService } from "../../service/user.service";
import {Role } from "../../types/index";

describe('UserService', () => {
    let userService: UserService;

    beforeEach(() => {
        userService = new UserService();
    });


    describe('createUser', () => {
        it('given: valid data for user, when: a user is created, then the user should be created successfully', () =>{
            const user1 = {
                username: 'JackMa',
                password: 'JackMa123',
                role: 'client' as Role,
            };

            const user = userService.createUser(user1);


            
            expect(user.getUsername()).toEqual('JackMa');
            expect(user.getPassword()).toEqual('JackMa123');
            expect(user.getRole()).toEqual('client');
        });


        it('given a duplicate username, when: a user is created, then: an error should be thrown', () => {
            const user2 = {
                username: 'JackMa',
                password: 'JackMa123456',
                role: 'client' as Role,
            };
            
            userService.createUser(user2);

            expect(() => userService.createUser(user2)).toThrow('Username "JackMa" is already taken.');
            });

    });


});
