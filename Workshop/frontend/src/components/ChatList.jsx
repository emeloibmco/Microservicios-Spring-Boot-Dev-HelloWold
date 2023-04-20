import {motion, AnimatePresence} from 'framer-motion'
import { useContext } from 'react'
import ChatContext from '../context/ChatContext'
import ChatItem from './ChatItem'


function ChatList() {
    const {chat} = useContext(ChatContext)

    if(!chat || chat.length === 0){
        return <p> Aún no ha iniciado el chat </p>
    }
    //console.log(chat)
    return (
      <div className="chat-list">
        <AnimatePresence>
          {chat.map((item) => (
              <motion.div 
              key = {item.id}
              initial = {{opacity:0}}
              animate = {{opacity:1}}
              exit = {{opacity: 0}}>
                  <ChatItem 
                  key={item.id} 
                  item = {item}
                  role = {item.role} />
              </motion.div>
          ))}
        </AnimatePresence>
          
      </div>
    )

}

export default ChatList