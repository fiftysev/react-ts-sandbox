import { createTheme, CssBaseline, ThemeProvider, Typography } from '@mui/material';
import React from 'react';

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
    </ThemeProvider>
  );
}

export default App;
