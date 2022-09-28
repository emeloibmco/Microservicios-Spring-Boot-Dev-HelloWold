import { useState } from "react"
import Button from "./shared/Button"

function ChatForm() {
    const [text, setText] = useState('¿Hola?')
    const [message, setMessage] = useState('')
    const role = 'hola'

    const handleTextChange  = (e) => {
        setMessage('¿Hola?')
      setText(e.target.value)
  }

  return (
    <form onSubmit={{handleTextChange}} className='centered'>
      <h2> Ingresa los textos de saludo y despedida.</h2> 
      <div className="input-group">
        <input onChange={handleTextChange} 
        type="text" 
        placeholder = "¿Hola?"
        value = {text}
        />
        <Button type="submit" >Enviar</Button>
      </div>
    </form>
  )
}

export default ChatForm