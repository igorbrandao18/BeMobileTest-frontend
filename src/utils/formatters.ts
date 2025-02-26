import { format, parseISO } from 'date-fns';
import { ptBR } from 'date-fns/locale';

export const formatDate = (date: string): string => {
  try {
    return format(parseISO(date), "dd/MM/yyyy", { locale: ptBR });
  } catch (error) {
    console.error('Error formatting date:', error);
    return date;
  }
};

export const formatPhoneNumber = (phone: string): string => {
  try {
    const cleaned = phone.replace(/\D/g, '');
    const match = cleaned.match(/^(\d{2})(\d{5})(\d{4})$/);
    
    if (match) {
      return `(${match[1]}) ${match[2]}-${match[3]}`;
    }
    
    return phone;
  } catch (error) {
    console.error('Error formatting phone number:', error);
    return phone;
  }
}; 