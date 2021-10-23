import React from 'react'
import Header from './Header'
import Footer from './Footer'
import ResortList from './ResortList'

import '../assets/css/App.css';
import '../assets/css/utilities.css';



const App = () => {
  return (
    <div className="grid grid-row-3">
      <Header/>
      <ResortList/>
      <Footer/>
    </div>
  )
}

export default App

