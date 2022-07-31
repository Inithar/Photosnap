import styled from 'styled-components';
import { VeryLightGrayColor, BlackColor } from 'styled/base/Colors';
import { device } from 'styled/base/Responsive';

export const CardWrapper = styled.div`
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

  ${device.tablet} {
    padding: 40px;
    align-items: flex-start;
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
  }
`;
