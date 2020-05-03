import { ActionMap } from '../../../helpers';
import { BusinessData } from '../types';

const MULTIPLIER = 1.3;

export type State = Record<string, BusinessData>
type Payloads = {
  BUY: { quantity: number };
  INCREASE_PROFIT: { amount: number; multiply?: boolean; };
}

export type Actions = ActionMap<Payloads>[keyof ActionMap<Payloads>];

export const reducer = (state: State, action: Actions) => {
  switch (action.type) {
    case 'BUY': {
      const { profit, price, quantityPurchased } = state[action.id];
      const qty = action.payload.quantity;
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          price: price * (qty * MULTIPLIER),
          quantityPurchased: quantityPurchased + qty,
          profit: profit * (MULTIPLIER * qty)
        }
      };
    }
    case 'INCREASE_PROFIT': {
      const currentProfit = state[action.id].profit;
      const profit = action.payload.multiply ? currentProfit * action.payload.amount : currentProfit + action.payload.amount;
      return {
        ...state,
        [action.id]: {
          ...state[action.id],
          profit
        }
      }
    }
    default:
      return state;
  }
}
