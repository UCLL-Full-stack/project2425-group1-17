import Head from 'next/head';
import Image from 'next/image';
import Header from '@components/header';
import styles from '@styles/home.module.css';

const Schedule: React.FC = () => {
  return (
    <>
            <Head>
                <title>Schedule Overview</title>
            </Head>
            <Header />
            <main className="d-flex flex-column justify-content-center align-items-center">
                <h1>Schedule</h1>
                
            </main>
        </>
  );
};

export default Schedule;