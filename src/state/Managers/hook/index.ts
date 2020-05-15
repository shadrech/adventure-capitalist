import React, { useEffect } from 'react';
import { reducer, State } from './reducer';
import defaultData from './data';
import { appCache } from '../../../AppCache';

const initialValue = appCache.getItem<State>('MANAGERS') || defaultData;

export default function() {
  const [managers, dispatch] = React.useReducer(reducer, initialValue);

  useEffect(() => {
    appCache.setItem('MANAGERS', managers);
  }, [managers])
  
  return { managers, dispatch };
}
