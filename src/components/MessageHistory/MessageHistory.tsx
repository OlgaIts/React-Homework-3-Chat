import {Text} from "../../types/message";
import {messages} from "../../data/messages";

interface MessageHistoryProps {
  render: (item: Text) => React.ReactNode;
}

export const MessageHistory = ({render}: MessageHistoryProps) => {
  if (!messages.length) return null;

  return (
    <ul>
      {messages.map((item) => (
        <li key={item.id} className='clearfix'>
          {render(item)}
        </li>
      ))}
    </ul>
  );
};
