import { useGetDevice } from 'hooks/useGetDevice';
import React from 'react';
import { ArrowButton } from 'styled/elements/shared/arrowButton/ArrowButton';
import { Wrapper } from 'styled/elements/shared/beta/Wrapper';
import { MainHeader } from 'styled/elements/shared/MainHeader';
import { getHeroGraphicUrl } from 'utils/imageUrlUtilities';
import { Arrow } from 'styled/elements/shared/arrowButton/Arrow';
import { WhiteColor } from 'styled/base/Colors';
import { Shadow } from 'styled/elements/shared/Shadow';
import { ContentContainer } from 'styled/elements/shared/beta/ContentContainer';

export const Beta = () => (
  <Wrapper url={getHeroGraphicUrl('beta', useGetDevice())}>
    <Shadow />
    <ContentContainer>
      <MainHeader color={WhiteColor}>
        We're in beta. Get your invite today!
      </MainHeader>
      <ArrowButton
        color={WhiteColor}
        marginTop="24px"
        justify="flex-end"
        width={'125%'}
        isDecorated
      >
        Get an invite <Arrow color="white" marginLeft="16px" />
      </ArrowButton>
    </ContentContainer>
  </Wrapper>
);
