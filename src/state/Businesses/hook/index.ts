import React, { useEffect } from 'react';
import { reducer, State } from './reducer';
import defaultData from './data';
import { appCache } from '../../../AppCache';

const initialValue = appCache.getItem<State>('BUSINESSES') || defaultData;

export default function() {
  const [businesses, dispatch] = React.useReducer(reducer, initialValue);

  useEffect(() => {
    appCache.setItem('BUSINESSES', businesses);
  }, [businesses])
  
  return { businesses, dispatch };
}
