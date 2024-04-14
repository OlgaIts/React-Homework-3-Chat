import {Text} from "../../types/message";

interface MessageProps {
  message: Text;
}

export function Message({message}: MessageProps) {
  return (
    <>
      <div className='message-data'>
        <span className='message-data-name'>
          <i className='fa fa-circle online'></i> {message.from.name}
        </span>
        <span className='message-data-time'>{message.time}</span>
      </div>
      <div className='message my-message'>{message.text}</div>
    </>
  );
}
