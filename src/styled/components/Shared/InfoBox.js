import React from 'react';
import { useGetDevice } from 'hooks/useGetDevice';
import { Wrapper } from 'styled/elements/shared/infoBox/Wrapper';
import { Image } from 'styled/elements/shared/Image';
import { getInfoCardPhotoUrl } from 'utils/imageUrlUtilities';
import { ContentContainer } from 'styled/elements/shared/infoBox/ContentContainer';
import { MainHeader } from 'styled/elements/shared/MainHeader';
import { Text } from 'styled/elements/shared/Text';
import { ArrowButton } from 'styled/elements/shared/arrowButton/ArrowButton';
import { Arrow } from 'styled/elements/shared/arrowButton/Arrow';
import {
  BlackColor,
  WhiteColor,
  LightBlackColor,
  LightWhiteColor,
} from 'styled/base/Colors';
import { DecorationLine } from 'styled/elements/home/DecorationLine';

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
  isDecorated,
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
        {isButtonShown && (
          <ArrowButton color={isBlack ? WhiteColor : BlackColor} isDecorated>
            {buttonText}
            <Arrow color={isBlack ? 'white' : 'black'} marginLeft="18px" />
          </ArrowButton>
        )}
        {isDecorated && <DecorationLine />}
      </ContentContainer>
    </Wrapper>
  );
};
