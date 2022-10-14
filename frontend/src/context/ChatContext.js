import { createContext, useState } from "react"

const ChatContext = createContext()

export const ChatProvider = ({children}) => {

    const [textHola, setTextHola] = useState([])
    const [textAdios, setTextAdios] = useState([])

    const [chat, setChat] = useState([])

    const addHola = async(text) => {
        setTextHola(text)
        //console.log(textHola)
    }

    const addAdios = async(text) => {
        setTextAdios(text)
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
        }}>
            {children}
        </ChatContext.Provider>
    )
}

export default ChatContext