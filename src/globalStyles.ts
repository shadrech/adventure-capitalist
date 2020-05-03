import { createGlobalStyle } from 'styled-components';

const kalamboldwoff2 = require('./assets/fonts/kalam-bold-webfont.woff2');
const kalamboldwoff = require('./assets/fonts/kalam-bold-webfont.woff');
const kalamlightwoff2 = require('./assets/fonts/kalam-light-webfont.woff2');
const kalamlightwoff = require('./assets/fonts/kalam-light-webfont.woff');
const kalamregularwoff2 = require('./assets/fonts/kalam-regular-webfont.woff2');
const kalamregularwoff = require('./assets/fonts/kalam-regular-webfont.woff');
const montserratwoff2 = require('./assets/fonts/montserrat-regular-webfont.woff2');
const montserratwoff = require('./assets/fonts/montserrat-regular-webfont.woff');

export const theme = {
  gameHeight: 660,
  gameWidth: 1024,
  bgColor: '#262626',
  gameBgColor: '#796e63',
  gameSecondaryBgColor: '#8c8176',
  cream: '#e6ded3',
  darkCream: '#d2cabe',
  darkBrown: '#231502',
  mediumBrown: '#3a2403',
  lime: '#959c73',
  darkLime: '#222212',
  loadingGreen: '#83B046',
}

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'kalambold';
    src: url(${kalamboldwoff2}) format('woff2'),
         url(${kalamboldwoff}) format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'kalamlight';
    src: url(${kalamlightwoff2}) format('woff2'),
        url(${kalamlightwoff}) format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'kalamregular';
    src: url(${kalamregularwoff2}) format('woff2'),
        url(${kalamregularwoff}) format('woff');
    font-weight: normal;
    font-style: normal;
  }
  @font-face {
    font-family: 'montserratregular';
    src: url(${montserratwoff2}) format('woff2'),
         url(${montserratwoff}) format('woff');
    font-weight: normal;
    font-style: normal;
  }

  body {
    background: ${(props: any) => props.theme.bgColor};
    margin: 0;
    padding: 0;
  }
`

type Theme = typeof theme

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
