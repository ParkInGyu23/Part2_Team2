import { DonationContainer, DonationHeader, CarouselContainer } from '../../../styles/pages/list/Donation';
import { T2 } from '../../../styles/Typography';
import useEmblaCarousel from 'embla-carousel-react';
import IconArrowPrev from '../../../images/BtnArrowPrev.svg';
import IconArrowNext from '../../../images/BtnArrowNext.svg';
import ProfileCard from './components/ProfileCard';
import { useEffect, useState, useCallback } from 'react';
import { getDonations } from "../../../apis/donation";

const Donation = () => {
  const [donationsData, setDonationsData] = useState([]);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: false,
    align: 'start',
    slidesToScroll: 'auto',
  });

  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getDonations({ pageSize: 10 }); 
        setDonationsData (response.list); 
      } catch (error) {
        console.error("후원 목록을 불러오지 못했습니다.", error);
      }
    };
    fetchData();
  }, []);

  const updateButtons = useCallback(() => {
    if (!emblaApi) return;
    setCanScrollPrev(emblaApi.canScrollPrev());
    setCanScrollNext(emblaApi.canScrollNext());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;

    emblaApi.reInit();
    updateButtons();

    emblaApi.on('select', updateButtons);
    emblaApi.on('reInit', updateButtons);

    return () => {
      emblaApi.off('select', updateButtons);
      emblaApi.off('reInit', updateButtons);
    };
  }, [emblaApi, updateButtons, donationsData]); 

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

    

  return (
    <>
      <DonationContainer>
        <DonationHeader>
          <T2>후원을 기다리는 조공</T2>
        </DonationHeader>
        <CarouselContainer>
          <div className="embla" ref={emblaRef}>
            <div className="embla__container">
              {donationsData.map((donation) => (
              <div className="embla__slide" key={donation.id}>
                <ProfileCard artist={donation} />
              </div>
            ))}
            </div>
          </div>
          {canScrollPrev && (
            <button className="embla__button embla__button--prev" onClick={scrollPrev}>
              <img src={IconArrowPrev} alt="이전 슬라이드" />
            </button>
          )}
          {canScrollNext && (
            <button className="embla__button embla__button--next" onClick={scrollNext}>
              <img src={IconArrowNext} alt="다음 슬라이드" />
            </button>
          )}
        </CarouselContainer>
      </DonationContainer>
    </>
  );
};

export default Donation;
