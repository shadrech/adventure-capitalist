import React from 'react';
import { GoldFloor, Balance, Wrapper } from './styles';
import goldFloor from '../../assets/gold_floor.png';

interface Props {}

export const BottomSection: React.FunctionComponent<Props> = () => {
  const balance = 3256;

  return (
    <Wrapper>
      <Balance>${balance}</Balance>
      <GoldFloor src={goldFloor} />
    </Wrapper>
  );
};
