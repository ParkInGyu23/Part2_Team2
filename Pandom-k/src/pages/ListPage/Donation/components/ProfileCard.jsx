import { CardContainer, ThumbnailBox, SupportButton, CardDetails } from '../../../../styles/pages/list/Donation';
import ProgressBar from './ProgressBar'; 

const ProfileCard = ({ artist }) => {
  if (!artist || !artist.idol) return null;

  return (
    <CardContainer>
      <ThumbnailBox>
        <div className="overlay-gradient"></div>
        {/* <img src="" alt="" /> */}
        <SupportButton $Full>후원하기</SupportButton>
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