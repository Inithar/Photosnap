import styled from 'styled-components';
import { device } from 'styled/base/Responsive';

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 72px 33px;
  width: 100%;
  min-height: ${({ minHeight }) => minHeight};
  background-color: ${({ color }) => color};

  ${device.tablet} {
    width: 65%;
    padding: 173px 54px;
  }

  ${device.smallDesktop} {
    width: 47%;
    padding: 173px 111px;
  }
`;
