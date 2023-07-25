import React, {useState} from 'react';
import {TouchableOpacity} from 'react-native';
import {
  CardContainer,
  ContainerImage,
  Image,
  TextDescription,
  TextState,
  TitleCard,
} from './styles';

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
    <TouchableOpacity onPress={() => setState(!state)}>
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
        <TextState>{state ? 'Complete' : 'No complete'}</TextState>
      </CardContainer>
    </TouchableOpacity>
  );
};
