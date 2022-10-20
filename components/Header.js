import { useEffect, useRef, useState } from 'react';
import styles from './Header.module.css';

export default function Header() {
  let wrapper = useRef();
  let [last, setLast] = useState(0);

  const scrollFunc = (e) => {
    let diff = window.scrollY - wrapper.last;
    console.log(diff);
    wrapper.current.style.transform = `translateY(${(diff > 0) ? "-3.1rem" : 0})`;
    wrapper.last = (window.scrollY);
  }

  useEffect(()=>{
    document.addEventListener("scroll", scrollFunc);
    return () => {
      document.removeEventListener("scroll", scrollFunc);
    }
  }, []);

  return (<div ref={wrapper} className={styles.wrapper}>
  
  </div>);
}