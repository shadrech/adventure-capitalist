import { ActionMap } from '../../../helpers';

type Payloads = {
  DECREASE: { amount: number };
  INCREASE: { amount: number; };
}

export type Actions = ActionMap<Payloads>[keyof ActionMap<Payloads>];

export const reducer = (balance: number, action: Actions) => {
  switch (action.type) {
    case 'DECREASE': {
      return balance - action.payload.amount;
    }
    case 'INCREASE': {
      return balance + action.payload.amount;
    }
    default:
      return balance;
  }
}
