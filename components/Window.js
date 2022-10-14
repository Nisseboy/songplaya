import styles from '../styles/Window.module.css';

export default function Window({ title }) {
  return (
  <div className={styles.window}>
    <img className={styles.windowImage} src="/songs/Adele - Rolling in the Deep (Official Music Video).jpg"></img>
    <div className={styles.windowText}>{title}</div>
  </div>)
}