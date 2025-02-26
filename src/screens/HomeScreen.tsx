import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { EmployeeTable } from '../components/EmployeeTable';

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <EmployeeTable />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
}); 