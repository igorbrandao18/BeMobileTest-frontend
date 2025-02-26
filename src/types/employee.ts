export interface Employee {
  id: number;
  name: string;
  position: string;
  admissionDate: string;
  phone: string;
  image: string;
  email: string;
  department: string;
  skills: string[];
  projects: string[];
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
  };
  emergencyContact: {
    name: string;
    relationship: string;
    phone: string;
  };
  documents: {
    cpf: string;
    rg: string;
  };
}

export interface EmployeeTableProps {
  data: Employee[];
  loading: boolean;
  onSearch: (query: string) => void;
} 