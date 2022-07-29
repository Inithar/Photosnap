import styled from 'styled-components';

export const StoryDate = styled.p`
  margin-top: 0;
  margin-right: ${({ marginRight }) => marginRight || '0'};
  margin-bottom: ${({ marginBottom }) => marginBottom || '0'};
  font-size: 13px;
  line-height: 17px;
  color: ${({ color }) => color};
`;
