import styled, { css } from 'styled-components';
import { palette } from '../../Palette.styled';
import { device } from '../../Theme.styled';
import { T8 } from '../../TypoGraphy.styled';

import ImgIntro from '../../../assets/images/ImgIntro.png';
import ImgIntro1 from '../../../assets/images/ImgIntro1.png';
import ImgIntro2 from '../../../assets/images/ImgIntro2.png';
import ImgIntro3 from '../../../assets/images/ImgIntro3.png';
import BgLendingTop from '../../../assets/images/BgLandingTop.png';

export const LendingWrap = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;

  &:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${BgLendingTop}) no-repeat top left;
    z-index: -1;
    content: '';
  }

  @media ${device.tablet} {
    &:before {
      opacity: 0;
    }
  }

  @media ${device.mobile} {
    &:before {
      opacity: 1;
    }
  }
`;

export const LendingTop = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 1080px;
  padding: 0 0 120px;
  overflow: hidden;
  transition: height 0.3s ease-in-out;

  > button {
    margin-top: auto;
  }

  &:before {
    position: absolute;
    width: 100%;
    height: 100%;
    background: url(${ImgIntro}) no-repeat top center / contain;
    transform: translateY(0) scale(1);
    transform-origin: top center;
    transition: transform 0.5s ease-in-out;
    will-change: transform;
    z-index: -1;
    content: '';
  }

  @media ${device.tablet} {
    height: 1200px;

    &:before {
      transform: translateY(220px) scale(1.1);
    }
  }

  @media ${device.mobile} {
    height: 812px;
    padding: 0 72px 100px;

    &:before {
      transform: translateY(178px) scale(1.2);
    }
  }
`;

export const Title = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${(props) => (props.Sub ? '8px' : '30px')};
  text-align: center;
  margin-top: ${(props) => (props.Sub ? '0' : '140px')};
  z-index: 1;

  span {
    color: ${palette.primary};
  }

  ${T8} {
    color: ${palette.yellow};
  }

  @media ${device.tablet} {
    margin-top: ${(props) => (props.Sub ? '0' : '120px')};
    gap: ${(props) => (props.Sub ? '8px' : '32px')};

    > img {
      height: 62px;
    }
  }

  @media ${device.mobile} {
    margin-top: ${(props) => (props.Sub ? '0' : '100px')};
    gap: ${(props) => (props.Sub ? '8px' : '20px')};

    > img {
      height: 45px;
    }
  }
`;

export const Section = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  width: 100%;
  max-width: 1200px;
  height: 100%;
  padding: 170px 0 193px;
  background: linear-gradient(
    rgba(2, 0, 14, 1) 0%,
    rgba(2, 0, 14, 0.5) 47%,
    rgba(2, 0, 14, 1) 100%
  );

  &:before {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    max-width: 1200px;
    width: 100%;
    height: 100%;
    z-index: -1;
    content: '';
  }

  > img {
    z-index: 1;
  }

  ${(props) =>
    props.sec1 &&
    css`
      &:before {
        background:
          radial-gradient(
              50% 50%,
              rgba(2, 0, 14, 0) 0%,
              rgba(2, 0, 14, 0.18) 38%,
              rgba(2, 0, 14, 0.5) 80%,
              rgb(2, 0, 14) 100%
            )
            0% 0% / cover,
          url(${ImgIntro1}) center center no-repeat;
      }
    `}

  ${(props) =>
    props.sec2 &&
    css`
      &:before {
        background:
          radial-gradient(
              50% 50%,
              rgba(2, 0, 14, 0) 0%,
              rgba(2, 0, 14, 0.18) 38%,
              rgba(2, 0, 14, 0.5) 80%,
              rgb(2, 0, 14) 100%
            )
            0% 0% / cover,
          url(${ImgIntro2}) center center no-repeat;
      }
    `}
    
  ${(props) =>
    props.sec3 &&
    css`
      &:before {
        background:
          radial-gradient(
              50% 50%,
              rgba(2, 0, 14, 0) 0%,
              rgba(2, 0, 14, 0.18) 38%,
              rgba(2, 0, 14, 0.5) 80%,
              rgb(2, 0, 14) 100%
            )
            0% 0% / cover,
          url(${ImgIntro3}) center center no-repeat;
      }
    `}

  @media ${device.tablet} {
    gap: 47px;
    padding: 84px 0 104px;

    > img {
      width: 200px;
    }
  }

  @media ${device.mobile} {
    padding: 93px 0 77px;

    &:before {
      max-width: 744px;
    }

    > img {
      width: 240px;
    }
  }
`;

export const BgLine = styled.div`
  position: absolute;
  top: 1390px;
  left: 50%;
  bottom: 196px;
  transform: translateX(-50%);
  width: 187px;
  background: linear-gradient(
    rgb(3, 6, 21) 0%,
    rgb(5, 29, 49) 43%,
    rgb(5, 30, 50) 53%,
    rgb(5, 28, 48) 74%,
    rgb(3, 11, 28) 100%
  );
  content: '';

  @media ${device.tablet} {
    top: 1410px;
    bottom: 105px;
    width: 117px;
  }
`;
