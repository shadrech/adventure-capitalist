import React from 'react';
import useBalance from './hook';
import { Actions } from './hook/reducer';

const BalanceDispatchContext = React.createContext<React.Dispatch<Actions>>({} as any);
const BalanceContext = React.createContext(0);

export const useBalanceContext = () => {
  const context = React.useContext(BalanceContext)
  if (typeof context === undefined) {
    throw new Error('Cannot use `useBalanceContext` outside a BalanceProvider')
  }
  return context
}

export const useBalanceDispatchContext = () => {
  const context = React.useContext(BalanceDispatchContext)
  if (typeof context === undefined) {
    throw new Error('Cannot use `useBalanceDispatchContext` outside a BalanceProvider')
  }
  return context
}

export const BalanceProvider: React.FunctionComponent = ({ children }) => {
  const { balance, dispatch } = useBalance();

  return (
    <BalanceDispatchContext.Provider value={dispatch}>
      <BalanceContext.Provider value={balance}>
        {children}
      </BalanceContext.Provider>
    </BalanceDispatchContext.Provider>
  )
}
