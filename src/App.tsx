import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.scss'
import { Chat } from './components/chat/Chat'
import Login from './components/login/Login'
import Sidebar from './components/sidebar/Sidebar'

function App() {
  // const user = userSelector((state) => state.user.user);
  const user = null;

  return (
      <div className="App">
        {user ? (
          <>
            <Sidebar />
            <Chat />
          </>
        ):(
          <>
            <Login />
          </>
        )}
      </div>
  );
}

export default App
