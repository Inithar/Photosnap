import React from 'react';
import { Header } from 'styled/elements/shared/benefit/Header';
import { Wrapper } from 'styled/elements/shared/benefit/Wrapper';
import { Icon } from 'styled/elements/shared/Icon';
import { Text } from 'styled/elements/shared/Text';
import { LightBlackColor } from 'styled/base/Colors';
import { ContentContainer } from 'styled/elements/shared/benefit/ContentContainer';
import { IconContainer } from 'styled/elements/shared/benefit/IconContainer';

export const Benefit = ({ src, header, description, page }) => {
  return (
    <Wrapper page={page}>
      <IconContainer>
        <Icon src={src} />
      </IconContainer>
      <ContentContainer>
        <Header>{header}</Header>
        <Text color={LightBlackColor} align={'center'}>
          {description}
        </Text>
      </ContentContainer>
    </Wrapper>
  );
};
