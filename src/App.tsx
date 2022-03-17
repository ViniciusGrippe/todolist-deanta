import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import GlobalStyles from './styles/GlobalStyles';
import RoutesApp from './routes';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <BrowserRouter>
        <RoutesApp />
      </BrowserRouter>
    </>
  );
};

export default App;
