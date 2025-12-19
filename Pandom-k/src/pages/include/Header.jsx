import React from 'react';
import images from '../../styles/Images';
import { HeaderWrap, LogoLink, ProfileImg } from '../../styles/pages/Header';

const Header = () => {
  return (
    <HeaderWrap>
      <div>
        <LogoLink href="#">
          <img src={images.Logo} alt="팬덤케이" />
        </LogoLink>

        <ProfileImg href="#">프로필 이미지</ProfileImg>
      </div>
    </HeaderWrap>
  );
};

export default Header;
