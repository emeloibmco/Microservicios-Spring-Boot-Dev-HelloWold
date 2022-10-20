import { createContext, useState } from "react"

const ChatContext = createContext()

export const ChatProvider = ({children}) => {

    const [textHola, setTextHola] = useState([])
    const [textAdios, setTextAdios] = useState([])

    const [chat, setChat] = useState([])

    const addHola = async(text) => {
        const response = await fetch(`http://localhost:65230/saludar?Saludo=${text}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(text),
            mode: 'no-cors',
        })

        //setTextHola(text)
        //console.log(text)
    }

    const getHola = async () => {
        const response = await fetch(`http://localhost:65230/saludar`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
            mode: 'no-cors',
        } )
        //data = await response.json()
        const data = 'Holiwi'
        setTextHola(data)
        console.log(data)
    }

    const addAdios = async(text) => {
        const response = await fetch(`http://localhost:65232/adios?Despedida=${text}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(text),
            mode: 'no-cors',
        })

        //setTextAdios(text)
    }

    const addChat = async (newChat) => {
        setChat([newChat, ...chat])
        //console.log(newChat)
    }

    return (
        <ChatContext.Provider value = {{
            textHola,
            textAdios,
            chat,
            addHola,
            addAdios,
            addChat,
            getHola,
        }}>
            {children}
        </ChatContext.Provider>
    )
}

export default ChatContext