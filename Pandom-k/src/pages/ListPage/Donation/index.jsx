import { DonationContainer, DonationHeader } from '../../../styles/pages/list/Donation';
import { T2 } from '../../../styles/Typography';
import useEmblaCarousel from 'embla-carousel-react';
import IconArrowPrev from '../../../images/BtnArrowPrev.svg'; 
import IconArrowNext from '../../../images/BtnArrowNext.svg';
import ProfileCard from './components/ProfileCard';
import { useEffect, useState, useCallback } from 'react';

const Donation = ({ apiData }) => {
  const list = apiData?.list || [];
  
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'start',
    slidesToScroll: 'auto',
  });
  
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);
    
  useEffect(() => {
    if (!emblaApi) return;
  
    const updateButtons = () => {
      setCanScrollPrev(emblaApi.canScrollPrev());
      setCanScrollNext(emblaApi.canScrollNext());
    };
  
    emblaApi.reInit(); // 데이터가 바뀌면 슬라이더 구조 재계산
    updateButtons();
  
    emblaApi.on('select', updateButtons);
    emblaApi.on('reInit', updateButtons);
  
    return () => {
      emblaApi.off('select', updateButtons);
      emblaApi.off('reInit', updateButtons);
      };
  }, [emblaApi, list]); // 리스트 데이터가 바뀔 때마다 실행
  
  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  
  return (
    <>
      <DonationContainer>
        <DonationHeader>
          <T2>후원을 기다리는 조공</T2>
        </DonationHeader>
        <div className="embla" ref={emblaRef}>
          <div className="embla__container">
            {list.map((artist) => (
              <div className="embla__slide" key={artist.id}>
                <ProfileCard artist={artist} />
              </div>
            ))}
          </div>
        </div>
        {canScrollPrev && <button className="embla__button embla__button--prev" onClick={scrollPrev}>
          <img src={IconArrowPrev} alt="이전 슬라이드" />
        </button>}
        {canScrollNext && <button className="embla__button embla__button--next" onClick={scrollNext}>
          <img src={IconArrowNext} alt="다음 슬라이드" />
        </button>}
      </DonationContainer>
      
    </>
  )

};

export default Donation;