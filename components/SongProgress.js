
import { useRef, useState } from 'react';
import { useData } from './Context';
import styles from './SongProgress.module.css';

export default function SongProgress({ duration }) {
  const lastPlaying = useRef(false);

  const { progress, setProgress,
          playing, setPlaying,
          audio } = useData();

  const bar = useRef();
  const dot = useRef();
  
  const dotDown = (e) => {
    document.addEventListener("mousemove", dotMove);
    document.addEventListener("mouseup", dotUp);

    lastPlaying.p = playing;
    setPlaying(false);

    dotMove(e);
  }
  const dotUp = (e) => {
    document.removeEventListener("mousemove", dotMove);
    document.removeEventListener("mouseup", dotUp);
    setPlaying(lastPlaying.p);
  }
  const dotMove = (e) => {
    let allbox = bar.current.getBoundingClientRect();
    let dotbox = dot.current.getBoundingClientRect();
    
    let min = allbox.x + dotbox.width / 2;
    let x = Math.min(Math.max(e.clientX - min, 0), allbox.width - dotbox.width);


    let prog = Math.min(x / (allbox.width - dotbox.width) * 100, 99.99);
    setProgress(prog)
    audio.currentTime = prog / 100 * duration;
  }

  const playClick = function() {
    setPlaying(!playing);
  }

  return (
  <div className={styles.wrapper}>
    <div className={styles.buttons}>
      <div className={styles.button} onClick={playClick}>
        <img className={styles.playImg} src="imgs/skip.svg"/>
      </div>
      <div className={styles.button} onClick={playClick}>
        <img className={styles.playImg} src={(!playing)?"imgs/play.svg":"imgs/pause.svg"}/>
      </div>
      <div className={styles.button} onClick={playClick}>
        <img className={styles.playImg} src="imgs/skip.svg" style={{transform: "rotate(180deg)"}}/>
      </div>
    </div>
    
    <div className={styles.times}>
      <div className={styles.timeNow }>{fTime(duration * progress / 100)}</div>
      <div ref={bar} className={styles.progress}>
        <div className={styles.progressDotBefore} style={{ width: `calc(${progress}% - ${progress / 100}rem)`}}></div>
        <div ref={dot} className={styles.progressDot}></div>
        <div className={styles.clickable} onMouseDown={dotDown}></div>
      </div>
      <div className={styles.timeFull}>{fTime(duration)}</div>
    </div>
    
  </div>)
}


function fTime(time) {
  let t = Math.floor(time);
  let m = Math.floor(t / 60);
  let s = t % 60;

  s = ((s < 10) ? "0":"") + s;

  return `${m}:${s}`;
}