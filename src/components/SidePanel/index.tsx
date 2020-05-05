import React from 'react';
import { ManagerPortal } from '../ManagerPortal';
import { Wrapper, BG, Logo, ButtonWrapper } from './styles';
import sidePanel from '../../assets/side_panel.svg';
import logo from '../../assets/logo@1.5x.png';
import { SidePanelButton } from '../SidePanelButton';

export const SidePanel = () => {
  const [showPortal, setShowPortal] = React.useState(false);
  const togglePortal = (status: boolean) => () => setShowPortal(status);

  return (
    <>
      <ManagerPortal show={showPortal} onClose={togglePortal(false)} />
      <Wrapper>
        <Logo src={logo} />
        <ButtonWrapper>
          <SidePanelButton onClick={() => null}>upgrades</SidePanelButton>
          <SidePanelButton onClick={togglePortal(true)}>managers</SidePanelButton>
          <SidePanelButton onClick={() => null}>investors</SidePanelButton>
        </ButtonWrapper>
        <BG src={sidePanel} alt="Side panel" />
      </Wrapper>
    </>
  )
}
