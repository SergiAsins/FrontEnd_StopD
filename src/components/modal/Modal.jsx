import React from "react";
import styles from "./Modal.module.css";
import Button from "../button/Button";
import clsx from "clsx";

export default function CaseModal({ caseItem, onClose }) {
  if (!caseItem) return null;

  return (
    <div className={styles.modalOverlay} onClick={onClose}>
      <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeButton} onClick={onClose}>
          ✖
        </button>
        <img
          src={caseItem.image}
          alt={caseItem.title}
          className={styles.modalImage}
        />
        <p className={styles.titleModal}>{caseItem.address}</p>
        <p>
          <strong>Tenants:</strong> {caseItem.tenants}
        </p>
        <p>
          <strong>Date:</strong> {caseItem.date}
        </p>
        <p>
          <strong>Region:</strong> {caseItem.region}
        </p>
        <p>
          <strong>Region:</strong> {caseItem.city}
        </p>
        <p>{caseItem.description}</p>
        <Button className={clsx(styles.button, styles.attend)} text="ATTEND" />
      </div>
    </div>
  );
}
