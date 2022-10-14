import { createContext, useState } from "react"

const ChatContext = createContext()

export const ChatProvider = ({children}) => {

    const [textHola, setTextHola] = useState([])

    const [chat, setChat] = useState([])

    const addHola = async(text) => {
        setTextHola(text)
        //console.log(textHola)
    }

    const addChat = async (newChat) => {
        setChat([newChat, ...chat])
        //console.log(newChat)
    }

    return (
        <ChatContext.Provider value = {{
            textHola,
            chat,
            addHola,
            addChat,
        }}>
            {children}
        </ChatContext.Provider>
    )
}

export default ChatContext