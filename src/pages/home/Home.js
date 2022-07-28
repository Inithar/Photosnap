import React from 'react';
import { Benefit } from 'styled/components/shared/Benefit';
import { InfoBox } from 'styled/components/shared/InfoBox';
import { StoryCard } from 'styled/components/shared/StoryCard';
import { BenefitsContainer } from 'styled/elements/home/BenefitsContainer';
import { infoBoxesData, storyCards, benefits } from './HomeData';

export const Home = () => {
  return (
    <>
      {infoBoxesData.map((infoBoxData, index) => (
        <InfoBox {...infoBoxData} key={index} />
      ))}
      {storyCards.map((storyCard) => (
        <StoryCard {...storyCard} key={storyCard.id} />
      ))}
      <BenefitsContainer>
        {benefits.map((benefit) => (
          <Benefit {...benefit} key={benefit.id} />
        ))}
      </BenefitsContainer>
    </>
  );
};
