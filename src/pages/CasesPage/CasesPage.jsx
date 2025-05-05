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
      tenants: "Mohammed, Fatima",
      region: "Catalonia",
      city: "Barcelona",
      date: "2025-12-15",
      description:
        "Family facing eviction after rent increase of 40%. Single mother with two children.",
      image: "src/assets/images/image1.png",
      attendants: "12",
    },
    {
      id: 2,
      status: "PENDING",
      address: "456 Oak Avenue",
      tenants: "Legolas, Gimli",
      region: "Madrid",
      city: "Madrid",
      date: "2025-11-30",
      description:
        "Elderly couple being evicted after 20 years in the same apartment. Building was sold to developers.",
      image: "src/assets/images/image2.png",
      attendants: "123",
    },
    {
      id: 3,
      status: "RESOLVED",
      address: "789 Pine Road",
      tenants: "Luigi Mangione",
      region: "Andalucia",
      city: "Seville",
      date: "2024-12-05",
      description:
        "Entire building facing eviction for renovation. 15 families affected.",
      image: "src/assets/images/image3.png",
      attendants: "216",
    },
    {
      id: 4,
      status: "PENDING",
      address: "101 Maple Lane",
      tenants: "Mª Pilar Gonzalez ElFari",
      region: "Valencia",
      city: "Valencia",
      date: "2025-01-10",
      description:
        "Artist collective being evicted from their studio space after 5 years.",
      image: "src/assets/images/image4.png",
      attendants: "0",
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
