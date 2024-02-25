import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 14,
  },
  countContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#333333',
    paddingHorizontal: 6,
    borderRadius: 10,
    marginLeft: 4,
  },
  countValue: {
    color: '#D9D9D9',
    fontSize: 12,
  },
});
