import styles from "./WelcomePage.module.css";
import Header from "../../components/header/Header";
//import Footer from "../../components/footer/Footer";

export default function WelcomePage() {
  return (
    <>
      <Header />
      <div className={styles.container}>
        <h1>StopD</h1>
        <h2>Stop Desahucios!</h2>
        <h3>Because housing is a right! Not just a business!</h3>
      </div>
    </>
  );
}
