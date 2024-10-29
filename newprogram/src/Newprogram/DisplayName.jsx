import { Button, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react'

const DisplayName = () => {
    var[x,setx] = useState();
    const inpt = ()=>{
        setx("React")
    }
    const inpt2 = ()=>{
        setx("Angular")
    }
    const inpt3 = () =>{
        setx("Next")
    }
    //use effect
    useEffect(()=>{
        inpt2()
    },[])
    
  return (
    <div>
        <Typography variant='h3'>Welcome to {x} </Typography>
        <br /><br /><br /><br />
        <Button variant='contained' color='primary' onClick={inpt}>React</Button><br></br><br></br>
        <Button variant='contained' color='secondary' onClick={inpt2}>Angular</Button><br></br><br></br>
        <Button variant='contained' color='success' onClick={inpt3}>Next</Button><br></br><br></br>

    </div>
  )
}

export default DisplayName