// 타이포그래픽
// 임의로 지정함.

import styled, { css } from 'styled-components';
import { palette } from './Palette';
import { device } from './Theme';

/* 공통 베이스 */
const base = css`
  font-family:
    'Pretendard',
    -apple-system,
    BlinkMacSystemFont,
    system-ui,
    sans-serif;
  color: ${({ color }) => (color ? palette[color] : 'inherit')};
  text-align: ${({ align }) => align || 'inherit'};
  transition:
    font-size 0.3s ease-in-out,
    font-weight 0.3s ease-in-out;
`;

export const T1 = styled.h1`
  ${base}
  font-size: 26px;
  font-weight: 700;

  @media ${device.tablet} {
    font-size: 20px;
  }

  @media ${device.mobile} {
    font-weight: 400;
  }
`;

export const T2 = styled.h2`
  ${base}
  font-size: 24px;
  font-weight: 700;
  line-height: 26px;

  @media ${device.tablet} {
    font-size: 20px;
  }
`;

export const T3 = styled.h3`
  ${base}
  font-size: 20px;
  font-weight: 700;
`;

export const T4 = styled.h4`
  ${base}
  font-size: 18px;
  font-weight: 600;
`;

export const T5 = styled.div`
  ${base}
  font-size: 18px;
  font-weight: 500;
`;

export const T6 = styled.div`
  ${base}
  font-size: 16px;
  font-weight: 700;
  line-height: 26px;
`;

export const T7 = styled.div`
  ${base}
  font-size: 16px;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: 0.05em;
`;

export const T8 = styled.div`
  ${base}
  font-size: 16px;
  font-weight: 500;
`;

export const T9 = styled.p`
  ${base}
  font-size: 16px;
  font-weight: 400;
`;

export const T10 = styled.p`
  ${base}
  font-size: 16px;
  font-weight: 400;
  line-height: 18px;
  letter-spacing: -0.17px;
`;

export const T11 = styled.div`
  ${base}
  font-size: 15px;
  font-weight: 700;
  line-height: 26px;
`;

export const T12 = styled.div`
  ${base}
  font-size: 14px;
  font-weight: 700;
  line-height: 26px;
`;

export const T13 = styled.p`
  ${base}
  font-size: 14px;
  font-weight: 400;
`;

export const T14 = styled.div`
  ${base}
  font-size: 13px;
  font-weight: 500;
  line-height: 26px;
  letter-spacing: 0.02em;
`;

export const T15 = styled.div`
  ${base}
  font-size: 13px;
  font-weight: 700;
  line-height: 26px;
  letter-spacing: 0.02em;
`;

export const T16 = styled.div`
  ${base}
  font-size: 12px;
  font-weight: 500;
`;

export const T17 = styled.div`
  ${base}
  font-size: 12px;
  font-weight: 500;
  line-height: 18px;
  letter-spacing: -0.17px;
`;
