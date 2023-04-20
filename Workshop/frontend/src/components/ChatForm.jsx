import { useState, useContext } from "react"
import Button from "./shared/Button"
import ChatContext from "../context/ChatContext"

function ChatForm() {

  const [text, setText] = useState('¿Hola?')

  const {addHola} = useContext(ChatContext)

  const handleTextChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    //console.log(text)
    addHola(text)
  }

  return (
    <form onSubmit={handleSubmit} className='centered'>
      <h2> Ingresa los textos de saludo y despedida </h2>
      <div className="input-group">
        <input onChange={handleTextChange}
          type="text" 
          placeholder=""
          value = {text}
        />
        <Button type="submit"> Enviar </Button>
      </div>
    </form>
  )
}

export default ChatForm