import React from 'react';
import { HelmetProvider } from 'react-helmet-async';
import { Toaster } from 'react-hot-toast';
import { BrowserRouter } from 'react-router-dom';

import Router from './pages/routes';

function App() {
  return (
    <BrowserRouter>
      <HelmetProvider>
        <Router />
        <Toaster />
      </HelmetProvider>
    </BrowserRouter>
  );
}

export default App;
