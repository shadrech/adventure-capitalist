import React from 'react';
import { BusinessData } from './types';
import useBusiness from './hook';
import { Actions } from './hook/reducer';

const BusinessContext = React.createContext<Record<string, BusinessData>>({});
const BusinessDispatchContext = React.createContext<React.Dispatch<Actions>>(() => null);

export const useBusinessContext = () => {
  const context = React.useContext(BusinessContext)
  if (typeof context === undefined) {
    throw new Error('Cannot use `useBusinessContext` outside a BusinessProvider')
  }
  return context
}

export const useBusinessDispatchContext = () => {
  const context = React.useContext(BusinessDispatchContext)
  if (typeof context === undefined) {
    throw new Error('Cannot use `useBusinessDispatchContext` outside a BusinessProvider')
  }
  return context
}

export const BusinessProvider: React.FunctionComponent = ({ children }) => {
  const { state, dispatch } = useBusiness();

  return (
    <BusinessContext.Provider value={state}>
      <BusinessDispatchContext.Provider value={dispatch}>
        {children}
      </BusinessDispatchContext.Provider>
    </BusinessContext.Provider>
  )
}
