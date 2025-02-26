import React from 'react';
import { View, Image, ScrollView } from 'react-native';
import { ThemedText } from './ThemedText';
import { Employee } from '@/types/employee';
import { formatDate, formatPhone } from '@/utils/formatters';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles/EmployeeTable.styles';

interface EmployeeTableProps {
  data: Employee[];
}

export const EmployeeTable: React.FC<EmployeeTableProps> = ({ data }) => {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={[styles.column, styles.imageColumn]}>
            <ThemedText style={styles.headerText}>Foto</ThemedText>
          </View>
          <View style={[styles.column, styles.nameColumn]}>
            <ThemedText style={styles.headerText}>Nome</ThemedText>
            <Ionicons name="chevron-down" size={16} color="#666" />
          </View>
          <View style={[styles.column, styles.positionColumn]}>
            <ThemedText style={styles.headerText}>Cargo</ThemedText>
            <Ionicons name="chevron-down" size={16} color="#666" />
          </View>
          <View style={[styles.column, styles.dateColumn]}>
            <ThemedText style={styles.headerText}>Data</ThemedText>
            <Ionicons name="chevron-down" size={16} color="#666" />
          </View>
          <View style={[styles.column, styles.phoneColumn]}>
            <ThemedText style={styles.headerText}>Telefone</ThemedText>
          </View>
        </View>
        
        <ScrollView 
          style={styles.tableContent}
          showsVerticalScrollIndicator={false}
        >
          {data.map((employee) => (
            <View key={employee.id} style={styles.row}>
              <View style={[styles.column, styles.imageColumn]}>
                <Image 
                  source={{ uri: employee.image }} 
                  style={styles.image}
                />
              </View>
              <View style={[styles.column, styles.nameColumn]}>
                <ThemedText style={styles.employeeName}>{employee.name}</ThemedText>
              </View>
              <View style={[styles.column, styles.positionColumn]}>
                <View style={styles.positionBadge}>
                  <ThemedText style={styles.positionText}>{employee.position}</ThemedText>
                </View>
              </View>
              <View style={[styles.column, styles.dateColumn]}>
                <ThemedText style={styles.dateText}>{formatDate(employee.admissionDate)}</ThemedText>
              </View>
              <View style={[styles.column, styles.phoneColumn]}>
                <ThemedText style={styles.phoneText}>{formatPhone(employee.phone)}</ThemedText>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </ScrollView>
  );
}; 