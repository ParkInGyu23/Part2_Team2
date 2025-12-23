import styled from 'styled-components';
import { palette } from '../../Palette';
import Button from '../../Button';

export const DonationContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
  color: ${palette.white};
  padding: 50px 0;

  .embla {
    overflow: hidden;
  }

  .embla__container {
    display: flex;
    margin-left: -24px;
  }

  .embla__slide {
    flex: 0 0 25%;
    padding-left: 24px;
    box-sizing: border-box;

    @media (max-width: 1024px) {
      flex: 0 0 40%;
    }

    @media (max-width: 768px) {
      flex: 0 0 45%;
      padding-left: 10px;
    }
  }

  .embla__button {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 10;
    border: none;
    background: none;
    cursor: pointer;

    @media (max-width: 1024px) {
      display: none;
    }
  }

  .embla__button--prev {
    left: 110px;
  }

  .embla__button--next {
    right: 110px;
  }
`;

export const DonationHeader = styled.div`
  margin-bottom: 24px;
`;

// ProfileCard
export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  color: ${palette.white};
`;

export const ThumbnailBox = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 282 / 293;
  background: gray;
  border-radius: 8px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }
  .overlay-gradient {
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, #0000 58.9%, #000);
    z-index: 1;
  }
`;

export const SupportButton = styled(Button)`
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  width: calc(100% - 40px);
  padding: 10px;
  //font-size: 13px;
  color: ${palette.white};
  z-index: 2;
`;

export const CardDetails = styled.div`
  padding: 12px 0 0 0;
  display: flex;
  flex-direction: column;

  .subTitle {
    color: ${palette.white};
    font-size: 16px;
    opacity: 40%;
  }
  .mainTitle {
    color: #f7f7f8;
    font-size: 18px;
    margin-top: 8px;
  }
`;

//진행바
export const ProgressContainer = styled.div`
  margin-top: 10px;

  .bar-bg {
    position: relative;
    width: 100%;
    height: 1px;
    background: ${palette.white};
    border-radius: 1px;
    margin-top: 7px;
  }
  .bar-fill {
    height: 100%;
    background: ${palette.primary};
  }
  .status {
    display: flex;
    justify-content: space-between;
    margin-top: 5px;
    font-size: 12px;
  }
  .amount {
    display: inline-flex;
    align-items: center;
    color: ${palette.primary};
  }
`;
