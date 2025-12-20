import { useNavigate } from 'react-router-dom';
import { T1, T2, T8 } from '../styles/Typography';
import images from '../styles/Images';
import ImgPhone1 from '../images/imgPhone1.png';
import ImgPhone2 from '../images/imgPhone2.png';
import ImgPhone3 from '../images/imgPhone3.png';
import Button from '../styles/Button';
import { LendingWrap, LendingTop, Title, Section, BgLine } from '../styles/pages/Lending/Lending';

const Lending = () => {
  const navigate = useNavigate();

  const handleStartClick = () => {
    // localStorage 초기화
    localStorage.clear();
    navigate('/list');
  };

  return (
    <>
      <LendingWrap>
        <LendingTop>
          <Title>
            <T1>
              내가 좋아하는 아이돌을
              <br />
              가장 <span>쉽게 덕질</span> 하는 방법
            </T1>
            <img src={images.Logo} alt="logo" />
          </Title>

          <Button Full onClick={handleStartClick}>
            지금 시작하기
          </Button>
        </LendingTop>

        <Section sec1>
          <Title Sub>
            <T8>후원하기</T8>
            <T2>
              좋아하는 아이돌에게
              <br />
              쉽게 조공해 보세요
            </T2>
          </Title>

          <img src={ImgPhone1} alt="phone" />
        </Section>

        <Section sec2>
          <Title Sub>
            <T8>이달의 아티스트</T8>
            <T2>
              내 아티스트에게 1등의
              <br />
              영예를 선물하세요
            </T2>
          </Title>

          <img src={ImgPhone2} alt="phone" />
        </Section>

        <Section sec3>
          <Title Sub>
            <T8>나만의 아티스트</T8>
            <T2>
              좋아하는 아티스트들의
              <br />
              소식을 모아보세요
            </T2>
          </Title>

          <img src={ImgPhone3} alt="phone" />
        </Section>

        <BgLine />
      </LendingWrap>
    </>
  );
};

export default Lending;
