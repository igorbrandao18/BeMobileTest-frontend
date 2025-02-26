import React from 'react';
import {
  View,
  Modal,
  ScrollView,
  TouchableOpacity,
  Image,
  Linking,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Employee } from '@/types/employee';
import { ThemedText } from './ThemedText';
import { formatDate, formatPhone } from '@/utils/formatters';
import { useTheme } from '@/contexts/ThemeContext';
import { styles } from './styles/EmployeeDetails.styles';

interface EmployeeDetailsProps {
  employee: Employee | null;
  visible: boolean;
  onClose: () => void;
}

export const EmployeeDetails: React.FC<EmployeeDetailsProps> = ({
  employee,
  visible,
  onClose,
}) => {
  const { colors } = useTheme();

  if (!employee) return null;

  const handleCall = async () => {
    const phoneNumber = `tel:${employee.phone}`;
    const canOpen = await Linking.canOpenURL(phoneNumber);
    
    if (canOpen) {
      await Linking.openURL(phoneNumber);
    }
  };

  const handleEmail = async () => {
    const mailUrl = `mailto:${employee.email}`;
    const canOpen = await Linking.canOpenURL(mailUrl);
    
    if (canOpen) {
      await Linking.openURL(mailUrl);
    }
  };

  const handleEmergencyCall = async () => {
    const phoneNumber = `tel:${employee.emergencyContact.phone}`;
    const canOpen = await Linking.canOpenURL(phoneNumber);
    
    if (canOpen) {
      await Linking.openURL(phoneNumber);
    }
  };

  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={onClose}
    >
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        <View style={[styles.header, { backgroundColor: colors.card }]}>
          <TouchableOpacity onPress={onClose} style={styles.closeButton}>
            <Ionicons name="close" size={24} color={colors.text} />
          </TouchableOpacity>
          <ThemedText type="title" style={[styles.headerTitle, { color: colors.text }]}>
            Detalhes do Funcionário
          </ThemedText>
        </View>

        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          <View style={[styles.profileSection, { backgroundColor: colors.card }]}>
            <Image source={{ uri: employee.image }} style={styles.profileImage} />
            <View style={styles.profileInfo}>
              <ThemedText style={[styles.name, { color: colors.text }]}>
                {employee.name}
              </ThemedText>
              <View style={[styles.badge, { backgroundColor: colors.badge }]}>
                <ThemedText style={[styles.position, { color: colors.badgeText }]}>
                  {employee.position}
                </ThemedText>
              </View>
              <ThemedText style={[styles.department, { color: colors.textSecondary }]}>
                {employee.department}
              </ThemedText>
            </View>
          </View>

          <View style={[styles.section, { backgroundColor: colors.card }]}>
            <View style={styles.sectionHeader}>
              <Ionicons name="call-outline" size={20} color={colors.primary} />
              <ThemedText style={[styles.sectionTitle, { color: colors.text }]}>
                Contato
              </ThemedText>
            </View>
            <TouchableOpacity onPress={handleCall} style={styles.contactItem}>
              <ThemedText style={[styles.contactLabel, { color: colors.textTertiary }]}>
                Telefone
              </ThemedText>
              <ThemedText style={[styles.contactValue, { color: colors.primary }]}>
                {formatPhone(employee.phone)}
              </ThemedText>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleEmail} style={styles.contactItem}>
              <ThemedText style={[styles.contactLabel, { color: colors.textTertiary }]}>
                Email
              </ThemedText>
              <ThemedText style={[styles.contactValue, { color: colors.primary }]}>
                {employee.email}
              </ThemedText>
            </TouchableOpacity>
          </View>

          <View style={[styles.section, { backgroundColor: colors.card }]}>
            <View style={styles.sectionHeader}>
              <Ionicons name="briefcase-outline" size={20} color={colors.primary} />
              <ThemedText style={[styles.sectionTitle, { color: colors.text }]}>
                Informações Profissionais
              </ThemedText>
            </View>
            <View style={styles.infoItem}>
              <ThemedText style={[styles.infoLabel, { color: colors.textTertiary }]}>
                Data de Admissão
              </ThemedText>
              <ThemedText style={[styles.infoValue, { color: colors.textSecondary }]}>
                {formatDate(employee.admissionDate)}
              </ThemedText>
            </View>
            <View style={styles.infoItem}>
              <ThemedText style={[styles.infoLabel, { color: colors.textTertiary }]}>
                Habilidades
              </ThemedText>
              <View style={styles.skillsContainer}>
                {employee.skills.map((skill, index) => (
                  <View
                    key={index}
                    style={[styles.skillBadge, { backgroundColor: colors.badge }]}
                  >
                    <ThemedText style={[styles.skillText, { color: colors.badgeText }]}>
                      {skill}
                    </ThemedText>
                  </View>
                ))}
              </View>
            </View>
            <View style={styles.infoItem}>
              <ThemedText style={[styles.infoLabel, { color: colors.textTertiary }]}>
                Projetos
              </ThemedText>
              <View style={styles.projectsContainer}>
                {employee.projects.map((project, index) => (
                  <ThemedText
                    key={index}
                    style={[styles.projectText, { color: colors.textSecondary }]}
                  >
                    • {project}
                  </ThemedText>
                ))}
              </View>
            </View>
          </View>

          <View style={[styles.section, { backgroundColor: colors.card }]}>
            <View style={styles.sectionHeader}>
              <Ionicons name="location-outline" size={20} color={colors.primary} />
              <ThemedText style={[styles.sectionTitle, { color: colors.text }]}>
                Endereço
              </ThemedText>
            </View>
            <ThemedText style={[styles.address, { color: colors.textSecondary }]}>
              {employee.address.street}{'\n'}
              {employee.address.city}, {employee.address.state}{'\n'}
              CEP: {employee.address.zipCode}
            </ThemedText>
          </View>

          <View style={[styles.section, { backgroundColor: colors.card }]}>
            <View style={styles.sectionHeader}>
              <Ionicons name="alert-circle-outline" size={20} color={colors.primary} />
              <ThemedText style={[styles.sectionTitle, { color: colors.text }]}>
                Contato de Emergência
              </ThemedText>
            </View>
            <TouchableOpacity onPress={handleEmergencyCall} style={styles.emergencyContact}>
              <View>
                <ThemedText style={[styles.emergencyName, { color: colors.text }]}>
                  {employee.emergencyContact.name}
                </ThemedText>
                <ThemedText style={[styles.emergencyRelation, { color: colors.textTertiary }]}>
                  {employee.emergencyContact.relationship}
                </ThemedText>
              </View>
              <View style={styles.emergencyPhone}>
                <Ionicons name="call" size={20} color={colors.primary} />
                <ThemedText style={[styles.emergencyPhoneText, { color: colors.primary }]}>
                  {formatPhone(employee.emergencyContact.phone)}
                </ThemedText>
              </View>
            </TouchableOpacity>
          </View>

          <View style={[styles.section, { backgroundColor: colors.card }]}>
            <View style={styles.sectionHeader}>
              <Ionicons name="document-text-outline" size={20} color={colors.primary} />
              <ThemedText style={[styles.sectionTitle, { color: colors.text }]}>
                Documentos
              </ThemedText>
            </View>
            <View style={styles.documentItem}>
              <ThemedText style={[styles.documentLabel, { color: colors.textTertiary }]}>
                CPF
              </ThemedText>
              <ThemedText style={[styles.documentValue, { color: colors.textSecondary }]}>
                {employee.documents.cpf}
              </ThemedText>
            </View>
            <View style={styles.documentItem}>
              <ThemedText style={[styles.documentLabel, { color: colors.textTertiary }]}>
                RG
              </ThemedText>
              <ThemedText style={[styles.documentValue, { color: colors.textSecondary }]}>
                {employee.documents.rg}
              </ThemedText>
            </View>
          </View>
        </ScrollView>
      </View>
    </Modal>
  );
}; 