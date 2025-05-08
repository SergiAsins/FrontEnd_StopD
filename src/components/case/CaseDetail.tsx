import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getCaseByIdFromAPI } from "../../api-services/cases.service";
import { CaseItem } from "../../types/index";
//import styles from "./CasesList.module.css";

const CaseDetail: React.FC = () => {
  const { ID } = useParams<{ ID: string }>();
  const [caseItem, setCase] = useState<CaseItem | null>(null);
  //const [isLoading, setIsLoading] = useState(true);
  //const [error, setError] = useState<string | null>(null);
  //const { getCaseByISBNFromAPI } = useCases();
  //const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchCase = async () => {
      if (ID) {
        const caseData = await getCaseByIdFromAPI(ID);
        setCase(caseData);
      }
    };

    fetchCase();
  }, [ID]);

  if (!caseItem) {
    return <div>This ID that does not exist in our data base</div>;
  }

  return (
    <div className="case-detail">
      <Link to="/cases">Back to Cases</Link>
      <h1>{caseItem.address}</h1>
      <img src={caseItem.urlImage} alt={caseItem.address} />
      <p>Tenants : {caseItem.tenants}</p>
      <p>Status : {caseItem.status}</p>
      <p>Date: {caseItem.date}</p>
      <p>Regiont : {caseItem.region}</p>
      <p>City : {caseItem.city}</p>
      <p>Description: {caseItem.description}</p>
      <p>Attendants : {caseItem.attendants}</p>
    </div>
  );
};

export default CaseDetail;
