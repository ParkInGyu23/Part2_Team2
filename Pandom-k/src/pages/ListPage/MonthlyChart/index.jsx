import { MonthlyChartContainer, ChartHeader, VoteButton, VoteIcon, TabGroup, ChartTabButton, TabContent } from '../../../styles/pages/list/MonthlyChart'
import { T2 } from '../../../styles/Typography';
import IconBtnChart from '../../../images/IconBtnChart.png';
import { useState, useEffect } from 'react';
import IdolList from './components/IdolList';
import { getCharts } from "../../../apis/chart";

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
  const [chartData, setChartData] = useState([]);
  const currentTab = TABS_DATA.find(tab => tab.id === activeTab); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getCharts({ gender: currentTab.type });
        setChartData(response.idols); 
      } catch (error) {
        console.error("데이터 로딩 실패", error);
      }
    };

    fetchData();
  }, [currentTab.type]);

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
          <IdolList idols={chartData} />
        </TabContent>  
      </MonthlyChartContainer>

    </>
  )

};

export default MonthlyChart;