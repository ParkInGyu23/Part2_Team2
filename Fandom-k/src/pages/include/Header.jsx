import React from 'react';
import images from '../../styles/Images.styled';
import { HeaderWrap, LogoLink, ProfileImg } from '../../styles/pages/Header.styled';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <HeaderWrap>
      <div>
        <LogoLink as={Link} to="/list">
          <img src={images.Logo} alt="팬덤케이" />
        </LogoLink>
        <ProfileImg as={Link} to="/MyPage">
          프로필 이미지
        </ProfileImg>
      </div>
    </HeaderWrap>
  );
};

export default Header;
