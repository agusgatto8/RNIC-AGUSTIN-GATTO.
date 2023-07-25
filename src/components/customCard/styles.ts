import styled from 'styled-components/native';

export const CardContainer = styled.View`
  background-color: white;
  padding: 5px;
  margin-bottom: 20px;
  border-radius: 25px;
  border: ${(props: {state: boolean}) =>
    props.state ? 'green 5px' : 'red 5px'};
`;

export const TitleCard = styled.Text`
  padding: 5px;
  font-size: 26px;
  color: black;
  font-weight: 800;
  font-style: italic;
`;

export const TextDescription = styled.Text`
  padding: 7px;
  font-size: 18px;
  color: black;
  font-weight: 600;
  margin-top: 10px;
`;

export const TextState = styled.Text`
  padding: 7px;
  font-size: 18px;
  color: white;
  font-weight: 600;
  margin-top: 10px;
`;
export const ContainerImage = styled.View`
  align-items: center;
  padding: 15px;
`;

export const Image = styled.Image`
  width: 200px;
  height: 200px;
`;
export const ContainerButtons = styled.View`
  flex-direction: row;
  justify-content: flex-end;
`;

export const CheckerContainer = styled.TouchableOpacity`
  padding: 10px;
`;

export const EditBtnContainer = styled.TouchableOpacity`
  padding: 10px;
`;

export const DeleteBtnContainer = styled.TouchableOpacity`
  padding: 10px;
`;
