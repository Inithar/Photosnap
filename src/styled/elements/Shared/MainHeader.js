import styled from 'styled-components';

export const MainHeader = styled.h2`
  margin: 0;
  font-size: 32px;
  line-height: 40px;
  letter-spacing: 3.3px;
  text-transform: uppercase;
  font-weight: bold;
  color: ${({ color }) => color};
`;
