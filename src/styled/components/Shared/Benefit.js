import React from 'react';
import { Header } from 'styled/elements/shared/benefit/Header';
import { Wrapper } from 'styled/elements/shared/benefit/Wrapper';
import { Icon } from 'styled/elements/shared/Icon';
import { Text } from 'styled/elements/shared/Text';
import { LightBlackColor } from 'styled/base/Colors';
import { ContentContainer } from 'styled/elements/shared/benefit/ContentContainer';

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
