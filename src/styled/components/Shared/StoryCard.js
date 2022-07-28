import React from 'react';
import { Arrow } from 'styled/elements/Shared/ArrowButton/Arrow';
import { ArrowButton } from 'styled/elements/Shared/ArrowButton/ArrowButton';
import { Separator } from 'styled/elements/Shared/Separator';
import { Author } from 'styled/elements/Shared/StoryCard/Author';
import { CardContentContainer } from 'styled/elements/Shared/StoryCard/CardContentContainer';
import { Shadow } from 'styled/elements/Shared/StoryCard/Shadow';
import { Title } from 'styled/elements/Shared/StoryCard/Title';
import { Wrapper } from 'styled/elements/Shared/StoryCard/Wrapper';
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
