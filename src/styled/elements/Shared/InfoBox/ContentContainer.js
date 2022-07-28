import styled from 'styled-components';

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 72px 33px;
  width: 100%;
  min-height: 420px;
  background-color: ${({ color }) => color};
`;
