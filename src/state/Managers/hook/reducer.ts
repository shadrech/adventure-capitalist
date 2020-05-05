import { ActionMap } from '../../../helpers';
import { ManagerData } from '../types';

export type State = ManagerData[]
type Payloads = {
  HIRE: { index: number; };
}

export type Actions = ActionMap<Payloads>[keyof ActionMap<Payloads>];

export const reducer = (state: State, action: Actions) => {
  switch (action.type) {
    case 'HIRE': {
      const newState = [...state];
      newState.splice(action.payload.index, 1);
      return newState;
    }
    default:
      return state;
  }
}
