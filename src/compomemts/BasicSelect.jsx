import * as React from 'react';
import "../css/sort.css"
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const BasicSelect=() =>{
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <Box className='basicSelect' sx={{ minWidth: 250 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label" sx={{ minWidth: 250 }}>Sort By</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem className='sort_item'  value={10}>Bestsellers</MenuItem>
          <MenuItem className='sort_item' value={20}>High to low price</MenuItem>
          <MenuItem className='sort_item' value={30}>Low to high price</MenuItem>
          <MenuItem className='sort_item' value={40}>New Arrivals</MenuItem>
          <MenuItem className='sort_item' value={50}>Name: A-Z</MenuItem>
          <MenuItem className='sort_item' value={60}>Name: Z-A</MenuItem>
          <MenuItem className='sort_item' value={70}>Sale</MenuItem>
          <MenuItem className='sort_item' value={80}>Today’s Offers</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
export {BasicSelect}