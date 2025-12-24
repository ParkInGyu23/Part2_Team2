import { MyCreditContainer, CreditInfo, CreditTitle, CreditPoint, ChargeButton, ReponsiveIconCredit } from '../../../styles/pages/list/MyCredit';
import { palette } from '../../../styles/Palette';
import IconCredit from '../../../images/IconCredit';

const MyCredit = () => {
  return (
    <>
      <MyCreditContainer>
        <CreditInfo>
          <CreditTitle>내 크레딧</CreditTitle>
          <CreditPoint>
            <ReponsiveIconCredit width={16} color={palette.primary} />
            10,000
          </CreditPoint>      
        </CreditInfo>
        <ChargeButton>충전하기</ChargeButton>
      </MyCreditContainer>
    </>
  )

};

export default MyCredit;