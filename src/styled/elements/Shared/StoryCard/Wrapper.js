import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  padding: 0 32px;
  width: 100%;
  height: 375px;
  background-image: url(${({ url }) => url});
  background-size: cover;
  background-position: center;
`;
