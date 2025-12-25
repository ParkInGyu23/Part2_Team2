import FavoriteListWrap from './FavoriteIdolList.js';
import IdolCard from './IdolCard.jsx';
import { T2 } from '../../styles/Typography.jsx';
import useEmblaCarousel from 'embla-carousel-react';
import { useEffect, useState, useCallback } from 'react';

const FavoriteIdolList = ({ favorites, onRemove, idol }) => {
  const [canScrollPrev, setCanScrollPrev] = useState();
  const [canScrollNext, setCanScrollNext] = useState();

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'start',
    slidesToScroll: 'auto',
  });
  const updateButtons = () => {
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  };

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.reInit(); // 데이터가 바뀌면 슬라이더 구조 재계산
    updateButtons();

    emblaApi.on('select', updateButtons);
    emblaApi.on('reInit', updateButtons);

    return () => {
      emblaApi.off('select', updateButtons);
      emblaApi.off('reInit', updateButtons);
    };
  }, [emblaApi, idol]); // 리스트 데이터가 바뀔 때마다 실행

  return (
    <>
      <FavoriteListWrap>
        <T2 className="title">내가 관심있는 아이돌 ({favorites.length})</T2>
        <div className="carousel-container">
          <div className="favoriteSection" ref={emblaRef}>
            {favorites.length === 0 && <p>아이돌을 추가해 주세요!</p>}
            <div className="embla__container">
              {favorites.map((idol) => (
                <div className="embla__slide" key={idol.id}>
                  <IdolCard
                    key={idol.id}
                    src={idol.profilePicture}
                    showCloseButton={true} // X버튼 활성화
                    onRemove={() => onRemove(idol.id)}
                    idol={idol}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </FavoriteListWrap>
    </>
  );
};

export default FavoriteIdolList;
