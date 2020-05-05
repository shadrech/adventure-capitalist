import React from 'react';
import { BusinessData } from '../../state/Businesses/types';
import { UnpurchasedDiv, UnpurchasedSvg } from './styles';
import { ReactComponent as PurchaseSVG } from '../../assets/purchase_bg.svg';
import { unpurchasedIntl } from '../../helpers';
import { useBalanceContext } from '../../state/Balance';
import { useBusinessDispatchContext } from '../../state/Businesses/index';
import { useBalanceDispatchContext } from '../../state/Balance/index';

interface Props {
  business: BusinessData;
}

export const Unpurchased: React.FunctionComponent<Props> = ({ business }) => {
  const balance = useBalanceContext();
  const balanceDispatch = useBalanceDispatchContext();
  const businessDispatch = useBusinessDispatchContext();
  const onPurchase = () => {
    businessDispatch({ type: 'BUY', payload: { id: business.id } });
    balanceDispatch({ type: 'DECREASE', payload: { amount: business.price } });
  }

  return (
    <UnpurchasedDiv onClick={onPurchase}>
      <p>{business.name}</p>
      <p>{unpurchasedIntl.format(business.price)}</p>
      {balance >= business.price ?
        <PurchaseSVG className="purchase" />
        : <UnpurchasedSvg />
      }
    </UnpurchasedDiv>
  )
}
