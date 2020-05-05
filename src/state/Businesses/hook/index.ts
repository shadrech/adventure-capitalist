import React from 'react';
import { reducer, Actions } from './reducer';
import defaultData from './data';

// const cachedData = localStorage.getItem('BUSINESSES');
// const initialValue = cachedData ? JSON.parse(cachedData) : defaultData;
const initialValue = defaultData;

export default function() {
  const [state, originalDispatch] = React.useReducer(reducer, initialValue);
  const dispatch: React.Dispatch<Actions> = (...args) => {
    originalDispatch(...args);
    // localStorage.setItem('BUSINESSES', JSON.stringify(state));
  }
  
  return { state, dispatch };
}
