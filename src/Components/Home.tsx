import { Box, Button, InputBase } from '@mui/material'
import React, { useState } from 'react'
import styled from 'styled-components'

const Val = styled(InputBase)`
background-color: lightblue;
border-style: solid;
margin: 20px 10px 20px 10px;
padding : 5px 0 5px 10px;
width : 150px;
`
const Home = () => {
  const [count,setCount] = useState<number>(0);
  const handleInc = () =>{
    let a:number = count + 1;
    setCount(a);
  }
  const handleDec = () =>{
    let a:number = count - 1;
    setCount(a);
  }
  return (
    <>
    <Box>
      <Val value="Count" readOnly size='small'></Val>
      <Val value={count} readOnly size='small'></Val>
      <Button variant="outlined" onClick={handleInc}>Increase</Button>
      <Button variant="outlined" onClick={handleDec}>Decrease</Button>
    </Box>
    </>
    
  )
}

export default Home
