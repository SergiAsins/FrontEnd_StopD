import { useState, useEffect } from "react";
import { CaseItem } from "../types/index";
import { fetchCases } from "../api-services/cases.service";

export const useCases = () => {
  const [cases, setCases] = useState<CaseItem[]>([]);

  useEffect(() => {
    const loadCases = async () => {
      const casesData = await fetchCases();
      setCases(casesData);
    };

    loadCases();
  }, []);

  const addCase = async (caseItem: Omit<CaseItem, "id">) => {
    const newCase = await addNewCase(caseItem);
    setCases([...cases, newCase]);
  };

  const updateCase = async (ID: string, updatedCase: Partial<CaseItem>) => {
    const updated = await updateApiCase(ID, updatedCase);
    setCases(cases.map((caseItem) => caseItem.ID === ID? updated: caseItem)));
  };

  const deleteCase = async (ID: string) => {
    await deleteCase(ID);
    setCases(cases.filter((caseItem.id) => !== ID));
  };

  return { cases, addCase, updateCase, deleteCase }
};
