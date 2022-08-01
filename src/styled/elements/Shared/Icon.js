import styled from 'styled-components';

export const Icon = styled.img.attrs(({ src }) => ({
  src,
}))`
  margin-right: ${({ marginRight }) => marginRight || '0'};
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
  cursor: pointer;
`;
