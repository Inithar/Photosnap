import styled from 'styled-components';

export const Separator = styled.div`
  margin-bottom: 20px;
  width: ${({ width }) => width || '100%'};
  height: 1px;
  background-color: ${({ color }) => color};
`;
