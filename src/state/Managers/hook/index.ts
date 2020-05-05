import React from 'react';
import { reducer, Actions } from './reducer';
import defaultData from './data';

// const cachedData = localStorage.getItem('MANAGERS');
// const initialValue = cachedData ? JSON.parse(cachedData) : defaultData;
const initialValue = defaultData;

export default function() {
  const [managers, originalDispatch] = React.useReducer(reducer, initialValue);

  const dispatch: React.Dispatch<Actions> = (...args) => {
    originalDispatch(...args);
    // localStorage.setItem('MANAGERS', JSON.stringify(state));
  }
  
  return { managers, dispatch };
}
