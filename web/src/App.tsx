import React from 'react';

import SignIn from './pages/SignIn/index';

import GlobalStyles from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <SignIn />
      <GlobalStyles />
    </>
  );
};

export default App;
