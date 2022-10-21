import Head from 'next/head';
import Window from '../components/Window';
import Playbar from '../components/Playbar';

import styles from '../styles/Home.module.css';

import { useEffect, useRef, useState } from 'react';
import { useData } from '../components/Context';

import { promises as fs } from 'fs';
import path from 'path';
import Header from '../components/Header';

export default function Home({ songs }) {
  const { song, setSong,
          progress, setProgress,
          playing, setPlaying,
          repeat,
          audio, setAudio,
          setSongs } = useData();
  const [ duration, setDuration ] = useState(0);

  const idotRef = useRef();

  setSongs(songs);

  useEffect(()=>{
    setSong(songs[Math.floor(Math.random() * songs.length)]);
  }, []);

  useEffect(()=>{
    idotRef.rp = repeat;
  }, [repeat]);

  useEffect(()=>{
    let a = audio;
    if (!audio) {
      a = new Audio();
      setAudio(a);
    } 

    a.src = `songs/${song}.m4a`;
    if (playing) a.play();
    
    a.addEventListener('loadeddata', () => {
      setDuration(a.duration);
    });

    const inter = setInterval(()=>{
      if(a.currentTime == a.duration) {
        if (!idotRef.rp) {
          setSong(songs[Math.floor(Math.random() * songs.length)]);
        } else {
          audio.currentTime = 0;
          audio.play();
        }
      }
      setProgress(a.currentTime / a.duration * 100);
    }, 100);

    return ()=>{
      a.pause();
      clearInterval(inter);
    }
  }, [song]);

  useEffect(()=>{
    if (!audio) return;
    
    if (playing)
      audio.play();
    else
      audio.pause();
  }, [playing]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Songplaya</title>
        <link rel="icon" href="/favicon.jpg" />
      </Head>
      <Header/>
      <div className={styles.songContainer}>
        {songs.map((el, i) => <div className={styles.song} key={i + "ssaf"}><Window title={el}></Window></div>)}
      </div>
      <Playbar title={song} duration={duration}></Playbar>
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