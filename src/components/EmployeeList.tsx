import React from 'react';
import { FlatList, RefreshControl, View } from 'react-native';
import { Employee } from '@/types/employee';
import { EmployeeCard } from './EmployeeCard';
import { ThemedText } from './ThemedText';
import { Ionicons } from '@expo/vector-icons';
import { styles } from './styles/EmployeeList.styles';

interface EmployeeListProps {
  data: Employee[];
  refreshing?: boolean;
  onRefresh?: () => void;
}

export const EmployeeList: React.FC<EmployeeListProps> = ({
  data,
  refreshing = false,
  onRefresh,
}) => {
  if (data.length === 0) {
    return (
      <View style={styles.emptyContainer}>
        <Ionicons name="people-outline" size={48} color="#CED4DA" />
        <ThemedText style={styles.emptyText}>
          Nenhum funcionário encontrado
        </ThemedText>
      </View>
    );
  }

  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => <EmployeeCard employee={item} />}
      contentContainerStyle={styles.list}
      showsVerticalScrollIndicator={false}
      refreshControl={
        onRefresh ? (
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            tintColor="#339AF0"
            colors={['#339AF0']}
          />
        ) : undefined
      }
    />
  );
}; 