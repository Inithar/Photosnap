import styled from 'styled-components';
import { device } from 'styled/base/Responsive';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  ${device.tablet} {
    width: ${({ page }) => (page === 'features' ? '340px' : 'auto')};

    &:nth-child(odd) {
      margin-right: ${({ page }) => (page === 'features' ? '11px' : '0')};
    }
  }

  @media (min-width: 1119px) {
    &:nth-child(2),
    &:nth-child(4) {
      margin-right: ${({ page }) => (page === 'features' ? '11px' : '0')};
    }
  }

  ${device.smallDesktop} {
    &:nth-child(1) {
      margin-right: 30px;
    }

    &:nth-child(2),
    &:nth-child(4),
    &:nth-child(5) {
      margin-right: ${({ page }) => (page === 'features' ? '30px' : '0')};
    }

    &:nth-child(3n) {
      margin-right: 0;
    }
  }

  ${device.desktop} {
    &:nth-child(n + 4) {
      margin-top: 104px;
    }
  }
`;
