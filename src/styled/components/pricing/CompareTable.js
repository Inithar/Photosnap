import React from 'react';
import { CompareTableRow } from './CompareTableRow';
import { Separator } from 'styled/elements/shared/Separator';
import { BlackColor } from 'styled/base/Colors';
import { FeaturesContainer } from 'styled/elements/pricing/FeaturesContainer';
import { CompareTableHead } from './CompareTableHead';
import { MainHeader } from 'styled/elements/shared/MainHeader';
import { useGetDevice } from 'hooks/useGetDevice';
import pricing from '../../../data/pricing.json';

export const CompareTable = () => (
  <>
    <FeaturesContainer>
      {useGetDevice() === 'mobile' ? null : (
        <MainHeader align="center">Compare</MainHeader>
      )}
      <CompareTableHead />
      <Separator color={BlackColor} marginTop="23px" marginBottom="23px" />
      {pricing.comparedFeatures.map((feature, index) => (
        <CompareTableRow {...feature} key={index} />
      ))}
    </FeaturesContainer>
  </>
);
