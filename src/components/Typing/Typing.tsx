import {Text} from "../../types/message";

interface TypingProps {
  message: Text;
}

export const Typing = ({message}: TypingProps) => {
  return (
    <div className='message-data'>
      <span className='message-data-name'>
        <i className='fa fa-circle online'></i>
        {message.from.name}
      </span>
      <span className='message-data-time'>{message.time}</span>
      <span className='message-data-name'>
        <i className='fa fa-circle online'></i>
      </span>
    </div>
  );
};
