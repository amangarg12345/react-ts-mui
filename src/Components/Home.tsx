import { Box, Button, InputBase } from '@mui/material'
import React from 'react'
import styled from 'styled-components'

const Val = styled(InputBase)`
background-color: lightblue;
border-style: solid;
margin: 20px 10px 20px 10px;
padding : 5px 0 5px 10px;
width : 150px;
`
const Home = () => {
  return (
    <>
    <Box>
      <Val value="Count" readOnly size='small'></Val>
      <Val value="20" readOnly size='small'></Val>
      <Button variant="outlined">Increase</Button>
      <Button variant="outlined">Decrease</Button>
    </Box>
    </>
    
  )
}

export default Home
