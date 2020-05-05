import React from 'react';
import { reducer, Actions, State } from './reducer';
import defaultData from './data';
import { appCache } from '../../../AppCache';

const initialValue = appCache.getItem<State>('BUSINESSES') || defaultData;

export default function() {
  const [businesses, originalDispatch] = React.useReducer(reducer, initialValue);
  const dispatch: React.Dispatch<Actions> = (...args) => {
    originalDispatch(...args);
    appCache.setItem('BUSINESSES', businesses);
  }
  
  return { businesses, dispatch };
}
