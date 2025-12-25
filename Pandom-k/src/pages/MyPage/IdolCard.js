import styled from 'styled-components';

const CardWrap = styled.div`
  width: 128px;
  text-align: center;
  position: relative;

  .removeBtn {
    width: 28px;
    height: 28px;
    right: 0px;
    top: 4px;
    cursor: pointer;
    position: absolute;
  }
  .idolName {
    margin-top: 10px;
    text-align: center;
  }

  .idolGroup {
    line-height: 30px;
  }
`;

export default CardWrap;
