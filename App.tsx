import React from 'react';
// import type {PropsWithChildren} from 'react';
import {
  FlatList,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
} from 'react-native';

import {CustomCard} from './src/components/customCard';
import {Footer} from './src/components/footer';

function App(): JSX.Element {
  const cardsNumbers = 50;
  const cards = [...Array(cardsNumbers).fill('')];
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <FlatList
        style={styles.flatList}
        data={cards}
        renderItem={() => (
          <CustomCard
            title="Problematica 3"
            description="Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem Lorem"
          />
        )}
      />
      <Footer />
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  sectionContainer: {
    // paddingHorizontal: 24,
    backgroundColor: 'lavender',
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
  },
});

export default App;
