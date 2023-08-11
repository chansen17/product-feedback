import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Sidebar from './components/Sidebar'
import Homepage from './pages/Homepage'
import View from './pages/View'

export default function App() {
  return (
    <div className='grid grid-cols-1 gap-6 lg:grid-cols-12'>
        <Router>
          <Sidebar />
          <Routes>
            <Route exact path="/" element={<Homepage />} />
            <Route exact path="/view/:id" element={<View />} />
          </Routes>
        </Router>
    </div>
  )
}
