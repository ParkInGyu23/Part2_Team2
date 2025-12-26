import checkIcon from '../../../assets/icons/IconCheck.svg';
import ImgBorder from '../../../styles/IdolImg.styled';

const IdolImg = ({ src, isChecked, onSelected }) => {
  return (
    <ImgBorder $isChecked={isChecked} onClick={onSelected}>
      <img src={src} className="profileImg" alt="profile" />
      {/* 체크되었을 때만 핑크 오버레이 표시 */}
      {isChecked && (
        <div className="idolOverlay">
          <img src={checkIcon} className="checkedIcon" alt="checked" />
        </div>
      )}
    </ImgBorder>
  );
};

export default IdolImg;
