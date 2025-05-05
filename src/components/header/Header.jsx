import styles from "./Header.module.css";
import Logo from "../logo/Logo";
import NavBar from "../navbar/NavBar";
import NavItem from "../navitem/NavItem";
import Button from "../button/Button";
import clsx from "clsx";

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <Logo />
      <NavBar>
        <NavItem href="/casesPage" text="Cases" />
        <NavItem href="/favourites" text="Favourites" />
        <NavItem href="/aboutus" text="Abouts us" />
        <NavItem href="/homepage" text="My Case" />
        <NavItem href="/homepage" text="My Profile" />
      </NavBar>
      <Button className={clsx(styles.headerContainer.Login)} text="Log_In" />
    </header>
  );
}
