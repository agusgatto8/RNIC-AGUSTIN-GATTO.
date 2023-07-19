import React, {useRef, useState} from 'react';
import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import styles from './styles';
import {cardInterface} from '../../types/card';

interface FooterProps {
  handleSubmit: (formData: cardInterface) => void;
}

export const Footer = ({handleSubmit}: FooterProps): JSX.Element => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const inputTitle = useRef<TextInput | null>(null);
  const inputDescription = useRef<TextInput | null>(null);

  const handleInputSubmit = () => {
    inputDescription.current!.focus();
  };

  const executeHandle = () => {
    handleSubmit({title, description, state: false});
    setTitle('');
    setDescription('');
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.footer}>
        <TextInput
          ref={inputTitle}
          onSubmitEditing={handleInputSubmit}
          onChangeText={setTitle}
          value={title}
          placeholder="Title"
          style={styles.inputs}
        />
        <TextInput
          ref={inputDescription}
          onChangeText={setDescription}
          value={description}
          placeholder="Description"
          style={styles.inputs}
        />
        <TouchableOpacity onPress={() => executeHandle()} style={styles.button}>
          <Text style={styles.textButton}>Save</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
};
