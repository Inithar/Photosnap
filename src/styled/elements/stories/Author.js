import styled from 'styled-components';
import { LightGrayColor } from 'styled/base/Colors';

export const Author = styled.p`
  margin-top: ${({ marginTop }) => marginTop || '0'};
  margin-bottom: ${({ marginBottom }) => marginBottom || '0'};
  font-size: 13px;
  line-height: 17px;
  color: ${LightGrayColor};
`;
