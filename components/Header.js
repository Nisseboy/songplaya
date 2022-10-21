import styles from './Header.module.css';

export default function Header() {
  return (<div className={styles.wrapper}>
    <input className={styles.searchBar}></input>
  </div>);
}