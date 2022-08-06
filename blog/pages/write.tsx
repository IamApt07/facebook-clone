import React from 'react'
import styles from '../styles/Home.module.css'
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import FormControl from '@mui/material/FormControl';
const write = () => {
  return (
    <div className={styles.in}>
      <h1 className={styles.h1}>Post Content</h1>
    <Box
    sx={{
      width: 500,
      maxWidth: '100%',
    }}
  >
    <TextField fullWidth label="Heading" id="fullWidth" />
  </Box>
  <Box
    sx={{
      width: 500,
      maxWidth: '100%',
      pt: 1
    }}
  >
    <TextField fullWidth label="Short description" id="fullWidth" />
  </Box>
  <FormControl sx={{ pt: 1, minWidth: '33.7%' }} size="medium">
        <InputLabel  id="Category">Category</InputLabel>
        <Select
          labelId="Category"
          id="Category"
          label="Category"
        >
          <MenuItem value={10}>TECH</MenuItem>
          <MenuItem value={20}>NEWS</MenuItem>
          <MenuItem value={30}>DIY</MenuItem>
        </Select>
    </FormControl>
    <Box
    sx={{
      width: 1500,
      pt: 1,
      height: 100
    }}
  >
    <TextField fullWidth label="Content" id="fullWidth" />
  </Box>
    <div>
   <button className="inline-flex items-center bg-black border-0 py-1 px-3 focus:outline-none text-white rounded-full text-base mt-4 md:mt-3">Publish
    </button>
    <Stack sx={{ width: '100%' }} spacing={10}>
      <Alert severity="success">Your blog is published — check it out!</Alert>
    </Stack>
    </div>
    </div>
  );
}


export default write
