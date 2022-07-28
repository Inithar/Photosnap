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

export const StoryCard = ({ url, title, author }) => {
  return (
    <Wrapper url={url}>
      <Shadow />
      <CardContentContainer>
        <Title>{title}</Title>
        <Author>by {author}</Author>
        <Separator color={VeryLightWhiteColor} width="calc(100% - 64px)" />
        <ArrowButton color={WhiteColor} width="calc(100% - 64px)">
          Read stroy <Arrow color="white" marginLeft="auto" />
        </ArrowButton>
      </CardContentContainer>
    </Wrapper>
  );
};
