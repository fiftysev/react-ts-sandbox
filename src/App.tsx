import { createTheme, CssBaseline, ThemeProvider, Typography } from '@mui/material';
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
      <Typography variant='h3' textAlign='center' fontWeight='bold'>
        Example app
      </Typography>
      <ProductsPage />
    </ThemeProvider>
  );
}

export default App;
