import React from 'react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Priyom from './components/Priyom'
import Xizmatkorsatish from './components/Xizmatkorsatish'
import Malumot from './components/Malumot'
import Vrachi from './components/Vrachi'
import Otziv from './components/Otziv'
import Karta from './components/Karta'
import Footer from './components/Footer'
import i18n from './components/i18'
const App = () => {
  return (
     <main className='flex flex-col items-center container mx-auto  '>
      <Navbar/>
      <Header/>
      <Xizmatkorsatish/>
    <Priyom/>
    <Malumot/>
    <Vrachi/>
    <Otziv/>
    <Karta/>
    <Priyom/>
    <Footer/>

      </main>
  )
}

export default App