import styles from "./Navbar.module.css";

export default function NavBar({ children }) {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.navList}>{children}</ul>
    </nav>
  );
}
