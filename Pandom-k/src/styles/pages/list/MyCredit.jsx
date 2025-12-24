import styled from 'styled-components';
import { palette } from '../../Palette';
import { device } from '../../Theme';
import IconCredit from '../../../images/IconCredit';

export const MyCreditContainer = styled.section`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  border: 1px solid rgba(241, 238, 249, 0.8);
  border-radius: 8px;
  padding: 33px 78px;

   @media (max-width: 1024px) {
      
    } 
  @media ${device.tablet} {
    padding: 30px 64px; 
  }

  @media ${device.mobile} {
    padding: 15px 20px;
  }
`;

export const CreditInfo = styled.div`
  display:flex;
  flex-direction: column;
  gap: 14px;
`;

export const CreditTitle = styled.h2`
  color: rgba(255, 255, 255, 0.6);
  font-size: 16px;
  font-weight: 400;  

  @media ${device.mobile} {
    font-size: 12px;
  } 
`;

export const CreditPoint = styled.span`
  display: flex;
  gap: 4px;
  align-items: center;
  color: rgba(255, 255, 255, 0.87);
  font-size: 24px;
  font-weight: 700;
  @media ${device.mobile} {
    font-size: 20px;
  } 
`;

export const ChargeButton = styled.button`
  background: none;
  border: none;
  font-size: 16px;
  color: ${palette.primary};
  font-weight: 700;
  @media ${device.mobile} {
    font-size: 13px;
  }
`
export const ReponsiveIconCredit = styled(IconCredit)`
  @media ${device.mobile} {
    width: 11px;
    height: 15px;
  } 

`