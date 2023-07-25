import React, {useRef, useState} from 'react';
import {TextInput, KeyboardAvoidingView, Platform} from 'react-native';
import {ButtonSubmit, FooterContainer, Input, TextButton} from './styles';
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
      <FooterContainer>
        <Input
          ref={inputTitle}
          onSubmitEditing={handleInputSubmit}
          onChangeText={setTitle}
          value={title}
          placeholder="Title"
        />
        <Input
          ref={inputDescription}
          onChangeText={setDescription}
          value={description}
          placeholder="Description"
        />
        <ButtonSubmit onPress={() => executeHandle()}>
          <TextButton>Save</TextButton>
        </ButtonSubmit>
      </FooterContainer>
    </KeyboardAvoidingView>
  );
};
