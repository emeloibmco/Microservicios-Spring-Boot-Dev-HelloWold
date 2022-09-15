import { useState } from "react"
import Card from "./shared/Card"
import Button from "./shared/Button"

function ChatForm({handleAdd}) {
    const [text, setText] = useState('¿Hola?')
    const [message, setMessage] = useState('')
    const role = 'hola'

    const handleSubmit = (e) => {
        e.preventDefault()
        const newChat = {
            text,
            role,
        }
        handleAdd(newChat)
    }

  return (
    <div className="centered" >
        <form onSubmit={handleSubmit}>
        <Button type="submit" version='secondary'>{text}</Button>
        </form>
    </div>
  )
}

export default ChatForm