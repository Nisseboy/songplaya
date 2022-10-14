import Head from 'next/head';
import Window from '../components/Window';
import Playbar from '../components/Playbar';

import styles from '../styles/Home.module.css';
import { useEffect, useState } from 'react';

export default function Home() {
  const [title, setTitle] = useState("default title");

  useEffect(()=>{
    setTitle("Adele - Rolling in the Deep (Official Music Video)");
  });

  return (
    <div className={styles.container}>
      <Head>
        <title>Songplaya</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Window title={title}></Window>
      <Playbar title={title}></Playbar>
    </div>
  )
}
