import React, { createContext, useContext, useState, useEffect } from 'react';
import { useColorScheme } from 'react-native';

interface ThemeContextData {
  isDarkMode: boolean;
  toggleTheme: () => void;
  colors: typeof lightColors;
}

const lightColors = {
  background: '#F8F9FA',
  card: '#FFFFFF',
  text: '#212529',
  textSecondary: '#495057',
  textTertiary: '#6C757D',
  primary: '#339AF0',
  error: '#FF6B6B',
  border: '#E9ECEF',
  badge: '#E7F5FF',
  badgeText: '#339AF0',
};

const darkColors = {
  background: '#1E2124',
  card: '#25282C',
  text: '#F8F9FA',
  textSecondary: '#CED4DA',
  textTertiary: '#ADB5BD',
  primary: '#4DABF7',
  error: '#FF8787',
  border: '#343A40',
  badge: '#1864AB',
  badgeText: '#4DABF7',
};

const ThemeContext = createContext<ThemeContextData>({} as ThemeContextData);

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const systemColorScheme = useColorScheme();
  const [isDarkMode, setIsDarkMode] = useState(systemColorScheme === 'dark');

  useEffect(() => {
    setIsDarkMode(systemColorScheme === 'dark');
  }, [systemColorScheme]);

  const toggleTheme = () => setIsDarkMode(prev => !prev);

  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        toggleTheme,
        colors: isDarkMode ? darkColors : lightColors,
      }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}; 