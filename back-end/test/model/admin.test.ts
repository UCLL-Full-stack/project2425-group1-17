import { Admin } from '../../model/admin';

test('given: valid values for admin, when: admin is created, then: admin is created with those values', () => {
    //given
    const id = 1;
    const username = 'hans';
    const password = '123';

    //when
    const admin = new Admin({
        id: id,
        username: username,
        password: password,
    });

    //then
    expect(admin.getId()).toEqual(id);
    expect(admin.getUsername()).toEqual(username);
    expect(admin.getPassword()).toEqual(password);
});
