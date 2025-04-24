import React from 'react'
import Navbar from '../components/navbar/Navbar'
import HomeScreen from '../components/home/HomeScreen'
import ProjectScreen from '../components/project/ProjectScreen'
import AboutScreen from '../components/about/AboutScreen'
import ContactScreen from '../components/contact/ContactScreen'
import FooterScreen from '../components/footer/FooterScreen'

function Dashboard() {
  return (
    <div>
      <Navbar />
      <HomeScreen />
      <AboutScreen /> 
      <ProjectScreen />
      <ContactScreen />
      <FooterScreen />
    </div>

  )
}

export default Dashboard