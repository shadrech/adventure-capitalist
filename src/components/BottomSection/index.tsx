import React from 'react';
import { GoldFloor, Balance, Wrapper } from './styles';
import goldFloor from '../../assets/gold_floor.png';
import { BalanceContext } from '../../state/Balance/index';
import { priceIntl } from '../../helpers';

interface Props {}

export const BottomSection: React.FunctionComponent<Props> = () => {
  const { balance } = React.useContext(BalanceContext);

  return (
    <Wrapper>
      <Balance>{priceIntl.format(balance)}</Balance>
      <GoldFloor src={goldFloor} />
    </Wrapper>
  );
};
