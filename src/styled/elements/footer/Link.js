import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { WhiteColor } from 'styled/base/Colors';
import { device } from 'styled/base/Responsive';

export const Link = styled(NavLink)`
  margin-bottom: 19px;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 2px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${WhiteColor};
  text-decoration: none;

  ${device.tablet} {
    margin-left: 26px;

    &:first-child {
      margin-left: 0;
    }
  }
`;
