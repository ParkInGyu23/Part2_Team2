import { MonthlyChartContainer, ChartHeader, VoteButton, VoteIcon, TabGroup, ChartTabButton, TabContent } from '../../../styles/pages/list/MonthlyChart'
import { T2 } from '../../../styles/Typography';
import Button from '../../../styles/Button';
import IconBtnChart from '../../../images/IconBtnChart.png';
import { useState } from 'react';
import IdolList from './components/IdolList';

const TABS_DATA = [
  {
    id: 'femaleIdol',
    label: '이달의 여자 아이돌',
    type: 'female',
  },
  {
    id: 'maleIdol',
    label: '이달의 남자 아이돌',
    type: 'male',
  },
];

const MonthlyChart = () => {

  const [activeTab, setActiveTab] = useState(TABS_DATA[0].id);
  const currentTab = TABS_DATA.find(tab => tab.id === activeTab); 

  return (
    <>
      <MonthlyChartContainer>
        <ChartHeader>
          <T2>이달의 차트</T2>
          <VoteButton $Small>
            <VoteIcon src={IconBtnChart} />
            차트 투표하기
          </VoteButton>
        </ChartHeader>
        <TabGroup>
          {TABS_DATA.map(tab => (
            <ChartTabButton
              key={tab.id}
              $active={activeTab === tab.id}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </ChartTabButton>
          ))}
        </TabGroup>
        <TabContent>
          <IdolList type={currentTab?.type} />
        </TabContent>  
      </MonthlyChartContainer>

    </>
  )

};

export default MonthlyChart;