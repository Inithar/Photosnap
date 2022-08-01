import styled from 'styled-components';

export const Period = styled.p`
  font-size: 18px;
  line-height: 25px;
  font-weight: bold;
  text-align: ${({ align }) => align};
  color: ${({ color }) => color};
`;
