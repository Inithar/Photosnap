import React from 'react';
import { StoryCard } from 'styled/components/shared/StoryCard';
import { StoryCardsContainer } from 'styled/elements/shared/StoryCardsContainer';
import { HeroGraphic } from 'styled/components/stories/HeroGraphic';
import stories from '../../data/stories.json';

export const Stories = () => (
  <>
    <HeroGraphic />
    <StoryCardsContainer>
      {stories.storyCards.map((storyCard) => (
        <StoryCard {...storyCard} key={storyCard.id} isDateShown />
      ))}
    </StoryCardsContainer>
  </>
);
