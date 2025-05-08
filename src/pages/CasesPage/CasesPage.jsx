import React, { useEffect, useState } from "react";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import pagesStyle from "../../pages/Pages.module.css";
import CasesList from "../../components/case/CasesList";
import styles from "./CasesPage.module.css";
import { fetchCases } from "../../api-services/cases.service";

export default function CasesPage() {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    const loadCases = async () => {
      try {
        const casesData = await fetchCases();
        setCases(casesData);
      } catch (error) {
        console.error("Error fetching cases:", error);
      }
    };

    loadCases();
  }, []);

  return (
    <>
      <Header />
      <main className={styles.container}>
        <h3>Because housing is a right! Not just a business!</h3>
        <CasesList cases={cases} />
      </main>
    </>
  );
}
