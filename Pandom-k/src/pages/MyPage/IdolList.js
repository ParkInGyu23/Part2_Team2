import styled from 'styled-components';

const IdolListWrap = styled.div`
  padding: 0 0px;
  margin: 0 auto;
  width: 1200px;
  height: auto;
  min-height: 400px;
  gap: 30px;

  .title {
    height: 50px;
    margin-top: 20px;
    margin-bottom: 20px;
    padding: 0 60px;
  }

  .carousel-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 80px;
    height: 100%;
  }

  .idolListSection {
    flex: 1;
    width: 100%;
    height: 440px;
    overflow: hidden;
  }

  .embla__container {
    display: grid;
    /* 1. 무조건 2줄로 고정 */
    grid-template-rows: repeat(2, 210px);
    /* 2. 한 화면에 4개씩 보이도록 너비 고정 (1200px - 간격 고려) */
    /* 약 260px~280px 정도로 카드 너비를 고정하세요 */
    grid-auto-columns: calc((100% - 60px) / 4);
    /* 3. 아래로 먼저 채우고 옆으로 확장 */
    grid-auto-flow: column;
    gap: 20px;
    height: 100%;
  }

  .embla__slide {
    /* Grid에서는 flex 설정이 방해될 수 있으니 초기화 */
    flex: 0 0 auto;
    width: 100%;
    min-width: 0;
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
  }

  .embla__button--prev {
    left: 0px;
  }

  .embla__button--next {
    right: 0px;
  }
`;

export default IdolListWrap;
