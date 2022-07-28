import styled from 'styled-components';
import blackLogo from 'assets/shared/desktop/logo-black.svg';
import whiteLogo from 'assets/shared/desktop/logo-white.svg';

export const CompanyLogo = styled.img.attrs(({ isWhite }) => {
  const logoSrc = isWhite ? whiteLogo : blackLogo;
  return {
    src: logoSrc,
  };
})``;
