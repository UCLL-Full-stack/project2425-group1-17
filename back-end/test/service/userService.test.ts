import userService from  '../../service/user.service';
import userDb from '../../repository/user.db';
import { User } from '../../model/user';
import { Role, UserInput } from '../../types/index';


const userInput: UserInput = {
    id: 1,
    username: 'JackMa',
    password: 'JackMa123',
    role: 'client',
};


const user = new User({
    ...userInput,
});


 let mockGetUserByUsername : jest.Mock;
 let mockAddUser: jest.Mock;


beforeEach(() => {
    // Mock the repository methods
    mockGetUserByUsername = jest.fn();
    mockAddUser = jest.fn();

    // Replace userDb methods with mocks
    userDb.getUserByUsername = mockGetUserByUsername;
    userDb.addUser = mockAddUser;

});

afterEach(() => {
    jest.clearAllMocks();
});


   
test('given: valid data for user, when: a user is created, then the user should be created successfully', () =>{
    //Arrange
    
    mockGetUserByUsername.mockReturnValue(undefined);
    mockAddUser.mockImplementation(()=> {});

    const user1 = userService.createUser(userInput);

    //Act
    expect(mockGetUserByUsername).toHaveBeenCalledWith({username: 'JackMa'});
    expect(mockAddUser).toHaveBeenCalledWith(user1);
    
    expect(user1.getUsername()).toEqual('JackMa');
    expect(user1.getPassword()).toEqual('JackMa123');
    expect(user1.getRole()).toEqual('client');
});


test('given a duplicate username, when: a user is created, then: an error should be thrown', () => {
    //Arrange
    const existingUser = new User({
        username: 'JackMa',
        password: 'JackMa123456789',
        role: 'client' as Role,
    });

    mockGetUserByUsername.mockReturnValue(existingUser);

    // Act & Assert
    expect(() => {userService.createUser(userInput);}).toThrow('Username "JackMa" is already taken.');

    expect(mockGetUserByUsername).toHaveBeenCalledWith({ username: 'JackMa' });
    expect(mockAddUser).not.toHaveBeenCalled();
    
    });

 
