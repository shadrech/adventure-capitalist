import styled from 'styled-components';

export const Wrapper = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const Game = styled.div`
  position: relative;
  display: block;
  width: ${({ theme }) => theme.gameWidth}px;
  height: ${({ theme }) => theme.gameHeight}px;
  background: ${({ theme }) => theme.gameBgColor};
  box-shadow: 10px 10px 25px -11px rgba(0,0,0,0.75);
  overflow: hidden;
`

export const BG = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
`

export const SidePanel = styled.img`
  height: 100%;
  opacity: .6;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 50;
`
