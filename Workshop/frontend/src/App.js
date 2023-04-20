import React, { useState } from 'react'
import ChatList from './components/ChatList'
import ChatForm from './components/ChatForm'
import Header from './components/Header'
import ChatAdios from './components/ChatAdios'
import Card from './components/shared/Card'
import BtnSubmit from './components/BtnSubmit'
import BtnResponse from './components/BtnResponse'
import {ChatProvider} from "./context/ChatContext"

function App() {
  const [chat, setChat] = useState('') //ChatData

  return (
    <ChatProvider>
    <Header/>
    <div className='container'>
      <Card>
        <ChatForm />
        <ChatAdios />
        <div className='btn-send'> 
          <BtnSubmit />
          <BtnResponse />
        </div>
      </Card>

      <ChatList chat = {chat} />
      
    </div>
    </ChatProvider>
  )
}

export default App
