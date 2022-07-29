import React from 'react';
import { storyCards } from './StoriesData';
import { StoryCard } from 'styled/components/shared/StoryCard';
import { StoryCardsContainer } from 'styled/elements/shared/StoryCardsContainer';
import { HeroGraphic } from 'styled/components/stories/HeroGraphic';

export const Stories = () => (
  <>
    <HeroGraphic />
    <StoryCardsContainer>
      {storyCards.map((storyCard) => (
        <StoryCard {...storyCard} key={storyCard.id} isDateShown />
      ))}
    </StoryCardsContainer>
  </>
);
