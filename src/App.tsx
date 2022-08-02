import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';

import { Provider } from 'react-redux';

import ProductsPage from './pages/ProductsPage';
import { store } from './store/store';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <ProductsPage />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
