import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    paddingTop: 50,
    paddingHorizontal: 16,
    paddingBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'rgba(0, 0, 0, 0.1)',
  },
  closeButton: {
    padding: 8,
    marginRight: 8,
  },
  headerTitle: {
    flex: 1,
    fontSize: 20,
    fontWeight: '600',
  },
  content: {
    flex: 1,
    paddingBottom: 34,
  },
  profileSection: {
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 12,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    marginRight: 16,
  },
  profileInfo: {
    flex: 1,
  },
  name: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 4,
  },
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
    alignSelf: 'flex-start',
    marginBottom: 4,
  },
  position: {
    fontSize: 14,
    fontWeight: '500',
  },
  department: {
    fontSize: 14,
  },
  section: {
    marginHorizontal: 16,
    marginBottom: 8,
    padding: 16,
    borderRadius: 12,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginLeft: 8,
  },
  contactItem: {
    marginBottom: 12,
  },
  contactLabel: {
    fontSize: 12,
    marginBottom: 4,
  },
  contactValue: {
    fontSize: 16,
    fontWeight: '500',
  },
  infoItem: {
    marginBottom: 16,
  },
  infoLabel: {
    fontSize: 12,
    marginBottom: 8,
  },
  infoValue: {
    fontSize: 16,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  skillBadge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  skillText: {
    fontSize: 12,
    fontWeight: '500',
  },
  projectsContainer: {
    gap: 4,
  },
  projectText: {
    fontSize: 14,
    lineHeight: 20,
  },
  address: {
    fontSize: 14,
    lineHeight: 20,
  },
  emergencyContact: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  emergencyName: {
    fontSize: 16,
    fontWeight: '500',
    marginBottom: 4,
  },
  emergencyRelation: {
    fontSize: 12,
  },
  emergencyPhone: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  emergencyPhoneText: {
    fontSize: 14,
    fontWeight: '500',
  },
  documentItem: {
    marginBottom: 12,
  },
  documentLabel: {
    fontSize: 12,
    marginBottom: 4,
  },
  documentValue: {
    fontSize: 14,
  },
}); 