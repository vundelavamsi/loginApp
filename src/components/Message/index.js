// Write your code here
import './index.css'

const Message = props => {
  const {message} = props
  return <h1 className="message-heading">{message}</h1>
}

export default Message
