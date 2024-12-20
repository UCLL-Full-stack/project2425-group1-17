import React from "react";


const LoginForm : React.FC = () => {
    const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('username:', username);
        console.log('password :', password);
    };

    return (
        <form onSubmit={handleSubmit}
            className="bg-white shodow-md rounded px-8 pt-6 pb-8 w-96 space-y-4">
            <label>
                Username:
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}/>
            </label>
            <label>
                Password: 
                <input 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
            </label>
            <button type="submit">Login</button>
        </form>
    
    );
};

export default LoginForm;