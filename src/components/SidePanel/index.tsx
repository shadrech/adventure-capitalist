import React from 'react';
import { Wrapper, BG, Logo, ButtonWrapper } from './styles';
import sidePanel from '../../assets/side_panel.svg';
import logo from '../../assets/logo@1.5x.png';
import { SidePanelButton } from '../SidePanelButton';

export const SidePanel = () => {
  return (
    <Wrapper>
      <Logo src={logo} />
      <ButtonWrapper>
        <SidePanelButton onClick={() => null}>upgrades</SidePanelButton>
        <SidePanelButton onClick={() => null}>managers</SidePanelButton>
        <SidePanelButton onClick={() => null}>investors</SidePanelButton>
      </ButtonWrapper>
      <BG src={sidePanel} alt="Side panel" />
    </Wrapper>
  )
}
