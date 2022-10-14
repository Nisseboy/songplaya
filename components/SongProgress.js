
import { useEffect, useRef, useState } from 'react';
import styles from './SongProgress.module.css';

export default function SongProgress({  }) {
  const [ progress, setProgress ] = useState(0);
  const bar = useRef();
  const dot = useRef();
  
  const dotDown = (e) => {
    document.addEventListener("mousemove", dotMove);
    document.addEventListener("mouseup", dotUp);

    dotMove(e);
  }
  const dotUp = (e) => {
    document.removeEventListener("mousemove", dotMove);
    document.addEventListener("mouseup", dotUp);
  }
  const dotMove = (e) => {
    let allbox = bar.current.getBoundingClientRect();
    let dotbox = dot.current.getBoundingClientRect();
    let min = allbox.x + dotbox.width / 2;
    let x = Math.min(Math.max(e.clientX - min, 0), allbox.width - dotbox.width);

    setProgress(x);
  }

  return (
  <div ref={bar} className={styles.progress}>
    <div className={styles.progressDotBefore} style={{ width: progress}}></div>
    <div ref={dot} className={styles.progressDot}></div>
    <div className={styles.clickable} onMouseDown={dotDown}></div>
  </div>)
}