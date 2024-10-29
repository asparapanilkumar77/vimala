import React from 'react'
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';


const Useapp = () => {
  return (
    <div>
         <AppBar color='Secondary'>
            <Toolbar>
                <Typography variant='h6'>Myapp</Typography><br></br><br></br>
                &nbsp;
                <Link to='/s'>
                <Button variant='contained'>State</Button>

                </Link>
                <Link to='/c'>
                <Button variant='contained'>Counter</Button>
                </Link>

                <Link to='/p'>
                <Button variant='contained'>DisplayName</Button>
                </Link>
                </Toolbar>
         </AppBar>
         <br></br><br></br><br></br>
    </div>
  )
}

export default Useapp