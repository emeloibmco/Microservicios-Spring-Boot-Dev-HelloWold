import { useState } from "react"
import Button from "./shared/Button"

function BtnResponse({handleAdd}) {
    const [text, setText] = useState('Adiós.')
    const role = 'adios'

    const textAdios = 'Adiós.'

    const handleSubmit = (e) => {
        e.preventDefault()
        setText(textAdios)
        const newChat = {
            text,
            role,
        }
        handleAdd(newChat)
    }
  return (
    <form onSubmit={handleSubmit} >
       <Button type="submit" version="secondary" >Despedida</Button>
    </form>
  )
}

export default BtnResponse