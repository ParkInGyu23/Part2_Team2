import { createContext, useContext, useState, useEffect } from 'react';
import { getStorage, setStorage } from '../utils/LocalStorage'; 

const CreditContext = createContext();

export const CreditProvider = ({ children }) => {
  const [credit, setCredit] = useState(0);

  useEffect(() => {
    const savedCredit = getStorage('credit', 0);
    setCredit(savedCredit);
  }, []);

  const updateCredit = (newCredit) => {
    setStorage('credit', newCredit); 
    setCredit(newCredit);           
  };

  return (
    <CreditContext.Provider value={{ credit, updateCredit }}>
      {children}
    </CreditContext.Provider>
  );
};

// 값을 읽어올 때 
export const useCreditValue = () => {
  const context = useContext(CreditContext);
  if (!context) {
    throw new Error('CreditProvider 안에서 사용해야 합니다.');
  }
  return context.credit;
};

// 값을 변경할 때
export const useCreditActions = () => {
  const context = useContext(CreditContext);
  if (!context) {
    throw new Error('CreditProvider 안에서 사용해야 합니다.');
  }
  return context.updateCredit;
};