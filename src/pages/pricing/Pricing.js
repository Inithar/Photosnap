import React from 'react';
import { Card } from 'styled/components/pricing/Card';
import { Beta } from 'styled/components/shared/Beta';
import { InfoBox } from 'styled/components/shared/InfoBox';
import { Wrapper } from 'styled/elements/pricing/Wrapper';
import { PricingCardsContainer } from 'styled/elements/pricing/PricingCardsContainer';
import { CompareTable } from 'styled/components/pricing/CompareTable';
import pricing from '../../data/pricing.json';
import { PayOffPeriod } from 'styled/components/pricing/PayOffPeriod';
import { PricingContext } from 'context/PricingContext';

export const Pricing = () => {
  const { infoBoxData, pricingCards } = pricing;

  return (
    <PricingContext>
      <InfoBox {...infoBoxData} />
      <Wrapper>
        <PayOffPeriod />
        <PricingCardsContainer>
          {pricingCards.map((card, index) => (
            <Card {...card} key={index} />
          ))}
        </PricingCardsContainer>
        <CompareTable />
      </Wrapper>
      <Beta />
    </PricingContext>
  );
};
