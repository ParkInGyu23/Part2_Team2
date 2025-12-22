import { ProgressContainer } from '../../../../styles/pages/list/Donation';
import IconCredit from '../../../../images/IconCredit';
import { palette } from '../../../../styles/Palette';

const ProgressBar = ({ data }) => {
  if (!data) return null;
  const percentage = (data.receivedDonations / data.targetDonation) * 100;

  return (
    <ProgressContainer>
      <div className="status">
        <span className="amount"><IconCredit width={12} height={12} color={palette.primary} /> {data.receivedDonations.toLocaleString()}</span>
        <span className="deadline">5일 남음</span>
      </div>
      <div className="bar-bg">
        <div className="bar-fill" style={{ width: `${percentage}%` }}></div>
      </div> 
    </ProgressContainer>
  );
};

export default ProgressBar;