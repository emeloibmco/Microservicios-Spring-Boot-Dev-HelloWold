import { useContext } from "react"
import Button from "./shared/Button"
import ChatContext from "../context/ChatContext"
import { v4 } from 'uuid'


function BtnResponse() {
    const role = 'adios'
        const id = v4()
    let text

    const {textAdios, addChat} = useContext(ChatContext)

    const handleSubmit = async (e) => {
      e.preventDefault()
        
        const options = {method: 'GET',mode:'cors'};

        const saludo = fetch('http://localhost:65232/adios', options)
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
       <Button type="submit" version="secondary" >Despedida</Button>
    </form>
  )
}

export default BtnResponse