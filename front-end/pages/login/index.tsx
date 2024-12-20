import Head from 'next/head';
import React from 'react';
import Header from '@components/header';
import LoginForm from '@components/login/LoginForm';
import styles from '@styles/home.module.css';

const Login: React.FC = () => {
    return (
        <>
            <Head>
                <title>Login</title>
            </Head>
            <Header />
            <main className="d-flex flex-column justify-content-center align-items-center">
                
                <h1 >Login</h1>
                <LoginForm />
            </main>
            
      
        </>
    );
};

export default Login;

