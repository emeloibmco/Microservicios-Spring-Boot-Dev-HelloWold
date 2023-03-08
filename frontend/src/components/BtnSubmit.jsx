import { useContext } from "react"
import Button from "./shared/Button"
import ChatContext from "../context/ChatContext"
import { v4 } from 'uuid'


function BtnSubmit() {
    const role = 'hola'
    const id = v4()

    const {textHola, addChat, getHola} = useContext(ChatContext)

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const options = {method: 'GET',mode:'no-cors'};

        const saludo = fetch('http://localhost:65230/saludar', {
          method: 'GET',
          mode: 'cors',
          headers: {
          "Accept": "application/json",
          'Content-Type': 'application/json'
          }
        }

        )
        .then(response => response.json())
        .then(response => console.log(response))

        .catch(err => {
          console.log("fetch error " + err)
          //console.error(err)
        });

        let text 
        const printSaludo = async() => {
        text = await saludo;
        console.log(text);
        }
        //console.log(text)
        //const text = textHola 
        const newChat = {
            text,
            role,
            id,
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