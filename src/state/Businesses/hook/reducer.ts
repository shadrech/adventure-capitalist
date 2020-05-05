import { ActionMap } from '../../../helpers';
import { BusinessData } from '../types';

const MULTIPLIER = 1.3;

export type State = Record<string, BusinessData>
type Payloads = {
  BUY: { id: string; quantity?: number };
  INCREASE_PROFIT: { id: string; amount: number; multiply?: boolean; };
  ACQUIRE_MANAGER: { id: string; };
}

export type Actions = ActionMap<Payloads>[keyof ActionMap<Payloads>];

export const reducer = (state: State, action: Actions) => {
  const { id } = action.payload;

  switch (action.type) {
    case 'BUY': {
      const { profit, price, quantityPurchased } = state[id];
      const qty = action.payload.quantity || 1;
      return {
        ...state,
        [id]: {
          ...state[id],
          price: price * (qty * MULTIPLIER),
          quantityPurchased: quantityPurchased + qty,
          profit: profit * (MULTIPLIER * qty)
        }
      };
    }
    case 'INCREASE_PROFIT': {
      const currentProfit = state[id].profit;
      const profit = action.payload.multiply ? currentProfit * action.payload.amount : currentProfit + action.payload.amount;
      return {
        ...state,
        [id]: {
          ...state[id],
          profit
        }
      }
    }
    case 'ACQUIRE_MANAGER': {
      return {
        ...state,
        [action.payload.id]: {
          ...state[action.payload.id],
          hasManager: true
        }
      }
    }
    default:
      return state;
  }
}
