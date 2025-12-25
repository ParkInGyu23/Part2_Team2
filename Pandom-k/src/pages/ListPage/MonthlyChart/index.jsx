import { useState } from 'react';
import { MonthlyChartContainer, ChartHeader, VoteButton, VoteIcon, TabGroup, ChartTabButton, TabContent, MoreButton } from '../../../styles/pages/list/MonthlyChart'; // MoreButton 스타일 추가 필요
import { T2 } from '../../../styles/Typography';
import IconBtnChart from '../../../images/IconBtnChart.png';
import IdolList from './components/IdolList';
import { useCharts } from '../../../hooks/useCharts'; 

const TABS_DATA = [
  { id: 'femaleIdol', label: '이달의 여자 아이돌', type: 'female' },
  { id: 'maleIdol', label: '이달의 남자 아이돌', type: 'male' },
];

const MonthlyChart = () => {
  const [activeTabId, setActiveTabId] = useState(TABS_DATA[0].id);
  const currentTabType = TABS_DATA.find(tab => tab.id === activeTabId)?.type || 'female';
  const { charts, loadMore, hasMore, loading } = useCharts(currentTabType);

  return (
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
            $active={activeTabId === tab.id}
            onClick={() => setActiveTabId(tab.id)}
          >
            {tab.label}
          </ChartTabButton>
        ))}
      </TabGroup>

      <TabContent>
        <IdolList idols={charts} />
        {hasMore && !loading && (
          <MoreButton onClick={loadMore}>더보기</MoreButton>
        )}
      </TabContent>  
    </MonthlyChartContainer>
  );
};

export default MonthlyChart;