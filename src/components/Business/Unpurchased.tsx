import React from 'react';
import { BusinessData } from '../../state/Businesses/types';
import { UnpurchasedDiv, UnpurchasedSvg } from './styles';
import { ReactComponent as PurchaseSVG } from '../../assets/purchase_bg.svg';
import { unpurchasedIntl } from '../../helpers';
import { useBalanceContext } from '../../state/Balance';

interface Props {
  business: BusinessData;
}

export const Unpurchased: React.FunctionComponent<Props> = ({ business }) => {
  const balance = useBalanceContext();

  return (
    <UnpurchasedDiv>
      <p>{business.name}</p>
      <p>{unpurchasedIntl.format(business.price)}</p>
      {balance >= business.price ?
        <PurchaseSVG className="purchase" />
        : <UnpurchasedSvg />
      }
    </UnpurchasedDiv>
  )
}
