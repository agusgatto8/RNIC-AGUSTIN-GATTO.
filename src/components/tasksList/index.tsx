import React, {useEffect, useState} from 'react';
import {AppState, StatusBar, Platform} from 'react-native';
import {List, ListEmpty, Wrapper} from './styles';
import {CustomCard} from '../customCard';
import {Footer} from '../footer';
import {cardInterface} from '../../types/card';
import {tasks} from '../../constants/tasks';

export const Tasks = (): JSX.Element => {
  const card = tasks;

  const [appState, setAppState] = useState('');
  const [cards, setCards] = useState<cardInterface[]>(card);

  const emptyList = <ListEmpty>No data here!</ListEmpty>;
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
    <Wrapper>
      <StatusBar barStyle={android ? 'light-content' : 'dark-content'} />
      <List
        data={cards}
        ListEmptyComponent={emptyList}
        renderItem={({item, index}: any) => (
          <CustomCard
            title={item.title}
            description={item.description}
            titleNumber={index}
            image={item.image}
          />
        )}
      />
      <Footer handleSubmit={formData => setCards([...cards, formData])} />
    </Wrapper>
  );
};
