import { useState, useEffect } from "react";
import { CaseItem } from "../types/index";
import {
  fetchCases,
  addNewCase,
  updateApiCase,
  deleteApiCase,
} from "../api-services/cases.service";

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

  const updateCase = async (id: string, updatedCase: Partial<CaseItem>) => {
    const updated = await updateApiCase(id, updatedCase);
    setCases(cases.map((c) => (c.id === Number(id) ? updated : c))); // Convertir a número
  };

  const deleteCase = async (id: string) => {
    await deleteApiCase(id);
    setCases(cases.filter((c) => c.id !== Number(id))); // Convertir a número
  };

  return { cases, addCase, updateCase, deleteCase };
};
