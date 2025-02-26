import axios, { AxiosError } from 'axios';
import { Employee } from '@/types/employee';

// When running on a physical device or emulator, localhost won't work
// We need to use the machine's IP address
const api = axios.create({
  baseURL: 'http://192.168.0.142:3000', // Local IP address
  timeout: 5000,
});

// Add request interceptor for debugging
api.interceptors.request.use(
  config => {
    console.log('Request:', config.method?.toUpperCase(), config.url);
    return config;
  },
  error => {
    console.error('Request Error:', error);
    return Promise.reject(error);
  }
);

// Add response interceptor for debugging
api.interceptors.response.use(
  response => {
    console.log('Response Status:', response.status);
    return response;
  },
  error => {
    console.error('Response Error:', error.message);
    return Promise.reject(error);
  }
);

export const getEmployees = async (): Promise<Employee[]> => {
  try {
    console.log('Fetching employees...');
    const response = await api.get<Employee[]>('/employees');
    console.log('Employees fetched successfully:', response.data.length);
    return response.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      if (error.code === 'ECONNREFUSED') {
        console.error('Could not connect to the API server. Make sure json-server is running on port 3000');
      } else if (error.response) {
        console.error('API Error:', error.response.status, error.response.data);
      } else if (error.request) {
        console.error('No response received:', error.message);
      }
    }
    throw error;
  }
};

export default api; 