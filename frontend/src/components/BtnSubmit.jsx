import { useContext } from "react"
import Button from "./shared/Button"
import ChatContext from "../context/ChatContext"


function BtnSubmit() {
    const role = 'hola'

    const {textHola, addChat, getHola} = useContext(ChatContext)

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const options = {method: 'GET',mode:'no-cors'};

        const saludo = fetch('http://localhost:65230/saludar', options)
        .then(response => response.text())
        .then(response => console.log(response))
        .catch(err => console.error(err));

        let text 
        const printSaludo = async() => {
        text = await saludo;
        console.log(text);
        }
        console.log(text)
        //const text = textHola 
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