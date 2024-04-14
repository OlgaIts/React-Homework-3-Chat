import {Text} from "../../types/message";

interface ResponseProps {
  message: Text;
}

export function Response({message}: ResponseProps) {
  return (
    <>
      <div className='message-data align-right'>
        <span className='message-data-time'>{message.time}</span> &nbsp; &nbsp;
        <span className='message-data-name'>{message.from.name}</span>
        <i className='fa fa-circle me'></i>
      </div>
      <div className='message other-message float-right'>{message.text}</div>
    </>
  );
}
