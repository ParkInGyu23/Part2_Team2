import { ProgressContainer } from '../../../../styles/pages/List/Donation.styled';
// import IconCredit from '../../../../images/IconCredit';
import IconCredit from '../../../../assets/images/IconCredit';
import { palette } from '../../../../styles/Palette.styled';

const ProgressBar = ({ data }) => {
  if (!data) return null;
  const percentage = (data.receivedDonations / data.targetDonation) * 100;

  const getRemainingDays = (deadline) => {
    const now = new Date();
    const deadlineDate = new Date(deadline);
    const diffTime = deadlineDate - now;
    return diffTime > 0 ? Math.ceil(diffTime / (1000 * 60 * 60 * 24)) : 0;
  };

  const remainingDays = getRemainingDays(data.deadline);

  return (
    <ProgressContainer>
      <div className="status">
        <span className="amount">
          <IconCredit width={12} height={12} color={palette.primary} />{' '}
          {data.receivedDonations.toLocaleString()}
        </span>
        <span className="deadline">
          {remainingDays > 0 ? `${remainingDays}일 남음` : '기한 만료'}
        </span>
      </div>
      <div className="bar-bg">
        <div className="bar-fill" style={{ width: `${percentage}%` }}></div>
      </div>
    </ProgressContainer>
  );
};

export default ProgressBar;
