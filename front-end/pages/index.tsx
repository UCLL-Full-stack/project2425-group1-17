import Head from 'next/head';
import Image from 'next/image';
import Header from '@components/header';
import styles from '@styles/home.module.css';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>Omnis Cura Zorggroep</title>
        <meta name="description" content="Courses app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main className={styles.main}>
        <span>
          <Image
            src="/images/logo.png"
            alt="Omnis Cura Zorgroep Logo"
            className={styles.vercelLogo}
            width={400}
            height={400}
          />
          {/* <h1>Welcome!</h1> */}
        </span>

        <div className={styles.description}>
          <p>
          With the overview app, we want Omnis cura Zorggroep employees to register and keep track of their clients. They have an overview of their planning and are able to make new appoinments with the clients.
          </p>
        </div>
      </main>
    </>
  );
};

export default Home;
