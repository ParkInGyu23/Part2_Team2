import { useState } from 'react';
import BaseModal from '../../../../components/BaseModal';
import {
  CheckIcon,
  GuideLine,
  Highlight,
  IdolImgProfile,
  IdolImgWrap,
  IdolInfo,
  IdolItem,
  IdolListContent,
  ModalTitle,
  Name,
  RadioCircle,
  RankAndImg,
  RankNumber,
  SelectedOverlay,
  ShortageImg,
  VoteAmount,
  VoteButton,
} from '../../../../styles/Modal/VoteModal.styled';
import { palette } from '../../../../styles/Palette.styled';
import CheckImg from '../../../../assets/icons/IconCheck.svg';
// import CreditImg from '../../../../assets/icons/IconCredit.svg';
import IconCredit from '../../../../assets/images/IconCredit';
import { useCreditActions, useCreditValue } from '../../../../contexts/CreditContext';
import { voteIdol } from '../../../../API/Chart';
import { useEffect } from 'react';

function VoteModal({ isOpen, onClose, idols, onVote }) {
  const credit = useCreditValue();
  const updateCredit = useCreditActions();

  const [selectedIdol, setSelectedIdol] = useState(null);
  const [ModalStep, setModalStep] = useState('vote');
  const [isSubmitting , setIsSubmitting] = useState(false);
  const modalSize = {
    vote: {
      width: '525px',
    },
    success: {
      width: '360px',
    },
    shortage: {
      width: '360px',
    },
  };

  const handleVote = async () => {
    if (isSubmitting) return;
    if (!selectedIdol) return;
    if (credit < 1000) return setModalStep('shortage');

    try {
      setIsSubmitting(true);

      const result = await voteIdol({ idolId: selectedIdol });
      updateCredit(credit - 1000);
      onVote(result.idol);
      setModalStep('success');
    } catch (e) {
      console.error(e);
    } finally {
      setIsSubmitting(false)
    }
  };

  const handleClose = () => {
    setModalStep('vote');
    setSelectedIdol(null);
    setIsSubmitting(false);
    onClose();
  };

  useEffect(() => {
    if (!isOpen) {
      setModalStep('vote');
      setSelectedIdol(null);
      setIsSubmitting(false);
    }
  }, [isOpen]);


  if (!isOpen || !idols) return null;
  const genderTitle = idols[0]?.gender === 'female' ? '여자' : '남자';

  return (
    <BaseModal isOpen={isOpen} onClose={onClose} $width={modalSize[ModalStep].width}>
      {ModalStep === 'vote' && (
        <>
          <ModalTitle>이달의 {genderTitle} 아이돌</ModalTitle>
          <IdolListContent>
            {idols.map((idol, index) => (
              <IdolItem key={idol.id} onClick={() => setSelectedIdol(idol.id)}>
                <RankAndImg>
                  <IdolImgWrap>
                    <IdolImgProfile src={idol.profilePicture} $active={selectedIdol === idol.id} />
                    <SelectedOverlay $active={selectedIdol === idol.id} />
                    <CheckIcon src={CheckImg} $active={selectedIdol === idol.id} />
                  </IdolImgWrap>
                  <RankNumber>{index + 1}</RankNumber>
                </RankAndImg>

                <IdolInfo>
                  <Name>
                    {idol.group} {idol.name}
                  </Name>
                  <VoteAmount>{idol.totalVotes}표</VoteAmount>
                </IdolInfo>

                <RadioCircle $active={selectedIdol === idol.id} />
              </IdolItem>
            ))}
          </IdolListContent>
          <VoteButton disabled={!selectedIdol || isSubmitting} onClick={handleVote}>
            {isSubmitting ? '투표 중...' : '투표하기'}
          </VoteButton>
          <GuideLine>
            투표 시 <Highlight>1000 크레딧</Highlight>이 소모됩니다.
          </GuideLine>
        </>
      )}
      {ModalStep === 'success' && (
        <>
          {/* <ShortageImg src={CreditImg} /> */}
          <IconCredit height={111} shadowL />
          <p>투표가 완료되었습니다!</p>
          <VoteButton onClick={handleClose}>확인</VoteButton>
        </>
      )}
      {ModalStep === 'shortage' && (
        <>
          {/* <ShortageImg src={CreditImg} /> */}
          <IconCredit height={111} shadowL />
          <p>
            앗! 투표하기 위한 <Highlight>크레딧</Highlight>이 부족해요
          </p>
          <VoteButton onClick={handleClose}>확인</VoteButton>
        </>
      )}
    </BaseModal>
  );
}

export default VoteModal;
