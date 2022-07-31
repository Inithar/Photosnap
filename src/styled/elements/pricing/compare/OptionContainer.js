import styled from 'styled-components';
import { device } from 'styled/base/Responsive';

export const OptionContainer = styled.div`
  margin-left: auto;

  &:first-child {
    margin-left: 0;
  }

  &:last-child {
    margin-right: 46px;
  }

  ${device.tablet} {
    margin-left: 0;
    width: 33%;
    text-align: center;

    &:last-child {
      margin-right: 0;
    }
  }
`;
