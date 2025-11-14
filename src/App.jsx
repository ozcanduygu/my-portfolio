import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'  
import Projects from './components/Projects'
import Profile from './components/Profile'
import React from 'react';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext'


function App() {
 
  return (
    <>
      <LanguageProvider>
      <Header />
      <Hero />
      <Skills />
      <Profile />
      <Projects />
      <Footer />
      </LanguageProvider>
    </>
  )
}

export default App
