import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const StateBasic = () => {
    
    var[name,setname]=useState("newprogram")
    var[Apsara,setval]=useState()
    const handleInput =(e) =>{
        console.log(e.target.value)
        setname(e.target.value)
    }
    const submit =() =>{
        setval(name)
    }
       
    
  return (
    <div>
        <Typography variant='h6'>
            Welcome  {Apsara}
        </Typography>
        <TextField variant='outlined'onChange={handleInput} label='Entername'/>
        <br></br><br></br>
        <Button variant='contained' color="secondary" onClick={submit}>
            Button
        </Button>
    </div>
  )
}

export default StateBasic