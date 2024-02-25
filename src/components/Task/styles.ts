import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#262626',
    borderWidth: 1,
    borderColor: '#333333',
    borderRadius: 10,
    padding: 20,
    marginBottom: 12,
  },
  checkbox: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    height: 24,
    width: 24,
    borderWidth: 2,
    borderColor: '#4EA8DE',
    borderRadius: 40,
  },
  checkboxChecked: {
    backgroundColor: '#8284FA',
    borderColor: '#8284FA',
    color: '#fff',
    paddingTop: 1,
  },
  titleContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 12,
    marginRight: 6,
  },
  title: {
    fontSize: 14,
    color: '#F2F2F2',
    alignSelf: 'flex-start',
  },
});
