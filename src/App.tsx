import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { useEffect } from "react";
import './App.scss'
import { userAppSelector, useAppDispatch } from './app/hooks'
import { login, logout } from "./features/userSlice";
import { Chat } from './components/chat/Chat'
import Login from './components/login/Login'
import Sidebar from './components/sidebar/Sidebar'
import { auth } from './firebase'

function App() {
  const user = userAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  useEffect(() => {
    auth.onAuthStateChanged((loginUser) => {
      if(loginUser) {
        dispatch(
          login({
            uid: loginUser.uid,
            photo: loginUser.photoURL,
            email: loginUser.email,
            displayName: loginUser.displayName,
          })
        )
      } else {
        dispatch(logout());
      }
    });
  }, [dispatch]); // ２回目以降も更新されるようdispatchを設定

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
