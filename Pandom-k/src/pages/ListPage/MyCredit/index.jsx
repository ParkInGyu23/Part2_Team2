import { MyCreditContainer, CreditInfo, CreditTitle, CreditPoint, ChargeButton } from '../../../styles/pages/list/MyCredit';
import { palette } from '../../../styles/Palette';
import IconCredit from '../../../images/IconCredit';

const MyCredit = () => {
  return (
    <>
      <MyCreditContainer>
        <CreditInfo>
          <CreditTitle>내 크레딧</CreditTitle>
          <CreditPoint>
            <IconCredit width={16} color={palette.primary} />
            10,000
          </CreditPoint>      
        </CreditInfo>
        <ChargeButton>충전하기</ChargeButton>
      </MyCreditContainer>
    </>
  )

};

export default MyCredit;