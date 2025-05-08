export interface CaseItem {
  id: string;
  tenants?: Set<String>;
  address: string;
  status: string;
  date: string;
  region: string;
  city: string;
  urlImage?: string;
  description: string;
  attendants?: Set<String>;
}
