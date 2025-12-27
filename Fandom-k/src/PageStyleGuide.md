import styled from 'styled-components';
import { useState } from 'react';
import { palette } from './styles/Palette.styled';
import {
  T1,
  T2,
  T3,
  T4,
  T5,
  T6,
  T7,
  T8,
  T9,
  T10,
  T11,
  T12,
  T13,
  T14,
  T15,
  T16,
  T17,
} from './styles/TypoGraphy.styled';
import Button from './styles/Button.styled';
import { Input, InputError, InputWithIcon, RadioButton } from './styles/Input.styled';
import IconCredit from './assets/images/IconCredit';
import Header from './pages/include/Header';

function PageStyleGuide() {
  const [selectedRadio, setSelectedRadio] = useState('radio1'); // 라디오 선택 필요 useState
  const hasError = true; // 인풋 에러 필요

  return (
    <>
      <Header />
      <DesignWrap>
        <div id="font">
          <h2>FONT</h2>
          <Note>
            한글 폰트는 'Pretendard' 사용한다.
            <br />
            * 별도의 지정을 하지 않아도 자동으로 적용됩니다.
            <br />* 사용방법 예시 : {'<T1>좋아하는 아이돌에게 쉽게 조공해 보세요</T1>'}
          </Note>
          <FlexBox column>
            <T1>T1 - Pretendard / Bold/ 26pt</T1>
            <T2>T2 - Pretendard / Bold/ 24pt / Line height 26</T2>
            <T3>T3 - Pretendard / Bold / 20pt</T3>
            <T4>T4 - Pretendard / Semi-bold / 18pt</T4>
            <T5>T5 - Pretendard / Medium / 18pt</T5>
            <T6>T6 - Pretendard / Bold/ 16pt / Line height 26</T6>
            <T7>T7 - Pretendard / Bold / 16pt / Line height 26 / Letter spacing 5%</T7>
            <T8>T8 - Pretendard / Medium / 16pt</T8>
            <T9>T9 - Pretendard / Regular / 16px</T9>
            <T10>T10 - Pretendard / Regular / 16px / Line height 18px / Letter spacing -0.17px</T10>
            <T11>T11 - Pretendard / Bold / 15px / Line height 26px</T11>
            <T12>T12 - Pretendard / Bold / 14px / Line height 26px</T12>
            <T13>T13 - Pretendard / Regular / 14px</T13>
            <T14>T14 - Pretendard / Medium / 13px / Line height 26px / Letter spacing 0.02em</T14>
            <T15>T15 - Pretendard / Bold / 13px / Line height 26px / Letter spacing 0.02em</T15>
            <T16>T16 - Pretendard / Medium / 12px</T16>
            <T17>T17 - Pretendard / Medium / 12px / Line height 18px / Letter spacing -0.17px</T17>
          </FlexBox>
        </div>

        <div id="color">
          <h2>COLOR</h2>
          <Note>
            <T1 color="primary">좋아하는 아이돌에게 쉽게 조공해 보세요</T1>
            <br />* 사용방법 예시 :
            {'<T1 color="primary">좋아하는 아이돌에게 쉽게 조공해 보세요</T1>'}
          </Note>
          <FlexBox>
            <CardItem>
              <div
                style={{
                  width: '180px',
                  height: '100px',
                  backgroundColor: palette.primary,
                }}
              />
              <div>
                <T12>primary</T12>
                <T17>#F96D69</T17>
              </div>
            </CardItem>

            <CardItem>
              <div
                style={{
                  width: '180px',
                  height: '100px',
                  backgroundColor: palette.secondary,
                }}
              />
              <div>
                <T12>secondary</T12>
                <T17>#FE5493</T17>
              </div>
            </CardItem>

            <CardItem>
              <div
                style={{
                  width: '180px',
                  height: '100px',
                  backgroundColor: palette.gray50,
                }}
              />
              <div>
                <T12>gray50</T12>
                <T17>#A3A5A8</T17>
              </div>
            </CardItem>

            <CardItem>
              <div
                style={{
                  width: '180px',
                  height: '100px',
                  backgroundColor: palette.gray100,
                }}
              />
              <div>
                <T12>gray100</T12>
                <T17>#828282</T17>
              </div>
            </CardItem>

            <CardItem>
              <div
                style={{
                  width: '180px',
                  height: '100px',
                  backgroundColor: palette.gray200,
                }}
              />
              <div>
                <T12>gray200</T12>
                <T17>#67666E</T17>
              </div>
            </CardItem>

            <CardItem>
              <div
                style={{
                  width: '180px',
                  height: '100px',
                  backgroundColor: palette.gray300,
                }}
              />
              <div>
                <T12>gray300</T12>
                <T17>#8C92AB</T17>
              </div>
            </CardItem>

            <CardItem>
              <div
                style={{
                  width: '180px',
                  height: '100px',
                  backgroundColor: palette.black100,
                }}
              />
              <div>
                <T12>black100</T12>
                <T17>#181D26</T17>
              </div>
            </CardItem>

            <CardItem>
              <div
                style={{
                  width: '180px',
                  height: '100px',
                  backgroundColor: palette.black200,
                }}
              />
              <div>
                <T12>black200</T12>
                <T17>#02000E</T17>
              </div>
            </CardItem>

            <CardItem>
              <div
                style={{
                  width: '180px',
                  height: '100px',
                  backgroundColor: palette.black,
                }}
              />
              <div>
                <T12>black</T12>
                <T17>#000</T17>
              </div>
            </CardItem>

            <CardItem>
              <div
                style={{
                  width: '180px',
                  height: '100px',
                  backgroundColor: palette.white50,
                }}
              />
              <div>
                <T12>white50</T12>
                <T17>#F7F7F8</T17>
              </div>
            </CardItem>

            <CardItem>
              <div
                style={{
                  width: '180px',
                  height: '100px',
                  backgroundColor: palette.white,
                }}
              />
              <div>
                <T12>white</T12>
                <T17>#fff</T17>
              </div>
            </CardItem>

            <CardItem>
              <div
                style={{
                  width: '180px',
                  height: '100px',
                  backgroundColor: palette.error,
                }}
              />
              <div>
                <T12>error</T12>
                <T17>#FF2626</T17>
              </div>
            </CardItem>
          </FlexBox>
        </div>

        <div id="button">
          <h2>BUTTON</h2>
          <T12>1. Type</T12>
          <Note>
            * 사용방법 예시 :{'<Button>r기본형</Button>'}
            <br />* 사용방법 예시 :{'<Button Round>라운드형</Button>'}
          </Note>

          <FlexBox column>
            <div>
              <T14>기본형</T14>
              <Button>버튼</Button>
            </div>
            <div>
              <T14>라운드형</T14>
              <Button Round>버튼</Button>
            </div>
          </FlexBox>

          <T12>2. Size</T12>
          <Note>
            * 사용방법 예시 :{'<Button Small>작은 버튼</Button>'}
            <br />* 사용방법 예시 :{'<Button>일반 버튼</Button>'}
          </Note>

          <FlexBox column>
            <div>
              <T14>작은 버튼</T14>
              <Button Small>버튼</Button>
            </div>
            <div>
              <T14>일반 버튼</T14>
              <Button>버튼</Button>
            </div>
            <div style={{ width: '100%' }}>
              <T14>Full 버튼</T14>
              <Button Full>Full버튼</Button>
            </div>
          </FlexBox>

          <T12>3. Disabled</T12>
          <Note>
            * 사용방법 예시 :{'<Button Disabled>Disabled 버튼</Button>'}
            <br />* 사용방법 예시 :{'<Button Round Disabled>Disabled 버튼</Button>'}
          </Note>

          <FlexBox column>
            <div>
              <T14>작은 버튼</T14>
              <Button disabled>Disabled 버튼</Button>
            </div>
            <div>
              <T14>일반 버튼</T14>
              <Button Round disabled>
                Disabled 버튼
              </Button>
            </div>
          </FlexBox>

          <T12>4. Icon Type</T12>
          <Note>
            * 사용방법 예시 :{'<Button><IconCredit width={16} />아이콘 버튼</Button>'}
            <br />* 사용방법 예시 :
            {'<Button disabled><IconCredit width={16} />아이콘 Disabled 버튼</Button>'}
          </Note>

          <FlexBox column>
            <div>
              <T14>아이콘 버튼</T14>
              <Button>
                <IconCredit width={16} color={palette.white} />
                아이콘 버튼
              </Button>
            </div>
            <div>
              <T14>아이콘 Disabled 버튼</T14>
              <Button disabled>
                <IconCredit width={16} />
                아이콘 Disabled 버튼
              </Button>
            </div>
          </FlexBox>
        </div>

        <div id="icon">
          <h2>ICON</h2>
          <T12>1. 컬러 및 사이즈 변경시 사용방법</T12>
          <Note>
            * 사용방법 예시 :{'<IconCredit width={16} color={palette.white} />'}
            <br />* 사용방법 예시 :{'<IconCredit width={16} color={palette.primary} />'}
            <br />
            <strong>컬러</strong>
            <br />- Palette 지정시 : color={'{palette.white}'}
            <br />- 직접 지정시 : color=#ffcc33
            <br />
            <strong>사이즈</strong>
            <br />- 변경 사이즈 : width={16} height={16}
          </Note>
          <FlexBox>
            <IconCredit width={16} color={palette.white} />
            <IconCredit width={16} color={palette.primary} />
          </FlexBox>
        </div>

        <div id="form">
          <h2>FORM</h2>
          <T12>1. 라디오 버튼</T12>
          <Note>
            * 사용방법 예시 :
            {
              '<RadioButton id="radio1" name="radio" checked={selectedRadio === "radio1"} onChange={() => setSelectedRadio("radio1")} />'
            }
            <br />
            ** 중요사항 : {'const [selectedRadio, setSelectedRadio] = useState("radio1");'}{' '}
            사용해야함.
          </Note>
          <FlexBox>
            <RadioButton
              id="radio1"
              name="radio"
              checked={selectedRadio === 'radio1'}
              onChange={() => setSelectedRadio('radio1')}
            />
            <RadioButton
              id="radio2"
              name="radio"
              checked={selectedRadio === 'radio2'}
              onChange={() => setSelectedRadio('radio2')}
            >
              라벨이 있을 경우
            </RadioButton>
          </FlexBox>

          <T12>2. Input Text</T12>
          <Note>
            * 사용방법 예시 :{'<InputWithIcon type="text" placeholder="아이콘이 있는 인풋" />'}
          </Note>
          <FlexBox column>
            <Input type="text" width={200} placeholder="200px 인풋" />
            <Input type="text" placeholder="기본 인풋" />
            <InputWithIcon type="text" placeholder="아이콘이 있는 인풋" />
            <InputWithIcon
              type="text"
              placeholder="에러 인풋"
              error={hasError}
              errorMessage="갖고 있는 크레딧보다 더 많이 후원할 수 없어요"
            />
          </FlexBox>
        </div>
      </DesignWrap>
    </>
  );
}

export default PageStyleGuide;

const DesignWrap = styled.div`
  display: flex;
  flex-direction: column;
  gap: 50px;
  margin: 20px;

  > div {
    display: flex;
    flex-direction: column;
    gap: 20px;

    > h2 {
      font-size: 1.25rem;
      font-weight: 700;
      color: ${palette.primary};
      padding-bottom: 10px;
      border-bottom: 1px solid ${palette.gray200};
    }
  }
`;

const Note = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  font-size: 0.875rem;
  line-height: 1.5;
  text-align: left;
  padding: 10px 20px;
  border: 1px solid ${palette.gray200};

  &:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 5px;
    height: 100%;
    background-color: ${palette.primary};
    content: '';
  }
`;

const FlexBox = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 10px;

  > div {
    display: flex;
    align-items: center;
    gap: 10px;
  }
`;

const CardItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start !important;
  gap: 0 !important;
  border-radius: 10px;
  border: 1px solid ${palette.gray200};
  overflow: hidden;

  > div:last-child {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 5px;
    padding: 10px;
  }
`;
