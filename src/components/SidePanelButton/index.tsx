import React from 'react';
import { Wrapper, BG } from './styles';

interface Props {
  onClick: () => void;
}

export const SidePanelButton: React.FunctionComponent<Props> = ({ children, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      {children}
      <BG />
    </Wrapper>
  );
}
