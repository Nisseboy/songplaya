import Head from 'next/head';
import Window from '../components/Window';
import Playbar from '../components/Playbar';

import styles from '../styles/Home.module.css';

import { useEffect, useState } from 'react';
import { useData } from '../components/Context';

import { promises as fs } from 'fs'
import path from 'path'

export default function Home({ songs }) {
  const { song, setSong } = useData();

  useEffect(()=>{
    setSong(songs[0]);
  }, []);

  return (
    <div className={styles.container}>
      <Head>
        <title>Songplaya</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.songContainer}>
        {songs.map((el, i) => <div className={styles.song}><Window title={el}></Window></div>)}
      </div>
      <Playbar title={song}></Playbar>
      <audio src={`songs/${song}.m4a`} type="audio/x-m4a" autoplay></audio>
    </div>
  )
}


export async function getStaticProps() {
  const songsDir = path.join(process.cwd(), "public", "songs");
  let filenames = await fs.readdir(songsDir);

  filenames = filenames.map((elem)=> {
    return elem.slice(0, -4);
  });
  return {
    props: {songs: [...new Set(filenames)]},
  }
}