import styled from 'styled-components';
import { palette } from '../../Palette';
import Button from '../../Button';
import { device } from '../../Theme';

export const MonthlyChartContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  box-sizing: border-box;
  color: ${palette.white};
  padding-top: 50px;
  @media ${device.mobile} {
    padding-top: 40px;
  } 
`;

export const ChartHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 24px;
  @media ${device.mobile} {
    margin-bottom: 16px;
  } 
`;

export const VoteButton = styled(Button)`
  display: inline-flex;  
  align-items: center;
  padding:4px 14px;
  gap: 4px; 
  @media ${device.mobile} {
    font-size: 13px;
  }            
`;

export const VoteIcon = styled.img`
  width: 24px;
  height: 24px;
  vertical-align: middle;
`;

export const TabGroup = styled.div`
  display: flex;
  width:100%;
  height: 42px;
  margin-bottom: 24px;
`;

export const ChartTabButton = styled.button`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  background: ${({ $active }) =>
    $active ? 'rgba(255, 255, 255, 0.1)' : 'transparent'};
  border: none;
  border-bottom: ${({ $active }) =>
    $active ? '1px solid #fff' : '1px solid transparent'};
  color: ${({ $active }) => ($active ? '#fff' : '#828282')};
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.17px;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    color 0.3s ease,
    border-bottom-color 0.3s ease,
    transform 0.12s ease,
    box-shadow 0.12s ease;

  &:hover {
    color: #fff;
  }

  &:active {
    transform: translateY(1px);
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.3);
  }
`;

export const TabContent = styled.div`
  display: flex;
  flex-direction: column;
`

// IdolList 컴포넌트
export const ListContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr); 
  gap: 20px 40px; 
  width: 100%;

  @media (max-width: 1024px) {
    grid-template-columns: 1fr;
    gap: 15px;
  }
`;

export const ListItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 12px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1); 
`;

export const IdolInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;
//임시 프로필 이미지 
export const ImgProfile = styled.img`
  display:inline-flex;  
  width:70px;
  height:70px;
  background-color: gray;
  border-radius: 50%;
  object-fit: cover;
`

export const RankText = styled.span`
  font-size: 16px;
  font-weight: 400;
  color: ${palette.primary};
  width:16px;
  @media ${device.mobile} {
    font-size: 14px;
  }
`;

export const NameText = styled.span`
  font-size: 16px;
  font-weight: 500;
  color: ${palette.white};
  @media ${device.mobile} {
    font-size: 14px;
  }
  
  strong {
    font-weight: 500;
    margin-right: 4px;
    color: ${palette.white};
  }
`;

export const VoteText = styled.span`
  font-size: 16px;
  color: rgba(255, 255, 255, 0.6);
  white-space: nowrap; 
  @media ${device.mobile} {
    font-size: 14px;
  }
`;

export const MoreButton = styled.button`
  width: 326px;
  background-color: rgba(255, 255, 255, 0.1);
  color: ${palette.white};
  padding: 10px 20px;
  border: 1px solid rgba(241, 238, 249, 0.8);
  border-radius: 3px;
  margin: 51px auto 51px;
  font-size:14px;
  font-weight: 700;
  @media ${device.mobile} {
    margin: 27px 0;
  }
  @media ${device.mobile} {
    margin: 33px 0;
  }

`





