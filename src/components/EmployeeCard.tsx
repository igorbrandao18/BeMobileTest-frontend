import React, { useCallback, useState } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Platform,
  Linking,
  Share,
  Alert,
  Animated,
  Pressable,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { ThemedText } from './ThemedText';
import { Employee } from '@/types/employee';
import { formatDate, formatPhone } from '@/utils/formatters';
import { useTheme } from '@/contexts/ThemeContext';
import { styles } from './styles/EmployeeCard.styles';
import { EmployeeDetails } from './EmployeeDetails';

interface EmployeeCardProps {
  employee: Employee;
  scale?: Animated.Value;
}

export const EmployeeCard: React.FC<EmployeeCardProps> = ({
  employee,
  scale = new Animated.Value(1),
}) => {
  const { colors } = useTheme();
  const [showDetails, setShowDetails] = useState(false);

  const handleCall = useCallback(async () => {
    const phoneNumber = `tel:${employee.phone}`;
    const canOpen = await Linking.canOpenURL(phoneNumber);
    
    if (canOpen) {
      await Linking.openURL(phoneNumber);
    } else {
      Alert.alert('Erro', 'Não foi possível realizar a ligação');
    }
  }, [employee.phone]);

  const handleShare = useCallback(async () => {
    try {
      await Share.share({
        title: `Contato - ${employee.name}`,
        message: `${employee.name}\n${employee.position}\n${formatPhone(employee.phone)}`,
      });
    } catch (error) {
      Alert.alert('Erro', 'Não foi possível compartilhar o contato');
    }
  }, [employee]);

  const handlePressIn = () => {
    Animated.spring(scale, {
      toValue: 0.95,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scale, {
      toValue: 1,
      useNativeDriver: true,
    }).start();
  };

  const handlePress = () => {
    setShowDetails(true);
  };

  return (
    <>
      <Pressable 
        onPressIn={handlePressIn} 
        onPressOut={handlePressOut}
        onPress={handlePress}
      >
        <Animated.View style={[
          styles.card,
          {
            backgroundColor: colors.card,
            transform: [{ scale }],
          },
        ]}>
          <View style={[styles.header, { borderBottomColor: colors.border }]}>
            <Image source={{ uri: employee.image }} style={[styles.avatar, { borderColor: colors.border }]} />
            <View style={styles.headerInfo}>
              <ThemedText style={[styles.name, { color: colors.text }]}>{employee.name}</ThemedText>
              <View style={[styles.positionBadge, { backgroundColor: colors.badge }]}>
                <ThemedText style={[styles.position, { color: colors.badgeText }]}>
                  {employee.position}
                </ThemedText>
              </View>
            </View>
            <TouchableOpacity onPress={handleShare} style={styles.shareButton}>
              <Ionicons name="share-outline" size={24} color={colors.primary} />
            </TouchableOpacity>
          </View>
          
          <View style={styles.infoContainer}>
            <View style={styles.infoRow}>
              <View style={styles.infoItem}>
                <Ionicons name="calendar-outline" size={20} color={colors.textTertiary} />
                <View>
                  <ThemedText style={[styles.infoLabel, { color: colors.textTertiary }]}>
                    Data de Admissão
                  </ThemedText>
                  <ThemedText style={[styles.infoValue, { color: colors.textSecondary }]}>
                    {formatDate(employee.admissionDate)}
                  </ThemedText>
                </View>
              </View>
              
              <TouchableOpacity style={styles.infoItem} onPress={handleCall}>
                <Ionicons name="call-outline" size={20} color={colors.primary} />
                <View>
                  <ThemedText style={[styles.infoLabel, { color: colors.textTertiary }]}>
                    Telefone
                  </ThemedText>
                  <ThemedText style={[styles.infoValue, { color: colors.primary }]}>
                    {formatPhone(employee.phone)}
                  </ThemedText>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </Animated.View>
      </Pressable>

      <EmployeeDetails
        employee={employee}
        visible={showDetails}
        onClose={() => setShowDetails(false)}
      />
    </>
  );
}; 