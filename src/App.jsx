import { useState, useRef } from 'react'
import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'  
import Projects from './components/Projects'
import Profile from './components/Profile'
import React from 'react';
import Footer from './components/Footer';
import { LanguageProvider } from './context/LanguageContext'
import { ThemeProvider } from './context/ThemeContext'
import ModeSwitch from './components/ModeSwitch'


function App() {
  const skillsRef = useRef(null);
  const projectsRef = useRef(null);
  const footerRef = useRef(null);

    const scrollToSection = (sectionRef) => {
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };
 
  return (
    <>
      <div className="max-w-[1440px] mx-auto bg-gray-50 min-h-screen">
      <LanguageProvider>
      <ThemeProvider>
      <ModeSwitch/>
      <Header 
      scrollToSection={scrollToSection}
      refs={{skillsRef, projectsRef, footerRef }}
      />
      <section>
        <Hero />
      </section>
      <section ref={skillsRef} >
        <Skills />
      </section>
      <section id='profile'>
        <Profile />
      </section>
      <section ref={projectsRef}>
        <Projects />
      </section>
      <section ref={footerRef}>
        <Footer />
      </section>
      
      </ThemeProvider>
      </LanguageProvider>
      </div>
      
    </>
  )
}

export default App
