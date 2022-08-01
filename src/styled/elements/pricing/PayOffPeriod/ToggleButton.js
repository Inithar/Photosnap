import styled from 'styled-components';
import { BlackColor, LightGrayColor, WhiteColor } from 'styled/base/Colors';

export const ToggleButton = styled.input`
  -webkit-appearance: none;
  -webkit-tap-highlight-color: transparent;
  position: relative;
  margin: 0 32px;
  border: 0;
  outline: 0;
  cursor: pointer;

  &::after {
    content: '';
    display: inline-block;
    width: 64px;
    height: 32px;
    background-color: ${LightGrayColor};
    border-radius: 16px;
    transition: background-color 0.3s;
  }

  &::before {
    content: '';
    position: absolute;
    display: block;
    left: 4px;
    top: 4px;
    width: 24px;
    height: 24px;
    background-color: ${WhiteColor};
    border-radius: 50%;
    transition: transform 0.3s;
  }

  &:checked:before {
    transform: translateX(32px);
  }

  &:checked:after {
    background-color: ${BlackColor};
  }
`;
