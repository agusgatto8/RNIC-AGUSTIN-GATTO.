import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {
  CardContainer,
  CheckerContainer,
  ContainerButtons,
  ContainerImage,
  DeleteBtnContainer,
  EditBtnContainer,
  Image,
  TextDescription,
  TextState,
  TitleCard,
} from './styles';
import Checker from '../../assets/icons/check-circle.svg';
import NoChecker from '../../assets/icons/x-circle.svg';
import EditButton from '../../assets/icons/edit.svg';
import DeleteButton from '../../assets/icons/trash.svg';

interface CustomCardsProps {
  title: string;
  description: string;
  titleNumber: number;
  image: string;
}
export const CustomCard = ({
  title,
  description,
  titleNumber,
  image,
}: CustomCardsProps): JSX.Element => {
  const [state, setState] = useState<boolean>(false);
  return (
    <TouchableOpacity>
      <CardContainer state={state}>
        <TitleCard>
          {title} {titleNumber}
        </TitleCard>
        {image ? (
          <ContainerImage>
            <Image alt={'image_task'} source={image} />
          </ContainerImage>
        ) : null}
        <TextDescription numberOfLines={3}>{description}</TextDescription>
        <ContainerButtons>
          <EditBtnContainer>
            <EditButton
              fill={'white'}
              stroke={'black'}
              width={35}
              height={35}
            />
          </EditBtnContainer>
          <DeleteBtnContainer>
            <DeleteButton
              fill={'white'}
              stroke={'black'}
              width={35}
              height={35}
            />
          </DeleteBtnContainer>
          <CheckerContainer onPress={() => setState(!state)}>
            {state ? (
              <Checker fill={'white'} stroke={'green'} width={35} height={35} />
            ) : (
              <NoChecker fill={'white'} stroke={'red'} width={35} height={35} />
            )}
          </CheckerContainer>
        </ContainerButtons>
      </CardContainer>
    </TouchableOpacity>
  );
};
