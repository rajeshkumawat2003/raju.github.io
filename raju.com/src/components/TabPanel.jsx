import React, { Component } from 'react'

import './TabPanel';

import {
Box,
Typography
}from '@material-ui/core';



export class TabPanel extends Component {
constructor(props) {
  super(props)

  this.state = {
     first:''
  }
}

  render() {
    const {children,value,index,...other}=this.props;
    return (
      <div
         role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
      </div>
    )
  }
}

export default TabPanel
