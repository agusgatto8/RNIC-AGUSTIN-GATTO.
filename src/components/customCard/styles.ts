import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  wrap: {
    flex: 1,
    backgroundColor: 'red',
  },

  view: {
    padding: 5,
    backgroundColor: 'mediumpurple',
    marginBottom: 5,
    borderRadius: 20,
  },

  title: {
    padding: 5,
    fontSize: 24,
    color: 'white',
    fontWeight: '600',
  },

  text: {
    padding: 5,
    fontSize: 18,
    fontWeight: '600',
  },

  complete: {
    padding: 5,
    backgroundColor: 'mediumpurple',
    marginBottom: 20,
    borderRadius: 20,
    alignItems: 'center',
  },

  noComplete: {
    padding: 5,
    backgroundColor: 'silver',
    marginBottom: 20,
    borderRadius: 20,
    alignItems: 'center',
  },
});
