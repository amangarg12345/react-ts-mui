import {Button, FormControl, FormGroup, Grid2, Input, InputLabel, MenuItem, Paper, Select, SelectChangeEvent, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, {useState } from 'react'
import styled from 'styled-components'
const Group = styled(FormGroup)`
width:full;
border-style: solid;
`
interface Info {
  Name : string,
  Email : string,
  Contact : string,
  Age : string,
  Gender : string;
}
const Form = () => {
  const [data,setData] = useState<Info>({Name : "",Email : "",Contact : "",Age : "",Gender : ""});
  const [arr,setArr] = useState<Info []>([]);
  const handleChange :React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> |undefined = 
  (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
    setData({...data,[e.target.name] : e.target.value})
  }
  const handleChangeG = (e: SelectChangeEvent) => {
    setData({...data,[e.target.name]:e.target.value as string});
  }
  const handleClick = () =>{
   arr.push(data)
   setArr([...arr]);
  }
  return (
    <div>
      <h1>Form</h1>
      <Grid2 container spacing={2}>
        <Grid2 size={4}>
        <Group onSubmit={(e)=>e.preventDefault()}>
        <FormControl sx={{ margin:2 }}>
          <InputLabel>Name</InputLabel>
          <Input value={data.Name} onChange={handleChange} name="Name"/>
        </FormControl>
        <FormControl sx={{ margin:2 }}>
          <InputLabel>Email</InputLabel>
          <Input value={data.Email} onChange={handleChange} name="Email"/>
        </FormControl>
        <FormControl sx={{ margin:2 }}>
          <InputLabel>Contact No.</InputLabel>
          <Input value={data.Contact} onChange={handleChange} name="Contact"/>
        </FormControl>
        <FormControl sx={{ margin:2 }}>
          <InputLabel>Age</InputLabel>
          <Input value={data.Age} onChange={handleChange} name="Age"/>
        </FormControl>
        <FormControl sx={{ margin:2 }}>
          <InputLabel>Gender</InputLabel>
          <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          label="Gender"
          value={data.Gender}
          onChange={handleChangeG}
          name = "Gender"
        >
          <MenuItem value="Male">Male</MenuItem>
          <MenuItem value="Female">Female</MenuItem>
          <MenuItem value="Other">Other</MenuItem>
        </Select>
        </FormControl>
        <Button sx={{ margin:2, backgroundColor:'ButtonHighlight' }} onClick={handleClick}>Submit</Button>
      </Group>
        </Grid2>
        <Grid2 size={8}>
        <TableContainer component={Paper}>
      <Table aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Mail</TableCell>
            <TableCell >Contact No.</TableCell>
            <TableCell >Age</TableCell>
            <TableCell >Gender</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {arr.map((row,i)=>{
          return(
            <TableRow
              key={i}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell>{row.Name}</TableCell>
              <TableCell>{row.Email}</TableCell>
              <TableCell >{row.Contact}</TableCell>
              <TableCell >{row.Age}</TableCell>
              <TableCell>{row.Gender}</TableCell>
            </TableRow>
          )
        })}
        </TableBody>
      </Table>
    </TableContainer>
        </Grid2>
    </Grid2>
      
    </div>
  )
}

export default Form
