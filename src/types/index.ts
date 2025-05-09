export interface CaseItem {
  id: number;
  tenants?: Set<String>;
  address: string;
  status: string;
  caseDate: string;
  region: string;
  city: string;
  urlImage?: string;
  description: string;
  attendants?: Set<String>;
}
