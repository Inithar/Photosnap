import styled from 'styled-components';
import { VeryLightGrayColor, BlackColor, MainColor } from 'styled/base/Colors';
import { device } from 'styled/base/Responsive';

export const CardWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 24px;
  padding: 56px 22px 40px;
  background-color: ${({ isDark }) =>
    isDark ? BlackColor : VeryLightGrayColor};

  &:last-child {
    margin-bottom: 0;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 6px;
    background: ${MainColor};
    z-index: 10;
    visibility: ${({ isDark }) => (isDark ? 'visible' : 'hidden')};
  }

  ${device.tablet} {
    padding: 40px;
    align-items: flex-start;

    &::after {
      width: 6px;
      height: 100%;
    }
  }

  ${device.smallDesktop} {
    justify-content: center;
    margin-top: ${({ isDark }) => (isDark ? '0' : '30px')};
    margin-left: ${({ isDark }) => (isDark ? '30px' : '0')};
    margin-bottom: 0;
    margin-right: ${({ isDark }) => (isDark ? '30px' : '0')};
    padding: 56px 40px 40px;
    align-items: center;
    height: ${({ isDark }) => (isDark ? '480px' : '420px')};

    &::after {
      width: 100%;
      height: 6px;
    }
  }
`;
