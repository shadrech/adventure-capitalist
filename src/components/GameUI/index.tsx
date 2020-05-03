import React from 'react';
import { SidePanel } from '../SidePanel';
import { BottomSection } from '../BottomSection';
import { MiddleSection } from '../MiddleSection';
import { BusinessProvider } from '../../state/Businesses';
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
        <BottomSection />
        <BG src={bg} />
      </Game>
    </Wrapper>
  );
}
