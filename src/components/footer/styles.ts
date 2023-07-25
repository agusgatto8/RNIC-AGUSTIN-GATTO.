import styled from 'styled-components/native';

export const FooterContainer = styled.View`
  align-items: center;
  border-top-width: 1px;
  border-color: grey;
  background-color: #d1c4e9;
  border-radius: 20px 20px 0px 0px;
  padding-top: 20px;
`;

export const Input = styled.TextInput`
  border-width: 1px;
  background-color: white;
  border-radius: 10px;
  font-size: 18px;
  font-weight: 600;
  margin-bottom: 10px;
  padding: 7px;
  width: 80%;
`;

export const ButtonSubmit = styled.TouchableOpacity`
  align-items: center;
  border-width: 1px;
  background-color: purple;
  border-radius: 10px;
  margin-bottom: 10px;
  padding: 7px;
  width: 60%;
`;

export const TextButton = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: white;
`;
