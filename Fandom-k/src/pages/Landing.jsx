import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import {
  inViewMotionProps,
  fadeInDown,
  fadeInLeft,
  fadeInRight,
  zoomIn,
} from '../components/Motion';
import { T1, T2, T8 } from '../styles/TypoGraphy.styled';
import images from '../styles/Images.styled';
import ImgPhone1 from '../assets/images/imgPhone1.png';
import ImgPhone2 from '../assets/images/imgPhone2.png';
import ImgPhone3 from '../assets/images/imgPhone3.png';
import Button from '../styles/Button.styled';
import {
  LendingWrap,
  LendingTop,
  Title,
  Section,
  BgLine,
} from '../styles/pages/Landing/Landing.styled';
import { useCreditRefresh } from '../contexts/CreditContext';

const MotionT1 = motion(T1);
const MotionTitle = motion(Title);

const Lending = () => {
  const navigate = useNavigate();
  const refreshCredit = useCreditRefresh();

  const handleStartClick = () => {
    // localStorage 초기화
    localStorage.clear();
    refreshCredit();
    navigate('/list');
  };

  return (
    <>
      <LendingWrap>
        <LendingTop>
          <Title>
            <MotionT1 {...inViewMotionProps} variants={fadeInDown}>
              내가 좋아하는 아이돌을
              <br />
              가장 <span>쉽게 덕질</span> 하는 방법
            </MotionT1>
            <motion.img src={images.Logo} alt="logo" {...inViewMotionProps} variants={zoomIn} />
          </Title>

          <Button Full onClick={handleStartClick}>
            지금 시작하기
          </Button>
        </LendingTop>

        <Section sec1>
          <MotionTitle Sub {...inViewMotionProps} variants={fadeInRight}>
            <T8>후원하기</T8>
            <T2>
              좋아하는 아이돌에게
              <br />
              쉽게 조공해 보세요
            </T2>
          </MotionTitle>

          <motion.img src={ImgPhone1} alt="phone" {...inViewMotionProps} variants={fadeInLeft} />
        </Section>

        <Section sec2>
          <MotionTitle Sub {...inViewMotionProps} variants={fadeInRight}>
            <T8>이달의 아티스트</T8>
            <T2>
              내 아티스트에게 1등의
              <br />
              영예를 선물하세요
            </T2>
          </MotionTitle>

          <motion.img src={ImgPhone2} alt="phone" {...inViewMotionProps} variants={fadeInLeft} />
        </Section>

        <Section sec3>
          <MotionTitle Sub {...inViewMotionProps} variants={fadeInRight}>
            <T8>나만의 아티스트</T8>
            <T2>
              좋아하는 아티스트들의
              <br />
              소식을 모아보세요
            </T2>
          </MotionTitle>

          <motion.img src={ImgPhone3} alt="phone" {...inViewMotionProps} variants={fadeInLeft} />
        </Section>

        <BgLine />
      </LendingWrap>
    </>
  );
};

export default Lending;
