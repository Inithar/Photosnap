import styled from 'styled-components';
import { BlackColor, WhiteColor, LightGrayColor } from 'styled/base/Colors';

export const Button = styled.button`
  width: ${({ width }) => width};
  height: ${({ height }) => height};
  font-size: ${({ fontSize }) => fontSize};
  line-height: 16px;
  letter-spacing: 2px;
  font-weight: bold;
  text-transform: uppercase;
  color: ${({ isDark }) => (isDark ? WhiteColor : BlackColor)};
  background-color: ${({ isDark }) => (isDark ? BlackColor : WhiteColor)};
  transition: background-color 0.5s;

  &:hover {
    background-color: ${LightGrayColor};
  }
`;
