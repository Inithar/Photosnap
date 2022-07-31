import styled from 'styled-components';

export const Separator = styled.div`
  margin-top: ${({ marginTop }) => marginTop};
  margin-bottom: ${({ marginBottom }) => marginBottom || '20px'};
  width: ${({ width }) => width || '100%'};
  height: 1px;
  background-color: ${({ color }) => color};
`;
