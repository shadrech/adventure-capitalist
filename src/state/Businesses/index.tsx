import React from 'react';
import { BusinessData } from './types';
import useBusiness from './hook';
import { Actions } from './hook/reducer';

/**
 * Hello my peeps
 * @param Hello World
 */
export const BusinessContext = React.createContext<Record<string, BusinessData>>({});
export const BusinessDispatchContext = React.createContext<React.Dispatch<Actions>>(() => null);

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
