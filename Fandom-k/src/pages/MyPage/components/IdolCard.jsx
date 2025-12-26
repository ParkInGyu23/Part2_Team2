import CardWrap from '../../../styles/pages/MyPage/IdolCard.styled.js';
import deleteButton from '../../../assets/icons/IconCheck.svg';
import IdolImg from './IdolImg.jsx';
import { T10, T12 } from '../../../styles/TypoGraphy.styled.js';

const IdolCard = ({ src, isChecked, onSelected, showCloseButton, onRemove, idol }) => {
  return (
    <CardWrap>
      <IdolImg src={src} isChecked={isChecked} onSelected={onSelected} />
      {showCloseButton && (
        <img
          src={deleteButton}
          className="removeBtn"
          onClick={(e) => {
            e.stopPropagation();
            onRemove();
          }}
        />
      )}
      <T10 className="idolName">{idol.name}</T10>
      <T12 className="idolGroup">{idol?.group}</T12>
    </CardWrap>
  );
};

export default IdolCard;
