import React from 'react';
import zxcvbn from 'zxcvbn';
import {Avatar,Button,CssBaseline,TextField,Input ,Typography, Container, Box,Grid} from '@mui/material';

//fuente https://www.youtube.com/watch?v=tIInwIlf13A


const PasswordStrMeter = ({ password }) => {
  const testResult = zxcvbn(password);
  const num = testResult.score * 100/4;

  const createPassLabel = () => {
    switch(testResult.score) {
      case 0:
        return 'Muy Débil';
      case 1:
        return 'Débil';
      case 2:
        return 'Decente';
      case 3:
        return 'Moderado';
      case 4:
        return 'Excelente';
      default:
        return '';
    }
  }

  const funcProgressColor = () => {
    switch(testResult.score) {
      case 0:
        return '#828282';
      case 1:
        return '#EA1111';
      case 2:
        return '#FFAD00';
      case 3:
        return '#9bc158';
      case 4:
        return '#00b500';
      default:
        return 'none';
    }
  }

  const changePasswordColor = () => ({
    width: `${num}%`,
    background: funcProgressColor(),
    height: '11px'
  })

  return (
    
    <Grid xs={12}>
      <div className="progress" style={{ height: '8px', width:"100%", paddingLeft: 60 ,paddingRight: 60}}>
        <div className="progress-bar" style={changePasswordColor()}></div>
      </div>
      <p style={{ color: funcProgressColor() }}>{createPassLabel()}</p>
    
    </Grid> 
  )
}

export default PasswordStrMeter