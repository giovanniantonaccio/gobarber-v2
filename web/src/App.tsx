import React from 'react';

import SignIn from 'pages/SignIn/index';

import AppProvider from 'hooks';

import GlobalStyles from 'styles/global';

const App: React.FC = () => {
  return (
    <>
      <AppProvider>
        <SignIn />
      </AppProvider>

      <GlobalStyles />
    </>
  );
};

export default App;
