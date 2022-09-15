import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import ChatList from './components/ChatList'
import ChatData from './components/shared/ChatData'
import ChatForm from './components/ChatForm'
import Header from './components/Header'
import ChatAdios from './components/ChatAdios'

function App() {
  const [chat, setChat] = useState('') //ChatData

  const addChat = (newChat) => {
    newChat.id = uuidv4()
    setChat([newChat, ...chat])
  }

  return (
    <>
    <Header/>
    <div className='container'>
      <ChatForm handleAdd={addChat}/>
      <ChatAdios handleAdd={addChat}/>
      <ChatList chat = {chat} />
      
    </div>
    </>
  )
}

export default App
