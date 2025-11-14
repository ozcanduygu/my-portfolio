import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'  
import Projects from './components/Projects'
import Profile from './components/Profile'
import React from 'react';
import Footer from './components/Footer';

function App() {
 
  return (
    <>
      <Header />
      <Hero />
      <Skills />
      <Projects />
      <Profile />
      <Footer />
    </>
  )
}

export default App
