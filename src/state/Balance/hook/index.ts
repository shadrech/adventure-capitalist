import React from 'react';
import { reducer } from './reducer';

const initialValue = 0;

/** Balance singleton */
export let balanceCache = Number(initialValue);

const useBalance = () => {
  const [balance, dispatch] = React.useReducer(reducer, initialValue);

  return { balance, dispatch };
}

export default useBalance;
