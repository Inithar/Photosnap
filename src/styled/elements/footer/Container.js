import styled from 'styled-components';
import { device } from 'styled/base/Responsive';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;

  ${device.tablet} {
    margin-top: 0;
    align-items: flex-end;
    width: 40%;
  }
`;
