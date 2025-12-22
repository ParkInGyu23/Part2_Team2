import Header from '../include/Header';
import MyCredit from './MyCredit';
import Donation from './Donation';
import MonthlyChart from './MonthlyChart';
import { ListContainer } from '../../styles/pages/list/List';
import mockData from './Donation/mock.json';

const ListPage = () => {
  return (
    <>
      <Header />
      <ListContainer>
        <MyCredit />
        <Donation apiData={mockData} />
        <MonthlyChart />
      </ListContainer>
    </>
  )        

};

export default ListPage; 