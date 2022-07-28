import styled from 'styled-components';

export const Image = styled.img.attrs(({ src }) => ({
  src,
}))`
  display: block;
  width: 100%;
`;
