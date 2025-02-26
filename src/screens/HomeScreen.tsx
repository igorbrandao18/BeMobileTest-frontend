import React, { useState, useEffect, useCallback } from 'react';
import { StyleSheet, SafeAreaView, View, ActivityIndicator } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { EmployeeList } from '@/components/EmployeeList';
import { Header } from '@/components/Header';
import { getEmployees } from '@/services/api';
import { Employee } from '@/types/employee';
import { ThemedText } from '@/components/ThemedText';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '@/contexts/ThemeContext';

type SortKey = 'name' | 'position' | 'admissionDate';

export const HomeScreen = () => {
  const { colors, isDarkMode } = useTheme();
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [filteredEmployees, setFilteredEmployees] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortKey, setSortKey] = useState<SortKey>('name');
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');

  useEffect(() => {
    loadEmployees();
  }, []);

  const loadEmployees = async () => {
    try {
      setError(null);
      const data = await getEmployees();
      setEmployees(data);
      handleSort(sortKey, data);
    } catch (error) {
      setError('Não foi possível carregar os funcionários.');
    } finally {
      setLoading(false);
      setRefreshing(false);
    }
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    const filtered = employees.filter((employee) =>
      employee.name.toLowerCase().includes(query.toLowerCase()) ||
      employee.position.toLowerCase().includes(query.toLowerCase()) ||
      employee.phone.includes(query)
    );
    handleSort(sortKey, filtered);
  };

  const handleSort = useCallback((key: SortKey, data = filteredEmployees) => {
    setSortKey(key);
    const direction = key === sortKey ? (sortDirection === 'asc' ? 'desc' : 'asc') : 'asc';
    setSortDirection(direction);

    const sorted = [...data].sort((a, b) => {
      const modifier = direction === 'asc' ? 1 : -1;
      
      switch (key) {
        case 'name':
          return a.name.localeCompare(b.name) * modifier;
        case 'position':
          return a.position.localeCompare(b.position) * modifier;
        case 'admissionDate':
          return (new Date(a.admissionDate).getTime() - new Date(b.admissionDate).getTime()) * modifier;
        default:
          return 0;
      }
    });

    setFilteredEmployees(sorted);
  }, [sortKey, sortDirection]);

  const handleRefresh = () => {
    setRefreshing(true);
    loadEmployees();
  };

  const renderContent = () => {
    if (loading) {
      return (
        <View style={styles.centerContainer}>
          <ActivityIndicator size="large" color={colors.primary} />
        </View>
      );
    }

    if (error) {
      return (
        <View style={styles.centerContainer}>
          <Ionicons name="alert-circle-outline" size={48} color={colors.error} />
          <ThemedText style={[styles.errorText, { color: colors.error }]}>
            {error}
          </ThemedText>
          <ThemedText
            style={[styles.retryText, { color: colors.primary }]}
            onPress={loadEmployees}>
            Tentar Novamente
          </ThemedText>
        </View>
      );
    }

    return (
      <EmployeeList
        data={filteredEmployees}
        refreshing={refreshing}
        onRefresh={handleRefresh}
      />
    );
  };

  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors.background }]}>
      <StatusBar style={isDarkMode ? 'light' : 'dark'} />
      <Header
        searchQuery={searchQuery}
        onSearchChange={handleSearch}
        onSort={handleSort}
      />
      {renderContent()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  centerContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 32,
  },
  errorText: {
    marginTop: 16,
    textAlign: 'center',
    fontSize: 16,
  },
  retryText: {
    marginTop: 8,
    fontSize: 16,
    textDecorationLine: 'underline',
  },
});