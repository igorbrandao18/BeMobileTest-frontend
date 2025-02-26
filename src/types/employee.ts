export interface Employee {
  id: number;
  name: string;
  position: string;
  admissionDate: string;
  phone: string;
  thumbnail: string;
}

export interface EmployeeResponse {
  employees: Employee[];
} 