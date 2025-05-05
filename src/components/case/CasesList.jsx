import React from "react";
import styles from "./CasesList.module.css";
import Button from "../button/Button";
import clsx from "clsx";
//import { FaHeart } from "react-icons/fa";
//import { CaseItem } from "../../types/index";
//import { useFavourites } from "../../context/FavouritesContext";

// Changed from lowercase 'casesList' to uppercase 'CasesList'
export default function CasesList({ cases }) {
  return (
    <div className={styles.casesContainer}>
      {cases.map((caseItem) => (
        <CaseCard key={caseItem.id} caseItem={caseItem} />
      ))}
    </div>
  );
}

function CaseCard({ caseItem }) {
  //const { favorites, toggleFavorite } = useFavorites(); // Usamos el contexto
  //const isFavorite = favorites.some((fav) => fav.isbn === caseItem.isbn);

  return (
    <div className={styles.caseCard}>
      {/* Favourite + heart icon */}

      {/* caseItem image */}
      <img
        src={caseItem.image}
        alt={caseItem.address}
        className={styles.caseImage}
      />

      {/* caseItem content */}
      <div className={styles.caseContent}>
        <h3 className={styles.caseAddress}>{caseItem.address}</h3>
        <p className={styles.caseStatus}>Status: {caseItem.status}</p>
        <p className={styles.caseDate}>EvictionDate: {caseItem.date}</p>
        <p className={styles.caseTenants}>Tenants: {caseItem.tenants}</p>
        <p className={styles.caseCity}>City: {caseItem.city}</p>
        <p className={styles.caseRegion}>Region: {caseItem.region}</p>
        <p className={styles.caseDescription}>{caseItem.description}</p>
        <Button className={clsx(styles.button, styles.attend)} text="ATTEND" />
        <p className={styles.caseAttendants}>
          Attendants: {caseItem.attendants}
        </p>
      </div>
    </div>
  );
}
