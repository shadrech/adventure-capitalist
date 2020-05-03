import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  height: 100%;
  max-width: 250px;
  display: inline-block;
`

export const BG = styled.img`
  height: 100%;
  opacity: .6;
  position: absolute;
  left: 0;
  top: 0;
  z-index: 50;
`

export const Logo = styled.img`
  z-index: 100;
  position: absolute;
  height: 180px;
  top: 25px;
  left: 20px;
`

export const ButtonWrapper = styled.div`
  position: relative;
  margin-top: ${({ theme }) => theme.gameHeight / 2.2}px;
  padding-left: 20px;
`
