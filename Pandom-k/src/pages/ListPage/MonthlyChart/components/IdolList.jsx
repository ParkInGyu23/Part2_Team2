import { ListContainer, ListItem, IdolInfo, ImgProfile, RankText, NameText, VoteText, MoreButton } from '../../../../styles/pages/list/MonthlyChart'
import { useState, useEffect } from "react";

//임시 데이터
const IDOL_DATA = {
  female: [
    { id: 1, group: '뉴진스', name: '해린', votes: '1,520,300' },
    { id: 2, group: '아이브', name: '안유진', votes: '1,210,000' },
    { id: 3, group: '에스파', name: '카리나', votes: '1,100,500' },
    { id: 4, group: '르세라핌', name: '김채원', votes: '980,000' },
    { id: 5, group: '뉴진스', name: '민지', votes: '850,000' },
    { id: 6, group: '뉴진스', name: '해린', votes: '1,520,300' },
    { id: 7, group: '아이브', name: '안유진', votes: '1,210,000' },
    { id: 8, group: '에스파', name: '카리나', votes: '1,100,500' },
    { id: 9, group: '르세라핌', name: '김채원', votes: '980,000' },
    { id: 10, group: '뉴진스', name: '민지', votes: '850,000' },
    
  ],
  male: [
    { id: 101, group: 'BTS', name: '정국', votes: '2,100,000' },
    { id: 102, group: '세븐틴', name: '민규', votes: '1,850,000' },
    { id: 103, group: '스트레이키즈', name: '현진', votes: '1,400,000' },
    { id: 104, group: '라이즈', name: '원빈', votes: '1,200,500' },
    { id: 105, group: 'TWS', name: '신유', votes: '900,000' },
    { id: 106, group: 'BTS', name: '정국', votes: '2,100,000' },
    { id: 107, group: '세븐틴', name: '민규', votes: '1,850,000' },
    { id: 108, group: '스트레이키즈', name: '현진', votes: '1,400,000' },
    { id: 109, group: '라이즈', name: '원빈', votes: '1,200,500' },
    { id: 110, group: 'TWS', name: '신유', votes: '900,000' },
  ]
};

const IdolList = ({ type = "female" }) => {
  const list = IDOL_DATA[type];
  const [isTabletOrMobile, setIsTabletOrMobile] = useState(false);
  const [visibleCount, setVisibleCount] = useState(10);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");

    const handleMediaChange = () => {
      const isSmall = mediaQuery.matches;
      setIsTabletOrMobile(isSmall);
      setVisibleCount(isSmall ? 5 : 10);
    };

    handleMediaChange();
    mediaQuery.addEventListener("change", handleMediaChange);

    return () => {
      mediaQuery.removeEventListener("change", handleMediaChange);
    };
  }, [type]); 

  const INCREMENT_COUNT = isTabletOrMobile ? 5 : 10;

  const handleMore = () => {
    setVisibleCount(prev => prev + INCREMENT_COUNT);
  };

  const visibleList = list.slice(0, visibleCount);
  
  return (
    <>
    <ListContainer>
      {visibleList.map((idol, index) => (
        <ListItem key={idol.id}>
          <IdolInfo>
            <ImgProfile />
            <RankText>{index + 1}</RankText>
            <NameText>
              <strong>{idol.group}</strong>
              {idol.name}
            </NameText>
          </IdolInfo>

          <VoteText>{idol.votes}표</VoteText>
        </ListItem>
      ))}
    </ListContainer>
    {(
      <MoreButton onClick={handleMore}>
        더보기
      </MoreButton>
      )}
    </>
  );
};

export default IdolList;
