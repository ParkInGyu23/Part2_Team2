import styled from 'styled-components';
import { device } from '../../styles/Theme.jsx';

const FavoriteListWrap = styled.div`
  padding: 0 70px;
  margin: 0 auto;
  width: 100%;
  max-width: 1350px;
  height: auto;
  min-height: 200px;
  gap: 10px;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  @media ${device.mobile} {
    padding: 0 0px;
    gap: 0px;
  }

  .title {
    height: 50px;
    margin-top: 10px;
    margin-bottom: 0px;
  }

  .carousel-container {
    display: flex;
    height: 100%;
  }

  .favoriteSection {
    width: 100%;
    height: 200px;
    gap: 40px;
    overflow: hidden;
    @media ${device.mobile} {
      height: 150px;
    }
  }

  .embla__container {
    display: flex;
    flex-direction: row;
    gap: 20px;
    height: 100%;
  }

  .embla__slide {
    div {
      width: 100px !important;
      height: 100px !important;
    }
    img.profileImg {
      width: 87px !important;
      height: 87px !important;
      object-fit: cover;
    }
    @media ${device.mobile} {
      div {
        width: 80px !important;
        height: 80px !important;
      }
      img.profileImg {
        width: 67px !important;
        height: 67px !important;
        object-fit: cover;
      }
    }
  }
`;

export default FavoriteListWrap;
