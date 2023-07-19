import React, {useEffect, useState} from 'react';
import {
  AppState,
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  StatusBar,
  Platform,
} from 'react-native';

import {CustomCard} from './src/components/customCard';
import {Footer} from './src/components/footer';
import {cardInterface} from './src/types/card';
import {tasks} from './src/constants/tasks';

function App(): JSX.Element {
  const card = tasks;

  const [appState, setAppState] = useState('');
  const [cards, setCards] = useState<cardInterface[]>([card]);

  const emptyList = <Text style={styles.emptyList}>No data here!</Text>;
  const android = Platform.OS === 'android';

  useEffect(() => {
    const clearList = AppState.addEventListener('change', nextAppState => {
      setAppState(nextAppState);
      if (appState === 'background') {
        setCards([]);
      }
    });
    return () => {
      clearList.remove();
    };
  }, [appState, card]);

  return (
    <SafeAreaView style={styles.sectionContainer}>
      <StatusBar barStyle={android ? 'light-content' : 'dark-content'} />
      <FlatList
        style={styles.flatList}
        data={cards}
        ListEmptyComponent={emptyList}
        renderItem={({item, index}) => (
          <CustomCard
            title={item.title}
            description={item.description}
            titleNumber={index}
          />
        )}
      />
      <Footer handleSubmit={formData => setCards([...cards, formData])} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    backgroundColor: '#EDE7F6',
    flex: 1,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  flatList: {
    paddingHorizontal: 24,
    marginTop: 2,
  },
  emptyList: {
    color: 'black',
    fontSize: 24,
    fontWeight: '600',
    textAlign: 'center',
  },
});

export default App;
