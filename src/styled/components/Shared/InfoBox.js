import React from 'react';
import { useGetDevice } from 'hooks/useGetDevice';
import { Wrapper } from 'styled/elements/Shared/InfoBox/Wrapper';
import { Image } from 'styled/elements/Shared/Image';
import { getUrlFromHomePage } from 'utils/imageUrlUtilities';

export const InfoBox = () => {
  return (
    <Wrapper>
      <Image
        src={getUrlFromHomePage('beautifulStories', useGetDevice())}
        width={'100%'}
      />
    </Wrapper>
  );
};
