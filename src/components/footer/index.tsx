import React from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';

// interface FormProps {
//   title: string;
//   description: string;
// }

export const Footer = (): JSX.Element => {
  return (
    <View style={styles.footer}>
      <TextInput placeholder="Title" style={styles.inputs}></TextInput>
      <TextInput placeholder="Description" style={styles.inputs}></TextInput>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.textButton}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};
