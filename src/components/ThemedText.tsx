import React from 'react';
import { Text, TextProps } from 'react-native';
import { styles } from './styles/ThemedText.styles';

interface ThemedTextProps extends TextProps {
  type?: 'default' | 'title' | 'subtitle';
}

export const ThemedText: React.FC<ThemedTextProps> = ({ 
  children, 
  style, 
  type = 'default',
  ...props 
}) => {
  return (
    <Text 
      style={[styles[type], style]} 
      {...props}
    >
      {children}
    </Text>
  );
}; 