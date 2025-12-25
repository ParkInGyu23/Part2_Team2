import IdolCard from './IdolCard.jsx';
import IdolListWrap from './IdolList.js';
import Button from '../../styles/Button.jsx';
import { T2 } from '../../styles/Typography.jsx';
import useEmblaCarousel from 'embla-carousel-react';
import IconArrowPrev from '../../images/BtnArrowPrev.svg';
import IconArrowNext from '../../images/BtnArrowNext.svg';
import { useEffect, useState, useCallback } from 'react';

const IdolList = ({ idolList, selectedIds, onSelected, onFavorite }) => {
  const [canScrollPrev, setCanScrollPrev] = useState();
  const [canScrollNext, setCanScrollNext] = useState();

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'center',
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
  }, [emblaApi, idolList]); // 리스트 데이터가 바뀔 때마다 실행

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <>
      <IdolListWrap>
        <T2 className="title">관심 있는 아이돌을 추가해보세요.</T2>
        <div className="carousel-container">
          <button className="embla__button embla__button--prev" onClick={scrollPrev}>
            <img src={IconArrowPrev} alt="이전 슬라이드" />
          </button>
          <div className="idolListSection" ref={emblaRef}>
            <div className="embla__container">
              {idolList.map((idol) => (
                <div className="embla__slide" key={idol.id}>
                  <IdolCard
                    key={idol.id}
                    src={idol.profilePicture}
                    isChecked={selectedIds.includes(idol.id)}
                    onSelected={() => onSelected(idol.id)}
                    idol={idol}
                  />
                </div>
              ))}
            </div>
          </div>

          <button className="embla__button embla__button--next" onClick={scrollNext}>
            <img src={IconArrowNext} alt="다음 슬라이드" />
          </button>
        </div>
        <Button onClick={onFavorite}>선택한 아이돌 추가하기</Button>
      </IdolListWrap>
    </>
  );
};

export default IdolList;
