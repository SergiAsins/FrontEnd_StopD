export interface Tenant {
  id: number;
  name: string;
  roles?: Array<{
    id: number;
    name: string;
  }>;
}

export interface CaseItem {
  id: number;
  tenants?: Tenant[];
  address: string;
  status: string;
  caseDate: Date;
  region: string;
  city: string;
  urlImage?: string;
  description: string;
  attendants?: any[]; // O define una interfaz Attendant si es necesario
}
