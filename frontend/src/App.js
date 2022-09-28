import React, { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import ChatList from './components/ChatList'
import ChatData from './components/shared/ChatData'
import ChatForm from './components/ChatForm'
import Header from './components/Header'
import ChatAdios from './components/ChatAdios'
import Card from './components/shared/Card'
import Button from './components/shared/Button'
import BtnSubmit from './components/BtnSubmit'


function App() {
  const [chat, setChat] = useState('') //ChatData

  const addChat = (newChat) => {
    setChat([newChat, ...chat])
  }

  return (
    <>
    <Header/>
    <div className='container'>
      <Card>
        <ChatForm />
        <ChatAdios />
        <div className='btn-send'> 
          <BtnSubmit handleAdd={addChat}/>
        </div>
      </Card>

      <ChatList chat = {chat} />
      
    </div>
    </>
  )
}

export default App
