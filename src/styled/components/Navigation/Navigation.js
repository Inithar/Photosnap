import React, { useState } from 'react';
import { useGetDevice } from 'hooks/useGetDevice';
import { Wrapper } from 'styled/elements/navigation/Wrapper';
import { CompanyLogo } from 'styled/elements/shared/CompanyLogo';
import { LinksContainer } from 'styled/elements/navigation/LinksContainer';
import { Button } from 'styled/elements/shared/Button';
import { Link } from 'styled/elements/navigation/Link';
import { CompanyLogoWrapper } from 'styled/elements/shared/CompanyLogoWrapper';
import { MobileLinksContainer } from 'styled/elements/navigation/MobileLinksContainer';
import { Separator } from 'styled/elements/shared/Separator';
import { MobileContainer } from 'styled/elements/navigation/MobileContainer';
import { CloseIcon } from 'styled/elements/navigation/CloseIcon';
import { MenuIcon } from 'styled/elements/navigation/MenuIcon';
import { VeryLightBlack } from 'styled/base/Colors';

export const Navigation = () => {
  const isMobile = useGetDevice() === 'mobile' ? true : false;
  const [isOpen, setIsOpen] = useState(false);
  const handleToggleNavigation = () => setIsOpen(!isOpen);

  return (
    <>
      <Wrapper>
        <CompanyLogoWrapper to={'/'}>
          <CompanyLogo />
        </CompanyLogoWrapper>

        {isMobile ? (
          <>
            {isOpen ? (
              <CloseIcon onClick={handleToggleNavigation} />
            ) : (
              <MenuIcon onClick={handleToggleNavigation} />
            )}
          </>
        ) : (
          <>
            <LinksContainer>
              <Link to={'/stories'}>Stories</Link>
              <Link to={'/features'}>Features</Link>
              <Link to={'/pricing'}>Pricing</Link>
            </LinksContainer>
            <Button width="158px" height="40px" fontSize={'12px'}>
              Get an invite
            </Button>
          </>
        )}
      </Wrapper>

      <MobileContainer isOpen={isOpen}>
        <MobileLinksContainer>
          <Link to={'/stories'} onClick={handleToggleNavigation}>
            Stories
          </Link>
          <Link to={'/features'} onClick={handleToggleNavigation}>
            Features
          </Link>
          <Link to={'/pricing'} onClick={handleToggleNavigation}>
            Pricing
          </Link>
        </MobileLinksContainer>
        <Separator color={VeryLightBlack} />
        <Button width="100%" height="48px" fontSize={'15px'}>
          Get an invite
        </Button>
      </MobileContainer>
    </>
  );
};
