import styled from 'styled-components';

export const Text = styled.p`
  text-align: ${({ align }) => align};
  font-size: 15px;
  line-height: 25px;
  color: ${({ color }) => color};
`;
