import {motion, AnimatePresence} from 'framer-motion'
import PropTypes from 'prop-types'
import ChatItem from './ChatItem'


function ChatList({chat}) {
    if(!chat || chat.length === 0){
        return <p> Aún no ha iniciado el chat </p>
    }

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

ChatList.propTypes = {
  chat: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      role: PropTypes.string,
      //source: PropTypes.string.isRequired,
    })
  )
}

export default ChatList