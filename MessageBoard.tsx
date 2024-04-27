import React, { useState } from 'react';

function MessageBoard() {
  const [inputText, setInputText] = useState('');
  const [messages, setMessages] = useState([]);

  const handleMessageSubmit = () => {
    if (inputText.trim() !== '') {
      setMessages([...messages, inputText]);
      setInputText('');
    }
  };

  return (
    <div>
      <h2>Message Board</h2>
      <div>
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Write your message here..."
          rows={4}
          cols={50}
        />
        <br />
        <button onClick={handleMessageSubmit}>Submit</button>
      </div>
      <div>
        {messages.map((message, index) => (
          <div key={index}>
            <p>{message}</p>
            <hr />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MessageBoard;
