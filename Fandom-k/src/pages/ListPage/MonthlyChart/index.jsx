import { useState, useEffect } from 'react';
import {
  MonthlyChartContainer,
  ChartHeader,
  VoteButton,
  VoteIcon,
  TabGroup,
  ChartTabButton,
  TabContent,
  MoreButton,
} from '../../../styles/pages/List/MonthlyChart.styled'; // MoreButton 스타일 추가 필요
import { T2 } from '../../../styles/TypoGraphy.styled';
import IconBtnChart from '../../../assets/images/IconBtnChart.png';
import IdolList from './components/IdolList';
import { useCharts } from '../../../hooks/useChart'
import VoteModal from './components/VoteModal';
import { LoadingContainer, LoadingSpinner } from '../../../styles/Loading.styled';

const TABS_DATA = [
  { id: 'femaleIdol', label: '이달의 여자 아이돌', type: 'female' },
  { id: 'maleIdol', label: '이달의 남자 아이돌', type: 'male' },
];

const MonthlyChart = () => {
  const [activeTabId, setActiveTabId] = useState(TABS_DATA[0].id);
  // const [isLoading, setIsLoading] = useState(true);
  const currentTabType = TABS_DATA.find((tab) => tab.id === activeTabId)?.type || 'female';
  const { charts, setCharts, loadMore, hasMore, loading } = useCharts(currentTabType);
  const [isVoteIdolOpen, setIsVoteIdolOpen] = useState(false);
  const [isInitialLoading, setIsInitialLoading] = useState(true);

  const handleVoteIdol = (updatedIdol) => {
    setCharts((prevCharts) => {
      const updatedCharts = prevCharts.map((idol) =>
        idol.id === updatedIdol.id ? updatedIdol : idol
    );
    return [...updatedCharts].sort((a, b) => b.totalVotes - a.totalVotes);
  });
};


  // 탭이 변경될 때 로딩 상태 초기화
  useEffect(() => {
    setIsInitialLoading(true);
  }, [currentTabType]);

  // 로딩 상태와 데이터에 따라 초기 로딩 상태 업데이트
  useEffect(() => {
    if (loading) {
      setIsInitialLoading(true);
    } else if (charts.length > 0) {
      setIsInitialLoading(false);
    }
  }, [loading, charts.length]);

  return (
    <MonthlyChartContainer>
      <ChartHeader>
        <T2>이달의 차트</T2>
        <VoteButton onClick={() => setIsVoteIdolOpen(true)} $Small>
          <VoteIcon src={IconBtnChart} />
          차트 투표하기
        </VoteButton>
      </ChartHeader>

      <VoteModal
        isOpen={isVoteIdolOpen}
        onClose={() => setIsVoteIdolOpen(false)}
        idols={charts}
        onVote={handleVoteIdol}
      ></VoteModal>

      <TabGroup>
        {TABS_DATA.map((tab) => (
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
        {isInitialLoading ? (
          <LoadingContainer>
            <LoadingSpinner />
            <p>이달의 차트 데이터를 불러오는 중입니다.</p>
          </LoadingContainer>
        ) : (
          <>
            <IdolList idols={charts} />
            {hasMore && !loading && <MoreButton onClick={loadMore}>더보기</MoreButton>}
          </>
        )}
      </TabContent>
    </MonthlyChartContainer>
  );
};

export default MonthlyChart;
