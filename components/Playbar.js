
import SongProgress from './SongProgress';

import styles from '../styles/Playbar.module.css';

export default function Playbar({ title }) {
  return (
  <div className={styles.window}>
    <img className={styles.windowImage} src="/songs/Adele - Rolling in the Deep (Official Music Video).jpg"></img>
    <div className={styles.windowText}>{title}</div>
    
    <div className={styles.windowBar}>
      <div className={styles.windowPlay}>▶</div>
      <SongProgress></SongProgress>
    </div>
  </div>)
}