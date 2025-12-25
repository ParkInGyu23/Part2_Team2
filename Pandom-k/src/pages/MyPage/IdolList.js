import styled from 'styled-components';
import { device } from '../../styles/Theme.jsx';

const IdolListWrap = styled.div`
  padding: 0 0px;
  margin: 0 auto;
  width: 100%;
  max-width: 1350px;
  height: auto;
  min-height: 400px;
  gap: 15px;
  overflow: hidden;

  @media ${device.tablet} {
    width: 100%;
    max-width: 1240px;
  }
  @media ${device.mobile} {
    width: 100%;
    max-width: 600px;
  }
  .title {
    margin: 20px 70px;
    height: 50px;

    @media ${device.mobile} {
      margin: 0px 0px;
    }
  }

  .carousel-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    height: 100%;
  }

  .idolListSection {
    flex: 1;
    width: 100%;
    height: 420px;
    overflow: hidden;
    @media ${device.mobile} {
      height: 350px;
    }
  }

  .embla__container {
    display: grid;
    grid-template-rows: repeat(2, 1fr);
    grid-auto-columns: 12.5%;
    grid-auto-flow: column;
    @media (max-width: 1350px) {
      grid-auto-columns: calc(100% / 7);
    }
    @media ${device.tablet} {
      grid-auto-columns: calc(100% / 5);
    }
    @media (max-width: 850px) {
      grid-auto-columns: calc(100% / 4);
    }
    @media ${device.mobile} {
      grid-auto-columns: calc(100% / 3);
    }
  }

  .embla__slide {
    flex: 0 0 auto;
    width: 100%;
    min-width: 0;
    @media ${device.mobile} {
      div > div {
        width: 110px;
        height: 110px;
      }
      img.profileImg {
        width: 97px;
        height: 97px;
      }
    }
  }
  button {
    margin: 10px auto;
    display: flex;
    align-content: center;
  }

  .embla__button {
    position: relative;
    z-index: 10;
    border: none;
    background: none;
    cursor: pointer;
    height: 100px;
    @media ${device.mobile} {
      display: none;
    }
  }

  .embla__button--prev {
    left: 0px;
  }

  .embla__button--next {
    right: 0px;
  }
`;

export default IdolListWrap;
