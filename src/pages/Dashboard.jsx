import React from 'react'
import Navbar from '../components/navbar/Navbar'
import HomeScreen from '../components/home/HomeScreen'
import ProjectScreen from '../components/project/ProjectScreen'
import AboutScreen from '../components/about/AboutScreen'


function Dashboard() {
  return (
    <div>
      <Navbar />
      <HomeScreen />
      <AboutScreen /> 
      <ProjectScreen />
    </div>

  )
}

export default Dashboard