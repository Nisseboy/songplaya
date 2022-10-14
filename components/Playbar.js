
import SongProgress from './SongProgress';

import styles from './Playbar.module.css';
import { useState } from 'react';

export default function Playbar({ title }) {
  const [playing, setPlaying] = useState(false);

  const playClick = function() {
    setPlaying(!playing);
  }

  return (
  <div className={styles.bar}>
    <div className={styles.titleStuff}>
      <img className={styles.image} src={`/songs/${title}.jpg`}></img>
      <div className={styles.title}>{title}</div>
    </div>

    <div className={styles.greenStuff}>
      <div className={styles.play} onClick={playClick}>
        <img className={styles.playImg} src={(!playing)?"imgs/play.svg":"imgs/pause.svg"}/>
      </div>
      <div className={styles.progress}><SongProgress></SongProgress></div>
    </div>
  </div>)
}