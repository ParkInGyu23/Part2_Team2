import { useState } from 'react';
import DonationModal from './DonationModal';
import {
  CardContainer,
  ThumbnailBox,
  SupportButton,
  CardDetails,
} from '../../../../styles/pages/List/Donation.styled';
import ProgressBar from './ProgressBar';
import { useEffect } from 'react';

const ProfileCard = ({ artist }) => {
  if (!artist || !artist.idol) return null;
  const [isDonationOpen, setIsDonationOpen] = useState(false);
  const [localArtist, setLocalArtist] = useState(artist);

  const handleDonateSuccess = (amount) => {
      setLocalArtist(prev => ({
            ...prev,
            receivedDonations: (prev.receivedDonations || 0) + amount,
            }));
    };
  useEffect(() => {
    setLocalArtist(artist);
  }, [artist]);
  return (
    <CardContainer>
      <ThumbnailBox>
        <div className="overlay-gradient"></div>
        <img src={artist.idol.profilePicture} alt={artist.idol.name} />
        <SupportButton onClick={() => setIsDonationOpen(true)} $Full>
          후원하기
        </SupportButton>
        <DonationModal
          isOpen={isDonationOpen}
          onClose={() => setIsDonationOpen(false)}
          donationData={localArtist}
          onDonateSuccess={handleDonateSuccess}
        ></DonationModal>
      </ThumbnailBox>

      <CardDetails>
        <div className="title">
          <span className="subTitle">{artist.idol.group}</span>
          <h3 className="mainTitle">{artist.title}</h3>
        </div>
        <ProgressBar data={localArtist} />
      </CardDetails>
    </CardContainer>
  );
};

export default ProfileCard;
