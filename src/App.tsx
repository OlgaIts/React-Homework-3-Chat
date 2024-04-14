import {MessageHistory} from "./components/MessageHistory";
import {Message} from "./components/Message/Message";
import {Response} from "./components/Response/Response";
import {Typing} from "./components//Typing/Typing";
import {Text} from "./types/message";
import "./css/global.css";

function App() {
  const MessageViews = {
    message: Message,
    response: Response,
    typing: Typing,
  };

  const renderMessage = (item: Text) => {
    const Component = MessageViews[item.type];
    return <Component message={item} />;
  };

  return (
    <>
      <div className='clearfix container'>
        <div className='chat'>
          <div className='chat-history'>
            <MessageHistory render={renderMessage} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
