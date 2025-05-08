import axiosInstance from "./axios-instance";
import { CaseItem } from "../types/index";

const API_URL = "/cases";

// Fetch all cases
export const fetchCases = async (): Promise<CaseItem[]> => {
  const response = await axiosInstance.get<CaseItem[]>(API_URL);
  if (!response.data) throw new Error("Error fetching cases");
  return response.data;
};

// Fetch a single case by ID
export const getCaseByIdFromAPI = async (id: string): Promise<CaseItem> => {
  const response = await axiosInstance.get<CaseItem>("${API_URL/by-id/${id}");
  return response.data;
};

// Add a new case
export const addNewCase = async (
  caseItem: Omit<CaseItem, "ID">
): Promise<CaseItem> => {
  const response = await axiosInstance.post<CaseItem>(API_URL, caseItem);
  return response.data;
};

// Update an existing case
export const updateApiCase = async (
  ID: string,
  updatedCase: Partial<CaseItem>
): Promise<CaseItem> => {
  const response = await axiosInstance.put<CaseItem>(
    `${API_URL}/by-id/${ID}`,
    updatedCase
  );
  return response.data;
};

// Delete a case
export const deleteCase = async (ID: string): Promise<void> => {
  await axiosInstance.delete(`${API_URL}/by-id/${ID}`);
};

// getCaseById
