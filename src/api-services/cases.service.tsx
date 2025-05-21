import axiosInstance from "./axios-instance";
import { CaseItem } from "../types/index";

const API_URL = "/cases";

// Fetch all cases
export const fetchCases = async (): Promise<CaseItem[]> => {
  const response = await axiosInstance.get<CaseItem[]>(API_URL);
  if (!response.data) throw new Error("Error fetching cases");
  return response.data.map((dto) => ({
    ...dto,
    caseDate: new Date(dto.caseDate), // Convertir a Date aquí
  }));
};

// Fetch a single case by ID
export const getCaseByIdFromAPI = async (id: string): Promise<CaseItem> => {
  //const response = await axiosInstance.get<CaseItem>("${API_URL/by-id/${id}");
  const response = await axiosInstance.get<CaseItem>(`${API_URL}/by-id/${id}`);
  return response.data;
};

// Add a new case
export const addNewCase = async (
  caseItem: Omit<CaseItem, "id">
): Promise<CaseItem> => {
  const response = await axiosInstance.post<CaseItem>(API_URL, caseItem);
  return response.data;
};

// Update an existing case
export const updateApiCase = async (
  id: string, // El backend lo convertirá a Long
  updatedCase: Partial<CaseItem>
): Promise<CaseItem> => {
  const response = await axiosInstance.put(`${API_URL}/${id}`, updatedCase);
  return response.data;
};

// Delete a case
export const deleteApiCase = async (id: string): Promise<void> => {
  await axiosInstance.delete(`${API_URL}/by-id/${id}`);
};
