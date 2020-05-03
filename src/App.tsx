import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GameUI } from './components/GameUI';
import { GlobalStyles, theme } from './globalStyles';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <GameUI />
    </ThemeProvider>
  );
}

export default App;
