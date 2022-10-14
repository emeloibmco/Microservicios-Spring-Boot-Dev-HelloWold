import { useState, useContext } from "react"
import Button from "./shared/Button"
import ChatContext from "../context/ChatContext"


function BtnSubmit() {
    const role = 'hola'

    const {textHola, addChat} = useContext(ChatContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        const text = textHola 
        const newChat = {
            text,
            role,
        }
        addChat(newChat)
        //console.log(newChat)
    }

  return (
    <form onSubmit={handleSubmit} >
       <Button type="submit" version="secondary" >Saludo</Button>
    </form>
  )
}

export default BtnSubmit