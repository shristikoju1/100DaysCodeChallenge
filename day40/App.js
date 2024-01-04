import React, { useState } from 'react';
import './style.css';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import TextField from '@mui/material/TextField';
import { Interests } from '@mui/icons-material';


const App = () => {
  const [principle, setPrinciple] = useState(0);
  const [time, setTime] = useState(0);
  const [rate, setRate] = useState(0);
  const [simpleInterest, setSimpleInterest] = useState(0);
 

  const calculateInterest =() => {
    setSimpleInterest(principle*time*rate/100);
  }
  return <div>
      <AppBar position="static">
        <Toolbar>        
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Simple Interest
          </Typography>
        </Toolbar>
      </AppBar>
      <br/>
      
      <TextField onChange={(e) => setPrinciple(e.target.value)} id="standard-basic" label="Enter principle" variant="standard"/><br/><br/>
      <TextField onChange={(e) => setTime(e.target.value)} id="standard-basic" label="Enter time" variant="standard" /> <br/><br/>
      <TextField onChange={(e) => setRate(e.target.value)} id="standard-basic" label="Enter rate" variant="standard" /> <br/><br/><br/>
      
      <Button onClick = {() => calculateInterest()}variant="contained">Calculate</Button><br/><br/>

      <Typography variant="h6" gutterBottom>Simple Interest is: {simpleInterest}</Typography>
     
   
  </div>
   }

export default App;
