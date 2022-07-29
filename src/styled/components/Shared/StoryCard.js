import React from 'react';
import { Arrow } from 'styled/elements/shared/arrowButton/Arrow';
import { ArrowButton } from 'styled/elements/shared/arrowButton/ArrowButton';
import { Separator } from 'styled/elements/shared/Separator';
import { Author } from 'styled/elements/shared/storyCard/Author';
import { CardContentContainer } from 'styled/elements/shared/storyCard/CardContentContainer';
import { Shadow } from 'styled/elements/shared/storyCard/Shadow';
import { Title } from 'styled/elements/shared/storyCard/Title';
import { Wrapper } from 'styled/elements/shared/storyCard/Wrapper';
import { VeryLightWhiteColor, WhiteColor } from 'styled/base/Colors';
import { Date } from 'styled/elements/shared/storyCard/Date';
import { useGetDevice } from 'hooks/useGetDevice';
import { getStoryPhotoUrl } from 'utils/imageUrlUtilities';

export const StoryCard = ({ url, title, author, isDateShown, date }) => {
  const device = useGetDevice();
  const contentWidth =
    device === 'mobile' ? 'calc(100% - 64px)' : 'calc(100% - 80px)';

  return (
    <Wrapper url={getStoryPhotoUrl(url, device)}>
      <Shadow />
      <CardContentContainer>
        {isDateShown ? <Date>{date}</Date> : null}
        <Title>{title}</Title>
        <Author>by {author}</Author>
        <Separator color={VeryLightWhiteColor} width={contentWidth} />
        <ArrowButton color={WhiteColor} width={contentWidth}>
          Read stroy <Arrow color="white" marginLeft="auto" />
        </ArrowButton>
      </CardContentContainer>
    </Wrapper>
  );
};
