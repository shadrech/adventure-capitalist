import styled from 'styled-components';
import popupBg from '../../assets/popup_bg.png';
import { ReactComponent as managerBgSVG } from '../../assets/manager_bg.svg';

export const BackgroundDiv = styled.div`
  --portal-bottom: calc(calc(100vh - ${({ theme }) => theme.gameHeight}px) / 2);

  background: url(${popupBg});
  background-size: cover;
  background-repeat: no-repeat;
  position: fixed;
  width: ${({ theme }) => theme.gameWidth}px;
  height: ${({ theme }) => theme.gameHeight / 1.5}px;
  left: calc(calc(100vw - ${({ theme }) => theme.gameWidth}px) / 2);
  bottom: var(--portal-bottom);

  section:nth-child(1) {
    position: relative;
    text-align: center;
    margin-top: -50px;

    h1 {
      font-family: 'kalamregular';
      font-size: 1.7em;
      position: absolute;
      z-index: 50;
      display: inline;
      left: 50%;
      transform: translateX(-50%);
      color: aliceblue;
      top: 10px;
    }
    svg {
      position: relative;
      width: 35%;
      path {
        fill: #9ebecf;
        fill-rule: evenodd;
      }
    }
  }
  section:nth-child(2) {
    position: absolute;
    bottom: 0;
    height: ${({ theme }) => (theme.gameHeight / 1.5) - 45}px;
    width: 100%;
    overflow: scroll;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;
    padding-top: 15px;
    box-sizing: border-box;

    & > div {
      position: relative;
      width: 35%;
      margin: 10px 15px 5px;
    }
  }
`

export const InfoDiv = styled.div`
  position: absolute;
  text-align: center;
  width: 100%;
  z-index: 100;
  top: 6px;

  p {
    margin: 0;
  }
  p:nth-child(1) {
    color: #599FC3;
    font-family: 'kalamregular';
    font-weight: bolder;
    font-size: 1.5em;
    line-height: 0.7;
  }
  p:nth-child(2) {
    color: #9e9994;
    font-family: 'montserratregular';
    font-size: .8em;
    font-weight: bolder;
  }
  p:nth-child(3) {
    color: #676159;
    font-family: 'montserratregular';
    font-weight: bolder;
    line-height: 1;
    font-size: .9em;
  }
`

interface HiredDivProps {
  active: boolean;
}
export const HireDiv = styled.div<HiredDivProps>`
  position: absolute;
  height: 60px;
  width: 90px;
  right: 0;
  top: -5px;
  transform: translateX(90%);
  z-index: 100;

  svg {
    fill: ${({ active }) => active ? '#9EBECF' : '#B9B4AF'};
    stroke: ${({ active }) => active ? '#3B6377' : '#72685F'};
  }
  &:hover {
    cursor: ${({ active }) => active ? 'pointer' : 'default'};
  }
  &::before {
    position: absolute;
    text-align: center;
    content: 'Hire!';
    font-family: 'kalamregular';
    font-size: 1.7em;
    font-weight: bolder;
    color: ${({ theme, active }) => active ? '#3B6377' : theme.darkBrown};
    left: 15px;
    top: 10px;
  }
`

export const ManagerBgSVG = styled(managerBgSVG)`
  fill: #f2faff;
  fill-rule: evenodd;
  width: 100%;
  transform: scaleY(1.1);
`

export const CloseSpan = styled.span`
  position: absolute;
  background: #CCD2D0;
  border: aliceblue 3px solid;
  width: 50px;
  height: 70px;
  border-radius: 50%;
  top: calc(100vh - ${({ theme }) => theme.gameHeight}px * 1.05);
  left: ${({ theme }) => theme.gameWidth}px;
  transform: rotate(150deg);
  z-index: 100;

  &:hover {
    cursor: pointer;
    background: #dee4e2;
  }
  &::before {
    content: 'x';
    font-family: 'kalamregular';
    font-size: 3em;
    color: ${({ theme }) => theme.mediumBrown};
    position: absolute;
    z-index: 50;
    left: 50%;
    transform: translateX(-50%) rotate(20deg);
  }
`
