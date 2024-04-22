import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';
import Link from '@mui/material/Link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { Button, Container, Stack } from '@mui/material';
import AddForm from '../add-form'; // Corrected import statement
import Swr from '../../api/apiData';
import ItemCard from '../../Myself/itemCard';

const Navbar = ({ products }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

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
          <Toolbar>
            <Button variant='contained' onClick={handleClickOpen} >
              Add items
            </Button>
            <AddForm  handleClose={handleClose}/>
           
           
            

           
         
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Navbar;
