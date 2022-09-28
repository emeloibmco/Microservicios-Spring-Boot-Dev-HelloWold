import { useState } from "react"
import Button from "./shared/Button"

function BtnSubmit({handleAdd}) {
    const [text, setText] = useState('¿Hola?')
    const role = 'hola'

    const textHola = '¿Hola?'
    const textAdios = 'Adiós.'

    const handleSubmit = (e) => {
        e.preventDefault()
        setText(textHola)
        const newChat = {
            text,
            role,
        }
        handleAdd(newChat)
    }


  return (
    <form onSubmit={handleSubmit} >
       <Button type="submit" version="secondary" >Enviar saludo</Button>
    </form>
  )
}

export default BtnSubmit