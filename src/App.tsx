import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import React from 'react';

import ProductsPage from './pages/ProductsPage';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <ProductsPage />
    </ThemeProvider>
  );
}

export default App;
