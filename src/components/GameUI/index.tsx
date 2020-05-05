import React from 'react';
import { SidePanel } from '../SidePanel';
import { BottomSection } from '../BottomSection';
import { MiddleSection } from '../MiddleSection';
import { BusinessProvider } from '../../state/Businesses';
import { Wrapper, Game, BG } from './styles';
import bg from '../../assets/bg.png';
import { BalanceProvider } from '../../state/Balance';
import { ManagerProvider } from '../../state/Managers';

export const GameUI: React.FunctionComponent = () => {
  return (
    <Wrapper>
      <Game>
        <BalanceProvider>
          <BusinessProvider>
            <ManagerProvider>
              <SidePanel />
            </ManagerProvider>
            <MiddleSection />
          </BusinessProvider>
          <BottomSection />
        </BalanceProvider>
        <BG src={bg} />
      </Game>
    </Wrapper>
  );
}
