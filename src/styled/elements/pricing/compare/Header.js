import styled from 'styled-components';
import { BlackColor } from 'styled/base/Colors';
import { device } from 'styled/base/Responsive';

export const Header = styled.p`
  margin-top: 24px;
  width: ${({ width }) => (width ? width : 'auto')};
  text-align: ${({ align }) => (align ? align : 'start')};
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 2px;
  text-transform: uppercase;
  font-weight: 700;
  color: ${BlackColor};

  ${device.tablet} {
    margin-left: ${({ marginLeft }) => (marginLeft ? marginLeft : '0')};
  }
`;
