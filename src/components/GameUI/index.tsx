import React from 'react';
import { SidePanel } from '../SidePanel';
import { BottomSection } from '../BottomSection';
import { MiddleSection } from '../MiddleSection';
import { BusinessProvider } from '../../state/Businesses';
import { BalanceProvider } from '../../state/Balance';
import { Wrapper, Game, BG } from './styles';
import bg from '../../assets/bg.png';

export const GameUI: React.FunctionComponent = () => {
  return (
    <Wrapper>
      <Game>
        <SidePanel />
        <BusinessProvider>
          <MiddleSection />
        </BusinessProvider>
        <BalanceProvider>
          <BottomSection />
        </BalanceProvider>
        <BG src={bg} />
      </Game>
    </Wrapper>
  );
}
