import React from 'react';
import { useBalance } from './hook';

export const BalanceContext = React.createContext<ReturnType<typeof useBalance>>({} as any);

export const BalanceProvider: React.FunctionComponent = ({ children }) => {
  const { balance, increaseBalance, decreaseBalance } = useBalance();

  return (
    <BalanceContext.Provider value={{ balance, increaseBalance, decreaseBalance }}>
      {children}
    </BalanceContext.Provider>
  )
}
