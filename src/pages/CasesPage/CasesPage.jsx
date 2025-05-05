import pagesStyle from "../../pages/Pages.module.css";
import styles from "./CasesPage.module.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import CasesList from "../../components/case/CasesList";

export default function CasesPage() {
  const cases = [
    {
      id: 1,
      status: "PENDING",
      address: "123 Main Street, Apt 4B",
      region: "Catalonia",
      city: "Barcelona",
      caseDate: "2025-12-15",
      description:
        "Family facing eviction after rent increase of 40%. Single mother with two children.",
      image: "src/assets/images/image1.png",
    },
  ];

  return (
    <>
      <Header />
      <main className={styles.container}>
        <h1>Cases</h1>
        <h2>Stop Desahucios!</h2>
        <h3>Because housing is a right! Not just a business!</h3>
        <CasesList cases={cases} />
      </main>
    </>
  );
}
