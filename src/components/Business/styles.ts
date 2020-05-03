import styled from 'styled-components';
import { ReactComponent as UnpurchasedBackground } from '../../assets/unpurchased_bg.svg';
import moneyDivBg from '../../assets/price_bg.png';
import durationDivBg from '../../assets/duration_bg.png';

export const PurchasedDiv = styled.div`
  position: relative;
  display: inline-flex;
  width: 300px;
  height: 80px;
  margin: 0px 15px 15px;
`

export const LeftSection = styled.section`
  position: relative;
  width: 20%;
  text-align: center;
  display: inline-flex;
  text-align: center;
  align-items: center;
  justify-content: flex-end;
  padding-right: 5px;

  p {
    position: relative;
    z-index: 50;
    width: 50px;
    font-family: 'montserratregular';
    font-size: 1.5em;
    color: ${({ theme }) => theme.cream};
  }
  span {
    position: absolute;
    width: 50px;
    height: 70px;
    border-radius: 50%;
    background: ${({ theme }) => theme.mediumBrown};
  }
`

export const RightSection = styled.section`
  position: relative;
  display: inline-block;
  width: 80%;
`

export const ArrowDiv = styled.div`
  position: relative;
  display: block;
  width: 100%;
  height: 42px;
  text-align: center;

  p {
    position: relative;
    display: block;
    z-index: 100;
    margin: 0;
    font-family: 'kalamregular';
    color: ${({ theme }) => theme.darkBrown};
  }
  span {
    position: absolute;
    top: 1px;
    left: 1px;
    width: 145%; // change for spinning effect 
    height: 50px;
    background: #959c73;
    clip-path: url(#arrowMask);
    transform: scale(0.68);
    transform-origin: top left;
  }
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
  svg {
    position: absolute;
  }
`

export const BottomDiv = styled.div`
  position: relative;
  display: flex;
`

export const MoneyDiv = styled.div`
  background: url(${moneyDivBg});
  background-repeat: no-repeat;
  background-size: contain;
  width: 170px;
  height: 45px;
  font-family: 'kalamregular';
  color: ${({ theme }) => theme.cream};
  -webkit-text-stroke: .3px ${({ theme }) => theme.darkBrown};
  display: flex;
  justify-content: space-between;
  padding: 10px;

  p {
    margin: 0;
  }
`

export const DurationDiv = styled.div`
  background: url(${durationDivBg});
  background-repeat: no-repeat;
  background-size: contain;
  height: 45px;
  width: 100px;
  font-family: 'montserratregular';
  color: ${({ theme }) => theme.cream};
  text-align: center;
  font-size: .8em;

  p {
    margin: 0;
    padding-top: 7px;
  }
`

export const UnpurchasedDiv = styled.div`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 250px;
  height: 87px;
  z-index: 50;
  margin: 15px 30px;

  p:nth-child(1) {
    font-family: 'kalamregular';
    color: ${({ theme }) => theme.darkBrown};
    font-size: 1em;
    margin: 0;
    z-index: 50;
  }
  p:nth-child(2) {
    font-family: 'kalamregular';
    color: ${({ theme }) => theme.cream};
    font-size: 1em;
    margin: 0;
    z-index: 50;
  }
`

export const UnpurchasedSvg = styled(UnpurchasedBackground)`
  position: absolute;
  width: 100%;
  
  path {
    fill: ${({ theme }) => theme.gameSecondaryBgColor};
  }
`
