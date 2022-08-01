import React from 'react';
import { MainHeader } from 'styled/elements/shared/MainHeader';
import { Author } from 'styled/elements/stories/Author';
import { ContentContainer } from 'styled/elements/stories/HeroGraphic/ContentContainer';
import { Image } from 'styled/elements/stories/HeroGraphic/Image';
import { StoryInfoContainer } from 'styled/elements/stories/HeroGraphic/StoryInfoContainer';
import { Wrapper } from 'styled/elements/stories/HeroGraphic/Wrapper';
import { StoryDate } from 'styled/elements/stories/StoryDate';
import { Text } from 'styled/elements/shared/Text';
import { ArrowButton } from 'styled/elements/shared/arrowButton/ArrowButton';
import { Arrow } from 'styled/elements/shared/arrowButton/Arrow';
import { getHeroGraphicUrl } from 'utils/imageUrlUtilities';
import { useGetDevice } from 'hooks/useGetDevice';
import { ImageContainer } from 'styled/elements/stories/HeroGraphic/ImageContainer';
import { Shadow } from 'styled/elements/shared/Shadow';
import { WhiteColor, LightWhiteColor } from 'styled/base/Colors';
import { SmallHeader } from 'styled/elements/stories/HeroGraphic/SmallHeader';

export const HeroGraphic = () => (
  <Wrapper>
    <ImageContainer>
      <Shadow />
      <Image
        src={getHeroGraphicUrl('moonOfAppalachia', useGetDevice())}
        alt="landscape of beautiful mountains"
      />
    </ImageContainer>
    <ContentContainer>
      <SmallHeader>Last month's featured story</SmallHeader>
      <MainHeader color={WhiteColor}>Hazy full moon of appalachia.</MainHeader>
      <StoryInfoContainer>
        <StoryDate color={LightWhiteColor} marginRight="9px">
          March 2nd 2020
        </StoryDate>
        <Author>by John Appleseed</Author>
      </StoryInfoContainer>
      <Text color={LightWhiteColor}>
        The dissected plateau area, while not actually made up of geological
        mountains, is popularly called "mountains," especially in eastern
        Kentucky and West Virginia, and while the ridges are not high, the
        terrain is extremely rugged.
      </Text>
      <ArrowButton color={WhiteColor} marginTop="24px" isDecorated>
        Read the story <Arrow color="white" marginLeft="16px" />
      </ArrowButton>
    </ContentContainer>
  </Wrapper>
);
