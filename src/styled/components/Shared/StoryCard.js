import React from 'react';
import { Arrow } from 'styled/elements/shared/arrowButton/Arrow';
import { ArrowButton } from 'styled/elements/shared/arrowButton/ArrowButton';
import { Separator } from 'styled/elements/shared/Separator';
import { Author } from 'styled/elements/stories/Author';
import { CardContentContainer } from 'styled/elements/shared/storyCard/CardContentContainer';
import { Shadow } from 'styled/elements/shared/Shadow';
import { Title } from 'styled/elements/shared/storyCard/Title';
import { Wrapper } from 'styled/elements/shared/storyCard/Wrapper';
import { VeryLightWhiteColor, WhiteColor } from 'styled/base/Colors';
import { StoryDate } from 'styled/elements/stories/StoryDate';
import { useGetDevice } from 'hooks/useGetDevice';
import { getStoryPhotoUrl } from 'utils/imageUrlUtilities';
import { LightGrayColor } from 'styled/base/Colors';

export const StoryCard = ({ url, title, author, isDateShown, date }) => {
  const device = useGetDevice();
  const contentWidth =
    device === 'mobile' ? 'calc(100% - 64px)' : 'calc(100% - 80px)';

  return (
    <Wrapper url={getStoryPhotoUrl(url, device)}>
      <Shadow />
      <CardContentContainer>
        {isDateShown ? (
          <StoryDate marginBottom="4px" color={LightGrayColor}>
            {date}
          </StoryDate>
        ) : null}
        <Title>{title}</Title>
        <Author marginTop="4px" marginBottom="16px">
          by {author}
        </Author>
        <Separator color={VeryLightWhiteColor} width={contentWidth} />
        <ArrowButton color={WhiteColor} width={contentWidth}>
          Read stroy <Arrow color="white" marginLeft="auto" />
        </ArrowButton>
      </CardContentContainer>
    </Wrapper>
  );
};
