import { ListContainer, ListItem, IdolInfo, ImgProfile, RankText, NameText, VoteText } from '../../../../styles/pages/list/MonthlyChart';

// idols: 화면에 보여줄 전체 목록 (부모가 이미 합쳐서 줌)
const IdolList = ({ idols }) => {
  return (
    <ListContainer>
      {idols.map((idol, index) => (
        <ListItem key={idol.id}>
          <IdolInfo>
            <ImgProfile>
              <img src={idol.profilePicture} className="profileImg" alt={idol.name} />  
            </ImgProfile>
            <RankText>{index + 1}</RankText>
            <NameText>
              <strong>{idol.group}</strong>
              {idol.name}
            </NameText>
          </IdolInfo>
          <VoteText>{idol.totalVotes?.toLocaleString()}표</VoteText>
        </ListItem>
      ))}
    </ListContainer>
  );
};

export default IdolList;