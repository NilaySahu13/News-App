import './App.css';
import Navbar from './Components/Navbar'
import News from './Components/News'
// API key 9a572589b97a4b9eaaf68a7e43c6a2be
import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

export default class App extends Component {
  c = "Hello"
  render() {
    return (
      <>
        <Router>
          <Navbar/>
          <Routes>
            <Route exact path='/' element={<News key="default" pageSize={6} country={'in'} category={'general'} />} />
            <Route exact path='/sports' element={<News key="sports" pageSize={6} country={'in'} category={'sports'} />} />
            <Route exact path='/entertainment' element={<News key="entertainment" pageSize={6} country={'in'} category={'entertainment'} />} />
            <Route exact path='/technology' element={<News key="technology" pageSize={6} country={'in'} category={'technology'} />} />
            <Route exact path='/health' element={<News key="health" pageSize={6} country={'in'} category={'health'} />} />
            <Route exact path='/science' element={<News key="science" pageSize={6} country={'in'} category={'science'} />} />
            <Route exact path='/general' element={<News key="general" pageSize={6} country={'in'} category={'general'} />} />
            <Route exact path='/business' element={<News key="business" pageSize={6} country={'in'} category={'business'} />} />
          </Routes>
          <div className="container">
            
          </div>
        </Router>
      </>
    )
  }
}

