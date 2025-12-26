import { useState } from 'react';
import DonationModal from '../../../../components/donationModal';
import { CardContainer, ThumbnailBox, SupportButton, CardDetails } from '../../../../styles/pages/list/Donation';
import ProgressBar from './ProgressBar'; 

const ProfileCard = ({ artist }) => {
  if (!artist || !artist.idol) return null;
  const [isDonationOpen, setIsDonationOpen] = useState(false);
  const [selectedIdol, setSelectedIdol] = useState(null);

  return (
    <CardContainer>
      <ThumbnailBox>
        <div className="overlay-gradient"></div>
        <img src={artist.idol.profilePicture} alt={artist.idol.name} />
        <SupportButton onClick={() => setIsDonationOpen(true)} $Full>후원하기</SupportButton>
        <DonationModal
        isOpen={isDonationOpen}
        onClose={() => setIsDonationOpen(false)}
        donationData={artist}
        >
        </DonationModal>
      </ThumbnailBox>

      <CardDetails>
        <div className="title">
          <span className="subTitle">{artist.idol.group}</span>
          <h3 className="mainTitle">{artist.title}</h3>
        </div>
        <ProgressBar data={artist} />
      </CardDetails>
    </CardContainer>
  );
};

export default ProfileCard;