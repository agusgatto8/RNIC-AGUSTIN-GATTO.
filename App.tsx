import React, {useState} from 'react';
import {FlatList, SafeAreaView, StyleSheet} from 'react-native';

import {CustomCard} from './src/components/customCard';
import {Footer} from './src/components/footer';
import {cardInterface} from './src/types/card';

function App(): JSX.Element {
  // const cardsNumbers = 15;
  const [cards, setCards] = useState<cardInterface[]>([]);
  return (
    <SafeAreaView style={styles.sectionContainer}>
      <FlatList
        style={styles.flatList}
        data={cards}
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
    marginTop: 2,
  },
});

export default App;
