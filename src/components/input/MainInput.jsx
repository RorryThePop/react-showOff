import React from 'react';
import classes from './MainInput.module.css';
const MainInput = (props) => {
  return <input {...props} className={classes.MaInput} />;
};

export default MainInput;
