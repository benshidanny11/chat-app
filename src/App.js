import { useState } from 'react';
import './App.css';

function App() {
  // const [contacts] = useState([{text:'John Smith', active:false},{text:'Molly Watt', active:true},{text:'Ivan Mackay', active:false}]);
  const [messages,setMessages]= useState( [{id:'1',text:'Hi Christine!', me:true},{id:'2',text:'Hey, how are you doing?', me:false},{id:'3',text:'It\'s been a while', me:false},{id:'4',text:'Yes it is!', me:true},{id:'5',text:'I have something to tell you', me:true},{id:'6',text:'Okay, what is it?', me:false},{id:'7',text:'I\'d like to tell you that I love you so much ❤️💓', me:true}],)
  const [message, setMessage]= useState('');


  
  
 const  handleChange=(e) => {
    setMessage(e.target.value); 
  }

  const handleSubmit=(e) =>{
    e.preventDefault();
    if (!message.length) {
      return;
    }
  
    const newItem = {
      text: message,
      id: Date.now(),
      me: true
    };

    

    messages.push(newItem);
    setMessages([...messages]);
    setMessage('');
  }


let MessagesHistory = ({items})=> {

    return [].concat(items).reverse().map(item => (
        <div className={"message " + (item.me ? "me" : "")} key={item.id}>
          <div className="message-body">
            {item.text}
          </div>
        </div>
      ));
  }
                 
  return (
    <div className="app">
      <div className="messages">
        <div className="messages-history">
          <MessagesHistory items={messages} />
        </div>
        <form className="messages-inputs" onSubmit={handleSubmit}>
          <input type="text" placeholder="Send a message" onChange={handleChange} value={message}/>
            <button><i className="material-icons">send</i></button>
        </form>
      </div>
    </div>
  );
}

export default App;
