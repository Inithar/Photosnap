import styled from 'styled-components';
import { device } from 'styled/base/Responsive';

export const ArrowButton = styled.button`
  display: flex;
  align-items: center;
  margin-top: ${({ marginTop }) => marginTop || '7px'};
  width: ${({ width }) => width || '100%'};
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 2px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${({ color }) => color};
  background-color: transparent;

  ${device.tablet} {
    justify-content: ${({ justify }) => justify || 'flex-start'};
  }
`;
