import Header from '../include/Header';
import MyCredit from './MyCredit';
import Donation from './Donation';
import MonthlyChart from './MonthlyChart';
import { ListContainer } from '../../styles/pages/List/List.styled';

const ListPage = () => {
  return (
    <>
      <Header />
      <ListContainer>
        <MyCredit />
        <Donation />
        <MonthlyChart />
      </ListContainer>
    </>
  )        

};

export default ListPage; 