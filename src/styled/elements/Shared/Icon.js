import styled from 'styled-components';

export const Icon = styled.img.attrs(({ src }) => ({
  src,
}))`
  width: ${({ width }) => width || 'auto'};
  height: ${({ height }) => height || 'auto'};
`;
