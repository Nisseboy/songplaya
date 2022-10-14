import { useData } from './Context';
import styles from './Window.module.css';

export default function Window({ title }) {
  const { song, setSong ,
          playing, setPlaying} = useData();
  return (
  <div className={styles.window} onClick={()=>{setSong(title); setPlaying(true)}}>
    <img className={styles.windowImage} src={`/songs/${title}.jpg`}></img>
    <div className={styles.windowText}>{title}</div>
  </div>)
}