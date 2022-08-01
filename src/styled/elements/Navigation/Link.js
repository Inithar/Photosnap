import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { BlackColor } from 'styled/base/Colors';
import { device } from 'styled/base/Responsive';

export const Link = styled(NavLink)`
  margin-bottom: 20px;
  font-size: 15px;
  line-height: 20px;
  letter-spacing: 2.5px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${BlackColor};
  text-decoration: none;
  transition: opacity 0.3s;

  &:hover {
    opacity: 0.3;
  }

  ${device.tablet} {
    margin-bottom: 0;
    margin-right: 37px;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 2px;

    &:last-child {
      margin-right: 0;
    }
  }
`;
