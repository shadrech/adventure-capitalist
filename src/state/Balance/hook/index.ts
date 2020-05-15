import React, { useEffect } from 'react';
import { appCache } from '../../../AppCache';
import { reducer } from './reducer';

const initialValue = appCache.calculateEarningsSinceLogout();

const useBalance = () => {
  const [balance, dispatch] = React.useReducer(reducer, initialValue);

  useEffect(() => {
    appCache.setItem('BALANCE', balance);
  })

  return { balance, dispatch };
}

export default useBalance;
