import React from "react";
import { useCases } from "../../hooks/useCases";
import CasesList from "./CasesList";

const CaseManager: React.FC = () => {
  const { cases } = useCases();

  return (
    <div>
      <CasesList cases={cases} />
    </div>
  );
};

export default CaseManager;
