import styled from 'styled-components/native';

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  background-color: lightgray;
`;

export const List = styled.FlatList`
  margin-top: 2px;
  padding: 24px;
`;

export const ListEmpty = styled.Text`
  font-size: 28px;
  font-weight: 600;
  color: black;
`;
