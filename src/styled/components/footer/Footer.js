import React from 'react';
import { LinksContainer } from 'styled/elements/footer/LinksContainer';
import { SocialMediaContainer } from 'styled/elements/footer/SocialMediaContainer';
import { Wrapper } from 'styled/elements/footer/Wrapper';
import { CompanyLogo } from 'styled/elements/shared/CompanyLogo';
import { CompanyLogoWrapper } from 'styled/elements/shared/CompanyLogoWrapper';
import { Icon } from 'styled/elements/shared/Icon';
import { NavigationLinksContainer } from 'styled/elements/footer/NavigationLinksContainer';
import { Link } from 'styled/elements/footer/Link';
import { Container } from 'styled/elements/footer/Container';
import { ArrowButton } from 'styled/elements/shared/arrowButton/ArrowButton';
import { Arrow } from 'styled/elements/shared/arrowButton/Arrow';
import { WhiteColor } from 'styled/base/Colors';
import { CopyrightText } from 'styled/elements/footer/CopyrightText';
import facebookIcon from 'assets/shared/desktop/facebook.svg';
import youtubeIcon from 'assets/shared/desktop/youtube.svg';
import twitterIcon from 'assets/shared/desktop/twitter.svg';
import pinterestIcon from 'assets/shared/desktop/pinterest.svg';
import instagramIcon from 'assets/shared/desktop/instagram.svg';

const currentYear = new Date().getFullYear();

export const Footer = () => {
  return (
    <Wrapper>
      <LinksContainer>
        <CompanyLogoWrapper to={'/'}>
          <CompanyLogo isWhite />
        </CompanyLogoWrapper>
        <SocialMediaContainer>
          <Icon marginRight="14px" src={facebookIcon} />
          <Icon marginRight="14px" src={youtubeIcon} />
          <Icon marginRight="14px" src={twitterIcon} />
          <Icon marginRight="14px" src={pinterestIcon} />
          <Icon src={instagramIcon} />
        </SocialMediaContainer>
        <NavigationLinksContainer>
          <Link to={'/'}>Home</Link>
          <Link to={'stories'}>Stories</Link>
          <Link to={'features'}>Features</Link>
          <Link to={'pricing'}>Pricing</Link>
        </NavigationLinksContainer>
      </LinksContainer>
      <Container>
        <ArrowButton width="182px" color={WhiteColor}>
          Get an invite <Arrow marginLeft="22px" color="white" />
        </ArrowButton>
        <CopyrightText>
          Copyright {currentYear}. All Rights Reserved
        </CopyrightText>
      </Container>
    </Wrapper>
  );
};
