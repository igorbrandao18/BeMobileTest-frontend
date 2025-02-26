import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    margin: 16,
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#F8F9FA',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#E9ECEF',
  },
  row: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#E9ECEF',
    backgroundColor: '#FFFFFF',
  },
  column: {
    padding: 16,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  headerText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#495057',
  },
  imageColumn: {
    width: 80,
  },
  nameColumn: {
    width: width * 0.3,
    minWidth: 150,
  },
  positionColumn: {
    width: width * 0.25,
    minWidth: 120,
  },
  dateColumn: {
    width: width * 0.2,
    minWidth: 120,
  },
  phoneColumn: {
    width: width * 0.25,
    minWidth: 150,
  },
  image: {
    width: 48,
    height: 48,
    borderRadius: 24,
    borderWidth: 2,
    borderColor: '#E9ECEF',
  },
  tableContent: {
    maxHeight: 500,
  },
  employeeName: {
    fontSize: 14,
    fontWeight: '500',
    color: '#212529',
  },
  positionBadge: {
    backgroundColor: '#E9ECEF',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 20,
  },
  positionText: {
    fontSize: 12,
    color: '#495057',
  },
  dateText: {
    fontSize: 14,
    color: '#6C757D',
  },
  phoneText: {
    fontSize: 14,
    color: '#6C757D',
  },
}); 