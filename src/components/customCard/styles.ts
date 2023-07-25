import styled from 'styled-components/native';

export const CardContainer = styled.View`
  background-color: ${(props: {state: boolean}) =>
    props.state ? '#7D3C98' : '#F06292'};
  padding: 5px;
  margin-bottom: 20px;
  border-radius: 25px;
`;

export const TitleCard = styled.Text`
  padding: 5px;
  font-size: 26px;
  color: white;
  font-weight: 800;
  font-style: italic;
`;

export const TextDescription = styled.Text`
  padding: 7px;
  font-size: 18px;
  color: white;
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
