import React, { useState } from 'react';
import {
  View,
  TextInput,
  Platform,
  TouchableOpacity,
  Modal,
  Pressable,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemedText } from './ThemedText';
import { BlurView } from 'expo-blur';
import { useTheme } from '@/contexts/ThemeContext';
import { styles } from './styles/Header.styles';

interface HeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSort?: (key: 'name' | 'position' | 'admissionDate') => void;
}

export const Header: React.FC<HeaderProps> = ({
  searchQuery,
  onSearchChange,
  onSort,
}) => {
  const { colors, isDarkMode, toggleTheme } = useTheme();
  const [showSortModal, setShowSortModal] = useState(false);
  const HeaderContainer = Platform.OS === 'ios' ? BlurView : View;

  const sortOptions = [
    { key: 'name' as const, label: 'Nome' },
    { key: 'position' as const, label: 'Cargo' },
    { key: 'admissionDate' as const, label: 'Data de Admissão' },
  ];

  return (
    <>
      <HeaderContainer
        intensity={80}
        tint={isDarkMode ? 'dark' : 'light'}
        style={[styles.container, { backgroundColor: colors.card }]}>
        <View style={styles.content}>
          <View style={styles.titleRow}>
            <View style={styles.titleContainer}>
              <ThemedText type="title" style={[styles.title, { color: colors.text }]} numberOfLines={1}>
                Funcionários
              </ThemedText>
              <ThemedText 
                type="subtitle" 
                style={[styles.subtitle, { color: colors.textTertiary }]}
                numberOfLines={1}
              >
                Listagem completa de funcionários
              </ThemedText>
            </View>
            <View style={styles.actions}>
              <TouchableOpacity
                onPress={() => setShowSortModal(true)}
                style={[styles.actionButton, { backgroundColor: colors.badge }]}>
                <Ionicons name="funnel-outline" size={22} color={colors.primary} />
              </TouchableOpacity>
              <TouchableOpacity 
                onPress={toggleTheme} 
                style={[styles.actionButton, { backgroundColor: colors.badge }]}>
                <Ionicons
                  name={isDarkMode ? 'sunny-outline' : 'moon-outline'}
                  size={22}
                  color={colors.primary}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={[styles.searchContainer, { backgroundColor: isDarkMode ? colors.background : '#F5F5F5' }]}>
            <Ionicons name="search" size={20} color={colors.textTertiary} style={styles.searchIcon} />
            <TextInput
              style={[styles.searchInput, { color: colors.text }]}
              placeholder="Pesquisar"
              placeholderTextColor={colors.textTertiary}
              value={searchQuery}
              onChangeText={onSearchChange}
            />
          </View>
        </View>
      </HeaderContainer>

      <Modal
        visible={showSortModal}
        transparent
        animationType="fade"
        onRequestClose={() => setShowSortModal(false)}>
        <Pressable
          style={styles.modalOverlay}
          onPress={() => setShowSortModal(false)}>
          <View 
            style={[
              styles.modalContent, 
              { 
                backgroundColor: colors.card,
                ...Platform.select({
                  ios: {
                    shadowColor: '#000',
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                  },
                  android: {
                    elevation: 5,
                  },
                }),
              }
            ]}>
            <ThemedText style={[styles.modalTitle, { color: colors.text }]}>
              Ordenar por
            </ThemedText>
            {sortOptions.map((option) => (
              <TouchableOpacity
                key={option.key}
                style={[styles.sortOption, { borderBottomColor: colors.border }]}
                onPress={() => {
                  onSort?.(option.key);
                  setShowSortModal(false);
                }}>
                <ThemedText style={{ color: colors.text }}>{option.label}</ThemedText>
                <Ionicons name="chevron-forward" size={20} color={colors.textTertiary} />
              </TouchableOpacity>
            ))}
          </View>
        </Pressable>
      </Modal>
    </>
  );
}; 