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
        <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
        <form onSubmit={handleSubmit}
            className="bg-white shodow-md rounded px-8 pt-6 pb-8 w-96 space-y-4">
            
            <div>
            <label>
                Username:
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}/>
            </label>
            </div>
            <div>
            <label>
                Password: 
                <input 
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}/>
            </label>
            </div>
            <button type="submit"
            >Login</button>
        </form>
        </div>
    
    );
};

export default LoginForm;