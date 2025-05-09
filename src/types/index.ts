export interface CaseItem {
  id: number;
  tenants?: Set<String>;
  address: string;
  status: string;
  caseDate: Date;
  region: string;
  city: string;
  urlImage?: string;
  description: string;
  attendants?: Set<String>;
}
