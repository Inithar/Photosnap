import { PricingState } from 'context/PricingContext';
import React, { useContext } from 'react';
import { Period } from 'styled/elements/pricing/PayOffPeriod/Period';
import { ToggleButton } from 'styled/elements/pricing/PayOffPeriod/ToggleButton';
import { Wrapper } from 'styled/elements/pricing/PayOffPeriod/Wrapper';
import { BlackColor, LightBlackColor } from 'styled/base/Colors';

export const PayOffPeriod = () => {
  const { period, toggleSetPeriod } = useContext(PricingState);

  return (
    <Wrapper>
      <Period
        align="start"
        color={period === 'monthly' ? BlackColor : LightBlackColor}
      >
        Monthly
      </Period>
      <ToggleButton type="checkbox" onChange={toggleSetPeriod} />
      <Period
        align="end"
        period={period}
        color={period === 'yearly' ? BlackColor : LightBlackColor}
      >
        Yearly
      </Period>
    </Wrapper>
  );
};
