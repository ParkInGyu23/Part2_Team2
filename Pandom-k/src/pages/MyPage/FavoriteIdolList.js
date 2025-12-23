import styled from 'styled-components';

const FavoriteListWrap = styled.div`
  padding: 0 50px;
  margin: 0 auto;
  width: 1050px;
  height: auto;
  gap: 30px;
  display: flex;
  flex-direction: column;

  .title {
    height: 50px;
    margin-top: 10px;
    margin-bottom: 0px;
  }

  .carousel-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 80px;
    height: 100%;
  }

  .favoriteSection {
    width: 100%;
    height: 200px;
    gap: 40px;
    overflow: hidden;
  }

  .embla__container {
    display: flex;
    flex-direction: row;
    gap: 20px;
    height: 100%;
  }
`;

export default FavoriteListWrap;
