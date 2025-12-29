import { useEffect, useState } from 'react';
import IdolList from './components/IdolList.jsx';
import FavoriteIdolList from './components/FavoriteIdolList.jsx';
import Header from '../include/Header.jsx';
import { getList } from '../../API/MyPageList.js';
import { getStorage, setStorage } from '../../utils/LocalStorage.js';

const MyPage = () => {
  const [favorites, setFavorites] = useState(() => getStorage('favorites', [])); // 상단 관심 목록
  const [idolList, setIdolList] = useState(() => getStorage('idolList', [])); // 리스트에 있을 아이돌들
  const [selectedIds, setSelectedIds] = useState([]); // 현재 체크된 ID들

  // 초기에 데이터 빈배열일때 API 호출
  const fetchInitialData = async () => {
    try {
      if (idolList.length === 0 && favorites.length === 0) {
        const result = await getList({ cursor: null, pageSize: 1000 });
        setIdolList(result.list);
        setStorage('idolList', result.list);
      }
    } catch (err) {
      console.error('Error loading favorite idols:', err);
    }
  };

  useEffect(() => {
    fetchInitialData();
  }, []);

  useEffect(() => {
    setStorage('favorites', favorites);
    setStorage('idolList', idolList);
  }, [favorites, idolList]);

  ////// 아이돌 클릭 시 체크/해제
  const toggleSelect = (id) => {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((itemId) => itemId !== id) : [...prev, id],
    );
  };

  // [추가하기] 클릭: 하단 -> 상단으로 이동
  const handleMoveToFavorite = () => {
    if (selectedIds.length === 0) {
      alert('아이돌을 선택해주세요!');
      return;
    }
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
