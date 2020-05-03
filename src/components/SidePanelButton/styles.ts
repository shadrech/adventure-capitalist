import styled from 'styled-components';
import { ReactComponent as SVGBG } from '../../assets/button.svg';

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  height: 60px;
  z-index: 75;
  margin: 20px;
  font-family: 'kalambold';
  color: ${({ theme }) => theme.mediumBrown};
  font-size: 1.8em;

  &:hover {
    cursor: pointer;

    svg path {
      fill: #b6b9a6;
    }
  }
`

export const BG = styled(SVGBG)`
  width: 100%;
  position: absolute;
  left: 0;
  top: 0;
  z-index: -1;
  
  path {
    fill: #959c73;
    stroke: #d2cabe;
    stroke-linejoin: round;
    stroke-width: 4px;
    fill-rule: evenodd;
  }
`
