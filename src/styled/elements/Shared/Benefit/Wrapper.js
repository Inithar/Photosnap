import styled from 'styled-components';
import { device } from 'styled/base/Responsive';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${device.smallDesktop} {
    margin-right: 30px;

    &:last-child {
      margin-right: 0;
    }
  }
`;
