import React from 'react'
import Header from './components/Header/Header'
import Companies from './components/Companies/Companies'
import Hero from './components/Hero/Hero'
import Comments from './components/Comments/Comments'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import './App.css'

const App = () => {
  return (
    <>
      <Header />
      <Companies />
      <Hero />
      <Comments />
      <Contact />
      <Footer />
    </>
  )
}

export default App