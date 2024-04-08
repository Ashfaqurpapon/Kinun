
import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';
import Link from '@mui/material/Link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Container, Stack } from '@mui/material';


const Navbar = ({ getPlaylistById }) => {

  return (
    <Box sx={{ flexGrow: 1 }}>

      <AppBar position='fixed' color="default" sx={{ py: 2 }}>
        <Container maxWidth={"lg"}>

          <Toolbar>

            <Stack sx={{ flexGrow: 1 }}>
              <Link to='/' component={RouterLink}
                sx={{ textDecoration: 'none', color: 'black' }}>
                <Typography variant="h4">
                  KINUN
                </Typography>
              </Link>
              <Link href='https://stacklearner.com'
              target={'_blank'}
              sx={{ textDecoration: 'none', color: 'black' }}>
                
              </Link>
            </Stack>
            

          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;