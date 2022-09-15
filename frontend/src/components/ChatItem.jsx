import PropTypes from 'prop-types'
import Card from "./shared/Card"
import {useState} from "react"

function ChatItem({item}) {
    const [text, setText] = useState("This is an example of a feedback item")

  return (
    <Card role={item.role}>
        <div className='text-display'> {item.text} </div>
    </Card>
  )
}

ChatItem.propTypes = {
    item: PropTypes.object.isRequired,
    
  }

export default ChatItem