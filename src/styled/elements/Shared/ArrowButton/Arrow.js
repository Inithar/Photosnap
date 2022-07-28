import styled from 'styled-components';
import arrowWhite from 'assets/shared/desktop/arrow-white.svg';
import arrowBlack from 'assets/shared/desktop/arrow-black.svg';

export const Arrow = styled.img.attrs(({ color }) => {
  const icon = color === 'white' ? arrowWhite : arrowBlack;
  return {
    src: icon,
  };
})`
  margin-left: ${({ marginLeft }) => marginLeft};
`;
