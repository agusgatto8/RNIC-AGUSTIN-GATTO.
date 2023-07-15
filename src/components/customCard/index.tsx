import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './styles';

interface CustomCardsProps {
  title: string;
  description: string;
  titleNumber: number;
}

export const CustomCard = ({
  title,
  description,
  titleNumber,
}: CustomCardsProps): JSX.Element => {
  const [state, setState] = useState<boolean>(false);
  return (
    <TouchableOpacity onPress={() => setState(!state)}>
      <View style={state ? styles.complete : styles.noComplete}>
        <Text style={styles.title}>
          {title} {titleNumber}
        </Text>
        <Text style={styles.text}>{description}</Text>
        <Text style={styles.text}>{state ? 'Complete' : 'No complete'}</Text>
      </View>
    </TouchableOpacity>
  );
};
