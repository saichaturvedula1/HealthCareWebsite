import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Chatbot.css';


const Chatbot = () => {
  const [userQuery, setUserQuery] = useState('');
  const [conversation, setConversation] = useState([]);

  const [isOpen, setIsOpen] = useState(false); // State to track if chat window is open

  const toggleChatWindow = () => {
    setIsOpen(!isOpen); // Toggle the chat window open/close
  };

  const generalQueries = {
    "What are your opening hours?": "We are open from 9 AM to 5 PM, Monday to Friday.",
    "How can I book an appointment?": "You can book an appointment through our website or by calling us at (123) 456-7890.",
    // You can add more predefined queries and answers here
  };

  const handleInputChange = (event) => {
    setUserQuery(event.target.value);
  };

  const handleSubmit = () => {
    const response = generalQueries[userQuery] || "I'm not sure how to answer that. Please contact us at info@healthcare.com for more information.";
    setConversation(conversation.concat({ question: userQuery, answer: response }));
    setUserQuery('');
  };

  if (!isVisible) return null;

  return (
    <div className="chatbot-container">
      {/* Added chatbot header */}
      <div className="chatbot-header">
        Chatbot
      </div>
      <div className="messages">
        {conversation.map((msg, index) => (
          // Updated message classes based on the sender
          <div key={index} className={`message ${msg.sender === 'user' ? 'message-user' : 'message-chatbot'}`}>
            <p><strong>{msg.sender === 'user' ? 'You' : 'Chatbot'}:</strong> {msg.content}</p>
          </div>
        ))}
      </div>
      {/* Updated input area structure */}
      <div className="input-area">
        <input
          type="text"
          className="input-field"
          placeholder="Ask a question..."
          value={userQuery}
          onChange={handleInputChange}
        />
        <button onClick={handleSubmit} className="send-button">Send</button>
      </div>
    </div>
  );
};

export default Chatbot;
