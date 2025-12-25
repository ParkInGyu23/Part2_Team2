import { useEffect, useState } from 'react';
import IdolList from './Idollist.jsx';
import FavoriteIdolList from './FavoriteIdolList.jsx';
import Header from '../include/Header.jsx';
import { getList } from '../../apis/MyPageList.js';

const MyPage = () => {
  const [selectedIds, setSelectedIds] = useState([]); // 현재 체크된 ID들
  const [favoriteIdolDetails, setFavoriteIdolDetails] = useState([]); //관심있는 아이돌 상세정보(id 비교)
  const [favorites, setFavorites] = useState([]); // 상단 관심 목록
  const [idolList, setIdolList] = useState([]); // 리스트에 있을 아이돌들

  const fetchFavoriteIdols = async () => {
    try {
      const result = await getList({ cursor: null, pageSize: 1000 });
      const favoriteDetails = result.list.filter((idol) => idolList.includes(idol.id));
      setFavoriteIdolDetails(favoriteDetails);
      setIdolList(result.list);
    } catch (err) {
      console.error('Error loading favorite idols:', err);
    }
  };

  //favoriteIdols 변경시 관심아이돌 정보 가져오는 함수 실행
  useEffect(() => {
    fetchFavoriteIdols();
  }, []);

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
