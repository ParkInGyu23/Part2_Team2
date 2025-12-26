// Header
import styled from 'styled-components';
import { palette } from '../Palette.styled';
import profileImg from '../../assets/images/ProfileImg.png';
import BgLendingTop from '../../images/bgLendingTop.png';

export const HeaderWrap = styled.header`
  position: sticky;
  top: 0;
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${palette.black200};
  z-index: 999;

  > div {
    display: grid;
    grid-template:
      32px/24px 32px minmax(min-content, 484px) 168px minmax(min-content, 484px)
      32px 24px;
  }

  &:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 199px;
    height: 273px;
    background: url(${BgLendingTop}) no-repeat top left;
    z-index: -1;
    content: '';
  }
`;

export const LogoLink = styled.a`
  grid-column: 4/5;
  display: flex;
  align-items: center;
  height: 32px;

  > img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;

export const ProfileImg = styled.a`
  grid-column: -2/-3;
  width: 32px;
  height: 32px;
  font-size: 0;
  border-radius: 50%;
  background: url(${profileImg}) no-repeat top center ${palette.white};
  background-size: contain;
`;
