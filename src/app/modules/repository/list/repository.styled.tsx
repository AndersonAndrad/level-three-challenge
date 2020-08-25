import { StyleSheet } from 'react-native';
import Constants from 'expo-constants';

export default StyleSheet.create({
  Container: {
    paddingTop: Constants.statusBarHeight + 20,
    paddingLeft: 20,
    paddingRight: 20,
    display: 'flex',
    justifyContent: 'space-between',
    height: '100%',
  },

  listCardContainer: {
    height: '100%',
    maxHeight: 590,
  },

  cardContainer: {
    backgroundColor: '#F14F16',
    padding: 10,
    borderRadius: 5,
    display: 'flex',
    marginBottom: 10,
  },

  textCard: {
    marginBottom: 10,
    color: '#fff',
  },

  likesContainer: {
    display: 'flex',
    alignItems: 'flex-end',
  },

  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#F2F2F2',
  },

  button: {
    borderRadius: 2,
    backgroundColor: '#F36C3C',
    padding: 5,
    paddingLeft: 10,
    paddingRight: 10,
  },

  buttonText: {},
});
