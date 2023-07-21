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
    fontSize: 26,
    color: 'white',
    fontWeight: '800',
    fontStyle: 'italic',
    justifyContent: 'flex-start',
  },

  text: {
    padding: 7,
    fontSize: 18,
    color: 'white',
    fontWeight: '600',
    marginTop: 10,
  },

  complete: {
    padding: 5,
    backgroundColor: '#7D3C98',
    marginBottom: 20,
    borderRadius: 25,
    // alignItems: 'center',
    height: 200,
  },

  noComplete: {
    padding: 5,
    backgroundColor: '#F06292',
    marginBottom: 20,
    borderRadius: 25,
    height: 200,
  },
});
