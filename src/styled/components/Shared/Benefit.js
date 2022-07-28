import React from 'react';
import { Header } from 'styled/elements/Shared/Benefit/Header';
import { Wrapper } from 'styled/elements/Shared/Benefit/Wrapper';
import { Icon } from 'styled/elements/Shared/Icon';
import { Text } from 'styled/elements/Shared/Text';
import { LightBlackColor } from 'styled/base/Colors';
import { ContentContainer } from 'styled/elements/Shared/Benefit/ContentContainer';

export const Benefit = ({ src, header, description }) => {
  return (
    <Wrapper>
      <Icon src={src} />
      <ContentContainer>
        <Header>{header}</Header>
        <Text color={LightBlackColor} align={'center'}>
          {description}
        </Text>
      </ContentContainer>
    </Wrapper>
  );
};
