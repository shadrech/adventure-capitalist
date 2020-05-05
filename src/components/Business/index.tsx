import React from 'react';
import { BusinessData } from '../../state/Businesses/types';
import { Unpurchased } from './Unpurchased';
import { Purchased } from './Purchased';

interface Props {
  business: BusinessData;
}

const Component: React.FunctionComponent<Props> = ({ business }: Props) => {
  return business.quantityPurchased ?
      <Purchased business={business} />
    : <Unpurchased business={business} />
}

export const Business = React.memo(Component);
