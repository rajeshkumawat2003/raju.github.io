import React, { Component } from 'react'
import img from './images/Rajesh.jpg'; // Tell webpack this JS file uses this image

import {
  AppBar,
  Tabs,
  Tab
} from '@material-ui/core';
import TabPanel from './TabPanel';
import ProjectCard from './ProjectCard';

class Projects extends Component {
  constructor(props) {
    super(props)

    this.state = {
      first: '',
      value: 0
    }
  }
  handleChange = (event, newValue) => {
    this.setState({ value: newValue });
  }
  a11yProps = (index) => {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  render() {
    const { value } = this.state;
    return (
      <div>
        <AppBar position="static">
          <Tabs value={value} onChange={this.handleChange} aria-label="simple tabs example">
            <Tab label="Item One" {...this.a11yProps(0)} />
            <Tab label="Item Two" {...this.a11yProps(1)} />
            <Tab label="Item Three" {...this.a11yProps(2)} />
          </Tabs>
        </AppBar>
        <TabPanel value={value} index={0}>
        <div className='maindiv' style={{display: 'flex'}}>
          <ProjectCard       
          img ={img}
          name = 'E-Commers Website'
          durationstart='04/2022'
          durationend='10/2023'
          discription='loremd dbfhjd hdfbhdf dfbdf dfbgvdfg fdgdfgv'
          
          />

          <ProjectCard
          
          img ={img}
          name = 'Porfolia'
          durationstart='04/2022'
          durationend='10/2023'
          discription='loremd dbfhjd hdfbhdf dfbdf dfbgvdfg fdgdfgv'
          
          />
          <ProjectCard 
          
          img ={img}
          name = 'Demo'
          durationstart='04/2022'
          durationend='10/2023'
          discription='loremd dbfhjd hdfbhdf dfbdf dfbgvdfg fdgdfgv'
          />
          <ProjectCard 
          img ={img}
          name = 'demo'
          durationstart='011/2022'
          durationend='19/2023'
          discription='loremd dbfhjd hdfbhdf dfbdf dfbgvdfg fdgdfgv'
          />
</div>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2}>
          Item Three
        </TabPanel>
      </div>
    )
  }
}

export default Projects;
