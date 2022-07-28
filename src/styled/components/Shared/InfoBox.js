import React from 'react';
import { useGetDevice } from 'hooks/useGetDevice';
import { Wrapper } from 'styled/elements/Shared/InfoBox/Wrapper';
import { Image } from 'styled/elements/Shared/Image';
import { getUrlFromHomePage } from 'utils/imageUrlUtilities';
import { ContentContainer } from 'styled/elements/Shared/InfoBox/ContentContainer';
import { MainHeader } from 'styled/elements/Shared/MainHeader';
import {
  BlackColor,
  WhiteColor,
  LightBlackColor,
  LightWhiteColor,
} from 'styled/base/Colors';
import { Text } from 'styled/elements/Shared/Text';
import { ArrowButton } from 'styled/elements/Shared/ArrowButton/ArrowButton';
import { Arrow } from 'styled/elements/Shared/ArrowButton/Arrow';

export const InfoBox = ({
  isBlack,
  src,
  alt,
  header,
  description,
  buttonText,
}) => {
  return (
    <Wrapper>
      <Image src={getUrlFromHomePage(src, useGetDevice())} alt={alt} />
      <ContentContainer color={isBlack ? BlackColor : WhiteColor}>
        <MainHeader color={isBlack ? WhiteColor : BlackColor}>
          {header}
        </MainHeader>
        <Text align="left" color={isBlack ? LightWhiteColor : LightBlackColor}>
          {description}
        </Text>
        <ArrowButton color={isBlack ? WhiteColor : BlackColor}>
          {buttonText}
          <Arrow color={isBlack ? 'white' : 'black'} marginLeft="18px" />
        </ArrowButton>
      </ContentContainer>
    </Wrapper>
  );
};
