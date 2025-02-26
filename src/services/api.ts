import axios from 'axios';
import { Employee, EmployeeResponse } from '../types/employee';

const api = axios.create({
  baseURL: 'http://localhost:3000',
});

export const employeeService = {
  async getAllEmployees(): Promise<Employee[]> {
    try {
      const response = await api.get<EmployeeResponse>('/employees');
      return response.data.employees;
    } catch (error) {
      console.error('Error fetching employees:', error);
      throw error;
    }
  },

  async searchEmployees(query: string): Promise<Employee[]> {
    try {
      const allEmployees = await this.getAllEmployees();
      const searchTerm = query.toLowerCase();
      
      return allEmployees.filter((employee) => 
        employee.name.toLowerCase().includes(searchTerm) ||
        employee.position.toLowerCase().includes(searchTerm) ||
        employee.phone.includes(searchTerm)
      );
    } catch (error) {
      console.error('Error searching employees:', error);
      throw error;
    }
  }
}; 