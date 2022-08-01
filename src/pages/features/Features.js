import React from 'react';
import { InfoBox } from 'styled/components/shared/InfoBox';
import { BenefitsContainer } from 'styled/elements/features/BenefitsContainer';
import { Benefit } from 'styled/components/shared/Benefit';
import { Beta } from 'styled/components/shared/Beta';
import features from '../../data/features.json';

export const Features = () => {
  const { infoBoxData, benefits } = features;

  return (
    <>
      <InfoBox {...infoBoxData} />
      <BenefitsContainer>
        {benefits.map((benefit) => (
          <Benefit {...benefit} key={benefit.id} page="features" />
        ))}
      </BenefitsContainer>
      <Beta />
    </>
  );
};
