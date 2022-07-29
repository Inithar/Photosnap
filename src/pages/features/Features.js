import React from 'react';
import { InfoBox } from 'styled/components/shared/InfoBox';
import { infoBoxData } from './FeaturesData';
import { BenefitsContainer } from 'styled/elements/features/BenefitsContainer';
import { Benefit } from 'styled/components/shared/Benefit';
import { benefits } from './FeaturesData';
import { Beta } from 'styled/components/shared/Beta';

export const Features = () => {
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
