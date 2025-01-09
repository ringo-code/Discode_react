import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import Sidebar from './components/sidebar/Sidebar'

function App() {
  return (
      <div className="App">
        {/* sidebar */}
        <Sidebar />

        {/* home */}
      </div>
  )
}

export default App
