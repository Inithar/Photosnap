import React from 'react';
import { useGetDevice } from 'hooks/useGetDevice';
import { Wrapper } from 'styled/elements/shared/infoBox/Wrapper';
import { Image } from 'styled/elements/shared/Image';
import { getInfoCardPhotoUrl } from 'utils/imageUrlUtilities';
import { ContentContainer } from 'styled/elements/shared/infoBox/ContentContainer';
import { MainHeader } from 'styled/elements/shared/MainHeader';
import {
  BlackColor,
  WhiteColor,
  LightBlackColor,
  LightWhiteColor,
} from 'styled/base/Colors';
import { Text } from 'styled/elements/shared/Text';
import { ArrowButton } from 'styled/elements/shared/arrowButton/ArrowButton';
import { Arrow } from 'styled/elements/shared/arrowButton/Arrow';

export const InfoBox = ({
  isBlack,
  src,
  alt,
  header,
  description,
  buttonText,
  isRight,
  isButtonShown,
  minHeight,
}) => {
  return (
    <Wrapper>
      <Image
        src={getInfoCardPhotoUrl(src, useGetDevice())}
        alt={alt}
        isRight={isRight}
      />
      <ContentContainer
        color={isBlack ? BlackColor : WhiteColor}
        minHeight={minHeight}
      >
        <MainHeader color={isBlack ? WhiteColor : BlackColor}>
          {header}
        </MainHeader>
        <Text align="left" color={isBlack ? LightWhiteColor : LightBlackColor}>
          {description}
        </Text>
        {isButtonShown ? (
          <ArrowButton color={isBlack ? WhiteColor : BlackColor}>
            {buttonText}
            <Arrow color={isBlack ? 'white' : 'black'} marginLeft="18px" />
          </ArrowButton>
        ) : null}
      </ContentContainer>
    </Wrapper>
  );
};
