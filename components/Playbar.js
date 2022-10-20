
import SongProgress from './SongProgress';

import styles from './Playbar.module.css';
import { useData } from './Context';

export default function Playbar({ title, duration }) {
  return (
  <div className={styles.bar}>
    <div className={styles.titleStuff}>
      <img className={styles.image} src={`/songs/${title}.jpg`}></img>
      <div className={styles.title}>{title}</div>
    </div>

    <div className={styles.greenStuff}>
      <div className={styles.progress}><SongProgress duration={duration}></SongProgress></div>
    </div>
  </div>)
}