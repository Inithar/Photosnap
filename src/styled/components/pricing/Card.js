import React, { useContext } from 'react';
import { PricingState } from 'context/PricingContext';
import { CardWrapper } from 'styled/elements/pricing/card/CardWrapper';
import { Container } from 'styled/elements/pricing/card/Container';
import { DescriptionContainer } from 'styled/elements/pricing/card/DescriptionContainer';
import { Every } from 'styled/elements/pricing/card/Every';
import { Price } from 'styled/elements/pricing/card/Price';
import { PriceContainer } from 'styled/elements/pricing/card/PriceContainer';
import { PricingType } from 'styled/elements/pricing/card/PricingType';
import { Button } from 'styled/elements/shared/Button';
import { Text } from 'styled/elements/shared/Text';
import { LightBlackColor, LightWhiteColor } from 'styled/base/Colors';
import { useGetDevice } from 'hooks/useGetDevice';

export const Card = ({
  type,
  description,
  pricePerMonth,
  pricePerYear,
  isDark,
}) => {
  const { period } = useContext(PricingState);

  return (
    <CardWrapper isDark={isDark}>
      <Container>
        <DescriptionContainer>
          <PricingType isDark={isDark}>{type}</PricingType>
          <Text color={isDark ? LightWhiteColor : LightBlackColor}>
            {description}
          </Text>
        </DescriptionContainer>
        <PriceContainer>
          <Price isDark={isDark}>
            ${period === 'monthly' ? pricePerMonth : pricePerYear}
          </Price>
          <Every isDark={isDark}>
            {period === 'monthly' ? 'per month' : 'per year'}
          </Every>
        </PriceContainer>
      </Container>
      <Button
        isDark={!isDark}
        width={useGetDevice() === 'mobile' ? '240px' : '270px'}
        height="40px"
        fontSize="12px"
      >
        Pick plan
      </Button>
    </CardWrapper>
  );
};
