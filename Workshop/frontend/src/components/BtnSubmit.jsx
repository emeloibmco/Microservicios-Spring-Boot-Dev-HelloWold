import { useContext } from "react"
import Button from "./shared/Button"
import ChatContext from "../context/ChatContext"
import { v4 } from 'uuid'


function BtnSubmit() {
    const role = 'hola'
    const id = v4()
    let text

    const {textHola, addChat} = useContext(ChatContext)

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const options = {method: 'GET',mode:'cors'};

        const saludo = fetch('http://localhost:65230/saludar', options)
        .then(response => response.text())
        .catch(err => console.error(err));

        text = await saludo

        const newChat = {
            text,
            role,
            id,
        }
        addChat(newChat)
    }

  return (
    <form onSubmit={handleSubmit} >
       <Button type="submit" version="secondary" >Saludo</Button>
    </form>
  )
}

export default BtnSubmit