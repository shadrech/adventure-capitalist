import styled, { keyframes, css } from 'styled-components';
import { ReactComponent as UnpurchasedBackground } from '../../assets/unpurchased_bg.svg';
import durationDivBg from '../../assets/duration_bg.png';
import { ReactComponent as BuyBG } from '../../assets/buy_bg.svg';

export const PurchasedDiv = styled.div`
  position: relative;
  display: inline-flex;
  width: 300px;
  height: 80px;
  margin: 0px 15px 15px;
`
interface LeftSectionProps {
  clickable: boolean;
}
export const LeftSection = styled.section<LeftSectionProps>`
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
    &:hover {
      cursor: ${({ clickable }) => clickable ? 'pointer' : 'default'};
    }
  }
  span {
    position: absolute;
    width: 50px;
    height: 70px;
    border-radius: 50%;
    background: ${({ theme }) => theme.mediumBrown};

    &:hover {
      cursor: ${({ clickable }) => clickable ? 'pointer' : 'default'};
    }
  }
`

export const RightSection = styled.section`
  position: relative;
  display: inline-block;
  width: 80%;
`

const loader = keyframes`
  0% { width: 0%; }
  100% { width: 145%; }
`

interface ArrowDivProps {
  animationDuration: number;
  activeAnimation: boolean;
  loopAnimation: boolean;
}
export const ArrowDiv = styled.div<ArrowDivProps>`
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
    width: 0%;
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
  &:hover {
    cursor: default;
  }
  ${({ activeAnimation, animationDuration, loopAnimation }) => activeAnimation && css`
    span {
      animation: ${loader} ${animationDuration}s ease-in ${loopAnimation && 'infinite'};
    }
  `}
`

export const BottomDiv = styled.div`
  position: relative;
  display: flex;
`

export const MoneyDiv = styled.div`
  background-repeat: no-repeat;
  background-size: contain;
  width: 170px;
  height: 25px;
  font-family: 'kalamregular';
  color: ${({ theme }) => theme.cream};
  -webkit-text-stroke: .1px ${({ theme }) => theme.darkBrown};
  display: flex;
  justify-content: space-between;
  padding: 10px;
  position: relative;

  p {
    margin: 0;
    z-index: 50;
    cursor: inherit;
  }
`

interface BuySVGProps {
  purchaseable: number;
}
export const BuySVG = styled(BuyBG)<BuySVGProps>`
  position: absolute;
  top: 0;
  left: 0;

  path:nth-child(1) {
    fill: ${({ purchaseable, theme }) => purchaseable ? '#E08848' : theme.gameSecondaryBgColor};
  }
  path:nth-child(2) {
    fill: ${({ theme }) => theme.gameBgColor};
  }
  path:nth-child(3) {
    fill: #4D4130;
  }
  &:hover {
    path:nth-child(1) {
      cursor: ${({ purchaseable }) => purchaseable ? 'pointer' : 'default'};
    }
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
  padding-top: 10px;

  p {
    margin: 0;
    padding-top: 7px;
  }
  &:hover {
    cursor: default;
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
  .purchase {
    position: absolute;

    &:hover {
      cursor: pointer;
    }
  }
`

export const UnpurchasedSvg = styled(UnpurchasedBackground)`
  position: absolute;
  width: 100%;
  
  path {
    fill: ${({ theme }) => theme.gameSecondaryBgColor};
  }
`
