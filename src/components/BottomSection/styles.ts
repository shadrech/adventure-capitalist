import styled from 'styled-components';

export const Wrapper = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
`

export const GoldFloor = styled.img`
  position: absolute;
  bottom: 0;
  right: 0;
  width: 100%;
  z-index: 50;
`

export const BalanceH1 = styled.h1`
  margin: 0;
  font-family: 'kalambold';
  font-size: 4em;
  color: ${({ theme }) => theme.cream};
  position: absolute;
  bottom: 50px;
  right: 200px;
  text-align: left;
  z-index: 50;
`
