import styled from 'styled-components';
import { device } from 'styled/base/Responsive';

export const SocialMediaContainer = styled.div`
  display: flex;
  margin: 32px 0 49px;

  ${device.tablet} {
    order: 2;
    margin-top: 72px;
    margin-bottom: 0;
  }
`;
