import React, {useState} from 'react';
import {Text, View, TextInput, TouchableOpacity} from 'react-native';
import styles from './styles';
import {cardInterface} from '../../types/card';

interface FooterProps {
  handleSubmit: (formData: cardInterface) => void;
}

export const Footer = ({handleSubmit}: FooterProps): JSX.Element => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const executeHandle = () => {
    handleSubmit({title, description, state: false});
    setTitle('');
    setDescription('');
  };

  return (
    <View style={styles.footer}>
      <TextInput
        onChangeText={setTitle}
        value={title}
        placeholder="Title"
        style={styles.inputs}
      />
      <TextInput
        onChangeText={setDescription}
        value={description}
        placeholder="Description"
        style={styles.inputs}
      />
      <TouchableOpacity onPress={() => executeHandle()} style={styles.button}>
        <Text style={styles.textButton}>Save</Text>
      </TouchableOpacity>
    </View>
  );
};
