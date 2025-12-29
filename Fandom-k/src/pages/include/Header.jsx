import React from 'react';
import images from '../../styles/Images.styled';
import { HeaderWrap, LogoLink, ProfileImg } from '../../styles/pages/Header.styled';

const Header = () => {
  return (
    <HeaderWrap>
      <div>
        <LogoLink href="/list">
          <img src={images.Logo} alt="팬덤케이" />
        </LogoLink>

        <ProfileImg to="/Mypage">프로필 이미지</ProfileImg>
      </div>
    </HeaderWrap>
  );
};

export default Header;
