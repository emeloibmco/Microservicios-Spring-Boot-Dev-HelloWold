import { useContext } from "react"
import Button from "./shared/Button"
import ChatContext from "../context/ChatContext"

function BtnResponse() {
    const role = 'adios'

    const {textAdios, addChat} = useContext(ChatContext)

    const handleSubmit = (e) => {
        e.preventDefault()
        const text = textAdios
        const newChat = {
            text,
            role,
        }
        addChat(newChat)
    }
  return (
    <form onSubmit={handleSubmit} >
       <Button type="submit" version="secondary" >Despedida</Button>
    </form>
  )
}

export default BtnResponse