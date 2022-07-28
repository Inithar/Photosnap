import React from 'react';
import { storyCards } from './StoriesData';
import { StoryCard } from 'styled/components/shared/StoryCard';

export const Stories = () => (
  <>
    {storyCards.map((storyCard) => (
      <StoryCard {...storyCard} key={storyCard.id} isDateShown />
    ))}
  </>
);
