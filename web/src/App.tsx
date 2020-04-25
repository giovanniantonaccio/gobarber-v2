import React from 'react';

import SignUp from './pages/SignUp/index';

import GlobalStyles from './styles/global';

const App: React.FC = () => {
  return (
    <>
      <SignUp />
      <GlobalStyles />
    </>
  );
};

export default App;
