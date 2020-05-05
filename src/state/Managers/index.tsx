import React from 'react';
import useManager from './hook';

const ManagerContext = React.createContext<ReturnType<typeof useManager>>({} as any);

export const useManagerContext = () => {
  const context = React.useContext(ManagerContext)
  if (typeof context === undefined) {
    throw new Error('Cannot use `useManagerContext` outside a ManagerProvider')
  }
  return context
}

export const ManagerProvider: React.FunctionComponent = props => {
  const value = useManager();

  return (
    <ManagerContext.Provider value={value} {...props} />
  )
}
