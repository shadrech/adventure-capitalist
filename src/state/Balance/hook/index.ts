import React from 'react';
import { appCache } from '../../../AppCache';
import { reducer } from './reducer';
import { Actions } from './reducer';

const initialValue = appCache.calculateEarningsSinceLogout();

const useBalance = () => {
  const [balance, originalDispatch] = React.useReducer(reducer, initialValue);
  const dispatch: React.Dispatch<Actions> = (...args) => {
    originalDispatch(...args);
    appCache.setItem('BALANCE', balance);
  }

  return { balance, dispatch };
}

export default useBalance;
