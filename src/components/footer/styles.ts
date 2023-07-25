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
  justify-content: center;
  flex-direction: row;
  border-width: 1px;
  background-color: blueviolet;
  border-radius: 10px;
  margin-bottom: 15px;
  padding: 7px;
  width: 60%;
`;

export const TextButton = styled.Text`
  font-size: 20px;
  font-weight: 600;
  color: white;
`;

export const CheckContainer = styled.View`
  padding: 5px 0px 0px 5px;
`;
