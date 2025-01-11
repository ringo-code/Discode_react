import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import { Chat } from './components/chat/Chat'
import Sidebar from './components/sidebar/Sidebar'

function App() {
  return (
      <div className="App">
        {/* sidebar */}
        <Sidebar />

        {/* chat */}
        <Chat />
      </div>
  )
}

export default App
