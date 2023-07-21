import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrap: {
    flex: 1,
  },

  footer: {
    borderTopWidth: 1,
    borderColor: 'grey',
    paddingTop: 20,
    alignItems: 'center',
    backgroundColor: '#D1C4E9',
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
  },

  inputs: {
    padding: 7,
    borderWidth: 1,
    backgroundColor: 'white',
    borderRadius: 10,
    width: '80%',
    marginBottom: 10,
    fontSize: 18,
    fontWeight: '600',
  },
  button: {
    padding: 7,
    borderWidth: 1,
    backgroundColor: 'rebeccapurple',
    marginBottom: 10,
    width: '60%',
    borderRadius: 10,
    alignItems: 'center',
  },

  textButton: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
  },
});
