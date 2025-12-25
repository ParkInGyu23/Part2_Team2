import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { palette } from '../styles/Palette';
import { T1, T9 } from '../styles/Typography';
import Button from '../styles/Button';

function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <>
      <NotFoundWrap>
        <em>404</em>
        <div>
          <T1>
            죄송합니다.
            <br />
            현재 찾을 수 없는 페이지를 요청하셨습니다.
          </T1>
          <T9 color="gray100">
            존재하지 않는 주소를 입력하셨거나,
            <br />
            요청하신 페이지의 주소가 변경, 삭제되어 찾을 수 없습니다.
          </T9>

          <Button Round onClick={() => navigate('/')}>
            홈으로 가기
          </Button>
        </div>
      </NotFoundWrap>
    </>
  );
}

export default NotFoundPage;

export const NotFoundWrap = styled.div`
  max-width: 600px;
  width: 100%;
  height: 100dvh;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 20px;
  margin: 0 auto;

  em {
    font-size: 16rem;
    font-weight: 900;
    font-style: normal;
    color: transparent;
    letter-spacing: -10px;
    text-shadow: 0 0 80px rgba(255, 170, 170, 0.4);
    background-image: linear-gradient(to right, ${palette.primary}, ${palette.secondary});
    background-clip: text;
    -webkit-background-clip: text;
  }

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 20px;
  }
`;
