import React, {useState} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import styles from './styles';

interface CustomCardsProps {
  title: string;
  description: string;
}

export const CustomCard = ({
  title,
  description,
}: CustomCardsProps): JSX.Element => {
  const [state, setState] = useState<boolean>(false);
  return (
    <TouchableOpacity onPress={() => setState(!state)}>
      <View style={styles.view}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.text}>{description}</Text>
        <Text style={styles.text}>{state ? 'True :D' : 'False :('}</Text>
      </View>
    </TouchableOpacity>
  );
};
