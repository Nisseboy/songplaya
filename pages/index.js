import Head from 'next/head';
import Window from '../components/Window';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Songplaya</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Window title="Adele - Rolling in the Deep (Official Music Video)"></Window>
    </div>
  )
}
