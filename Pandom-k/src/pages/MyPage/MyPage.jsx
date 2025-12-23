import { useState } from 'react';
import IdolList from './Idollist.jsx';
import FavoriteIdolList from './FavoriteIdolList.jsx';
import Header from '../include/Header.jsx';

//profile 이미지 예시 1~3
import profileImg1 from '../../images/profile/fankdomK-img1.png';
import profileImg2 from '../../images/profile/fankdomK-img2.png';
import profileImg3 from '../../images/profile/fankdomK-img3.png';

const MyPage = () => {
  // 리스트에 있을 아이돌들
  const [idolList, setIdolList] = useState([
    { id: 1, img: profileImg1, name: '민지', group: '아리즈1' },
    { id: 2, img: profileImg2, name: '지민', group: '아리즈2' },
    { id: 3, img: profileImg3, name: '진우', group: '아리즈3' },
    { id: 4, img: profileImg1, name: '민지', group: '아리즈4' },
    { id: 5, img: profileImg2, name: '지민', group: '아리즈5' },
    { id: 6, img: profileImg3, name: '진우', group: '아리즈6' },
    { id: 7, img: profileImg1, name: '민지', group: '아리즈7' },
    { id: 8, img: profileImg2, name: '지민', group: '아리즈8' },
    { id: 9, img: profileImg3, name: '진우', group: '아리즈9' },
    { id: 10, img: profileImg1, name: '민지', group: '아리즈10' },
    { id: 11, img: profileImg2, name: '지민', group: '아리즈11' },
    { id: 12, img: profileImg3, name: '진우', group: '아리즈12' },
  ]);

  const [selectedIds, setSelectedIds] = useState([]); // 현재 체크된 ID들
  const [favorites, setFavorites] = useState([]); // 상단 관심 목록

  ////// 아이돌 클릭 시 체크/해제
  const toggleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id],
    );
  };
  //////

  // [추가하기] 클릭: 하단 -> 상단으로 이동
  const handleMoveToFavorite = () => {
    const toMove = idolList.filter((idol) => selectedIds.includes(idol.id)); // 이동할 요소들
    const toStay = idolList.filter((idol) => !selectedIds.includes(idol.id)); // 남을 요소들

    setFavorites((prev) => [...prev, ...toMove]); // 위로 보냄
    setIdolList(toStay); // 아래서 삭제
    setSelectedIds([]); // 체크표시 초기화
    alert('관심목록에 추가되었습니다!');
  };

  // [X] 클릭: 상단 -> 하단으로 복원
  const handleMoveToIdolList = (id) => {
    const targetIdol = favorites.find((idol) => idol.id === id);

    setFavorites((prev) => prev.filter((idol) => idol.id !== id)); // FavoriteList에서 삭제
    setIdolList((prev) => [...prev, targetIdol]); // IdolList로 복원
    alert('관심목록에서 삭제되었습니다!');
  };

  return (
    <div>
      <Header />
      <FavoriteIdolList favorites={favorites} onRemove={handleMoveToIdolList} />
      <hr />
      <IdolList
        idolList={idolList}
        selectedIds={selectedIds}
        onSelected={toggleSelect}
        onFavorite={handleMoveToFavorite}
      />
    </div>
  );
};

export default MyPage;
