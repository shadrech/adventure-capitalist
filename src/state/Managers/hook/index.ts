import React from 'react';
import { reducer, Actions, State } from './reducer';
import defaultData from './data';
import { appCache } from '../../../AppCache';

const initialValue = appCache.getItem<State>('MANAGERS') || defaultData;

export default function() {
  const [managers, originalDispatch] = React.useReducer(reducer, initialValue);

  const dispatch: React.Dispatch<Actions> = (...args) => {
    originalDispatch(...args);
    appCache.setItem('MANAGERS', managers);
  }
  
  return { managers, dispatch };
}
