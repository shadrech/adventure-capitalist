import React from 'react';
import { GoldFloor, BalanceH1, Wrapper } from './styles';
import goldFloor from '../../assets/gold_floor.png';
import { useBalanceContext } from '../../state/Balance/index';
import { priceIntl } from '../../helpers';

interface Props {}

export const BottomSection: React.FunctionComponent<Props> = () => {
  const balance = useBalanceContext();

  return (
    <Wrapper>
      <BalanceH1>{priceIntl.format(balance)}</BalanceH1>
      <GoldFloor src={goldFloor} />
    </Wrapper>
  );
};
