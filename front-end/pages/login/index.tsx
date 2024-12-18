import Head from 'next/head';
import React from 'react';
import Header from '@components/header';
import LoginForm from '@components/login/LoginForm';

const Login: React.FC = () => {
    return (
        <>
            <Head>
                <title>Schedule Overview</title>
            </Head>
            <Header />
            <main className="d-flex flex-column justify-content-center align-items-center">
                
                <h1>Schedule</h1>
                <LoginForm />
            </main>
            
      
        </>
    );
};

export default Login;

