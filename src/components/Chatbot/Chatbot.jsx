import React, { useState, useEffect } from 'react';
import { Button, Container, ListGroup } from 'react-bootstrap';
import { AiOutlineClose } from 'react-icons/ai';
import './Chatbot.css';

const defaultQuestions = [
  { id: 1, question: "Operating Hours", answer: "We are open from 8 AM to 9 PM every day." },
  { id: 2, question: "Book Appointment", answer: "You can book an appointment through our website or call us directly at (123) 456-7890." },
  { id: 3, question: "Virtual Consultations", answer: "Yes, we offer virtual consultations. You can schedule one via our portal or contact us for more information." },
];

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const defaultGreeting = { text: "Hello! 👋 I'm here to help you with your healthcare questions.", sender: 'bot' };
  const [messages, setMessages] = useState([defaultGreeting]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScroll = () => {
    const chatbot = document.querySelector('.chatbot-container');
      if (window.scrollY > 150) {
        chatbot.style.position = 'fixed';
        chatbot.style.bottom = '20px';
      } else {
        chatbot.style.position = 'absolute';
        chatbot.style.bottom = 'initial';
      }
    }
  

  const resetChat = () => {
    setIsOpen(false);
    setMessages([defaultGreeting]);
  };

  const handleQuestionSelect = (questionId) => {
    const question = defaultQuestions.find(q => q.id === questionId);
    addMessage({ text: question.question, sender: 'user' });
    addMessage({ text: question.answer, sender: 'bot' }, true);
  };

  const addMessage = (message, displayOptions = false) => {
    setMessages((prevMessages) => {
      const updatedMessages = [...prevMessages, message];
      if (displayOptions) {
        updatedMessages.push({ text: "Choose one option from below", sender: 'bot' });
        defaultQuestions.forEach(q => {
          updatedMessages.push({ text: q.question, sender: 'question', id: q.id });
        });
      }
      return updatedMessages;
    });
  };

  // Function to initialize chat messages with options
  const initializeChatWithOptions = () => {
    const initialMessages = [defaultGreeting];
    defaultQuestions.forEach(q => {
      initialMessages.push({ text: q.question, sender: 'question', id: q.id });
    });
    setMessages(initialMessages);
  };

  return (
    <div className="chatbot-container">
      {!isOpen ? (
        <Button onClick={() => {
          setIsOpen(true);
          initializeChatWithOptions(); // Initialize chat with options
        }} className="chat-toggle-btn">
          Chat with us
        </Button>
      ) : (
        <Container className="chat-interface">
          <div className="chat-header">
            <span>Chat with us</span>
            <AiOutlineClose onClick={resetChat} className="close-icon" />
          </div>
          <ListGroup className="message-list">
            {messages.map((message, index) => (
              <ListGroup.Item key={index} className={`message ${message.sender}`} onClick={() => message.sender === 'question' && handleQuestionSelect(message.id)}>
                {message.text}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Container>
      )}
    </div>
  );
};

export default Chatbot;
