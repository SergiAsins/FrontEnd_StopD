import React, { useState } from "react";
import styles from "./CasesList.module.css";
import Button from "../button/Button";
import clsx from "clsx";
import CaseModal from "../modal/Modal";
//import { CaseItem } from "../../types/index";
//import { FaHeart } from "react-icons/fa";
//import { useFavourites } from "../../context/FavouritesContext";

export default function CasesList({ cases }) {
  const [selectedCase, setSelectedCase] = useState(null);

  const handleCardClick = (caseItem) => {
    setSelectedCase(caseItem); // Shows the modal with the selected case
  };

  const closeModal = () => {
    setSelectedCase(null); // Close the modal
  };

  return (
    <div className={styles.casesContainer}>
      {cases.map((caseItem) => (
        <CaseCard
          key={caseItem.id}
          caseItem={caseItem}
          onCardClick={handleCardClick}
        />
      ))}
      {/*Mostrar el modal si hay un case seleccionado */}
      {/* Comentado temporalmente hasta tener el Modal */}
      {/*selectedCase && (
        <CaseModal caseItem={selectedCase} onClose={closeModal} />
      )*/}
    </div>
  );
}

function CaseCard({ caseItem, onCardClick }) {
  //const { favourites, toggleFavourite } = useFavourites();
  // Verificación segura de propiedades
  if (!caseItem || !caseItem.id) {
    return null; // o algún componente de carga/error
  }

  //const isFavourite = favourites.some((fav) => fav.id === caseItem.id);

  return (
    <div className={styles.caseCard} onClick={() => onCardClick(caseItem)}>
      <img
        src={caseItem.urlImage || caseItem.image} // Compatibilty with the two names
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
