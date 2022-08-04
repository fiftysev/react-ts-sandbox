import { Menu } from '@mui/icons-material';
import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material';
import React, { ReactNode } from 'react';

interface IAppBarLayoutProps {
  children: ReactNode;
}

const AppBarLayout = ({ children }: IAppBarLayoutProps) => {
  return (
    <>
      <AppBar position='static'>
        <Toolbar>
          <IconButton size='large' edge='start' color='inherit' aria-label='menu' sx={{ mr: 2 }}>
            <Menu />
          </IconButton>
          <Typography variant='h5' component='h1' fontWeight='bold'>
            Sandbox
          </Typography>
        </Toolbar>
      </AppBar>
      <Box>{children}</Box>
    </>
  );
};

export default AppBarLayout;
