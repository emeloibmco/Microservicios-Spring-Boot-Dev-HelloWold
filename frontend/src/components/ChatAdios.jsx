import { useState, useContext } from "react"
import Button from "./shared/Button"
import ChatContext from "../context/ChatContext"

function ChatAdios() {

  const [text, setText] = useState('Adiós.')

  const {addAdios} = useContext(ChatContext)

  const handleTextChange = (e) => {
    setText(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addAdios(text)
  }
  return (
    <form onSubmit={handleSubmit} className='centered'>
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

export default ChatAdios