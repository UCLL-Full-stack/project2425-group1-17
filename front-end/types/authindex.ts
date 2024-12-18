export type LoginInput = {
    username: string;
    password: string;
};



export type AuthResponse = {
    token: string;
    role: 'admin' | 'employee'| 'client';
}