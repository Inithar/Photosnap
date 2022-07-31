import React from 'react';
import { FeatureContainer } from 'styled/elements/pricing/compare/FeatureContainer';
import { Header } from 'styled/elements/pricing/compare/Header';
import { OptionContainer } from 'styled/elements/pricing/compare/OptionContainer';
import { Type } from 'styled/elements/pricing/compare/Type';
import { TypesContainer } from 'styled/elements/pricing/compare/TypesContainer';
import { Icon } from 'styled/elements/shared/Icon';
import checkIcon from 'assets/shared/desktop/check.svg';
import { Separator } from 'styled/elements/shared/Separator';
import { LightGrayColor } from 'styled/base/Colors';
import { useGetDevice } from 'hooks/useGetDevice';

export const CompareTableRow = ({ featureName, basic, pro, business }) => {
  const isMobile = useGetDevice() === 'mobile' ? true : false;

  return (
    <>
      <FeatureContainer>
        <Header marginLeft="24px">{featureName}</Header>
        <TypesContainer>
          <OptionContainer>
            {isMobile ? <Type>Basic</Type> : null}
            {basic ? <Icon src={checkIcon} /> : null}
          </OptionContainer>
          <OptionContainer>
            {isMobile ? <Type>Pro</Type> : null}
            {pro ? <Icon src={checkIcon} /> : null}
          </OptionContainer>
          <OptionContainer>
            {isMobile ? <Type>Business</Type> : null}
            {business ? <Icon src={checkIcon} /> : null}
          </OptionContainer>
        </TypesContainer>
      </FeatureContainer>
      <Separator color={LightGrayColor} />
    </>
  );
};
