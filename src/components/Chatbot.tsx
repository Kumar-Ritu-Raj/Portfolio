import React, { useState, useRef, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCommentDots,
  faTimes,
  faPaperPlane,
  faRobot,
} from '@fortawesome/free-solid-svg-icons';
import { knowledgeBase, suggestedQuestions } from '../data/chatbot.ts';
import type { Message } from '../types/chatbot';

import '../styles/Chatbot.css';

const getResponse = (input: string): string => {
  const lower = input.toLowerCase().trim();

  for (const entry of knowledgeBase) {
    if (entry.keywords.some((keyword) => lower.includes(keyword))) {
      return entry.response;
    }
  }

  return "I'm not sure about that. 🤔 Try asking about Kumar's skills, experience, projects, education, certifications, achievements, or contact info. Or reach him directly at 📧 kumarrituraj2000@gmail.com!";
};

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! 👋 I'm Kumar's assistant. Ask me anything about Kumar Ritu Raj — his skills, projects, experience, or how to get in touch!",
      sender: 'bot',
    },
  ]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const sendMessage = (text: string) => {
    if (!text.trim()) return;

    const userMessage: Message = {
      id: Date.now(),
      text,
      sender: 'user',
    };

    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsTyping(true);

    setTimeout(() => {
      const botResponse: Message = {
        id: Date.now() + 1,
        text: getResponse(text),
        sender: 'bot',
      };
      setMessages((prev) => [...prev, botResponse]);
      setIsTyping(false);
    }, 750);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(input);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage(input);
    }
  };

  return (
    <div className="chatbot-wrapper">
      {isOpen && (
        <div className="chatbot-window">
          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <div className="chatbot-avatar-wrapper">
                <div className="chatbot-avatar">
                  <FontAwesomeIcon icon={faRobot} />
                </div>
                <span className="chatbot-online-dot" aria-label="Online"></span>
              </div>
              <div>
                <p className="chatbot-name">Kumar Ritu Raj Assistant</p>
                <p className="chatbot-status">
                  <span className="chatbot-status-dot"></span> Online
                </p>
              </div>
            </div>
            <button
              className="chatbot-close"
              onClick={() => setIsOpen(false)}
              aria-label="Close chatbot"
            >
              <FontAwesomeIcon icon={faTimes} />
            </button>
          </div>

          {/* Messages */}
          <div className="chatbot-messages">
            {messages.map((msg) => (
              <div key={msg.id} className={`chatbot-message ${msg.sender}`}>
                <p className="chatbot-message-text">{msg.text}</p>
              </div>
            ))}
            {isTyping && (
              <div className="chatbot-message bot">
                <p className="chatbot-typing">
                  <span></span>
                  <span></span>
                  <span></span>
                </p>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Suggestions */}
          <div className="chatbot-suggestions">
            {suggestedQuestions.map((q, i) => (
              <button
                key={i}
                className="chatbot-suggestion-btn"
                onClick={() => sendMessage(q)}
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input */}
          <form className="chatbot-input-area" onSubmit={handleSubmit}>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Ask about Kumar..."
              className="chatbot-input"
              autoComplete="off"
            />
            <button
              type="submit"
              className="chatbot-send-btn"
              disabled={!input.trim()}
              aria-label="Send message"
            >
              <FontAwesomeIcon icon={faPaperPlane} />
            </button>
          </form>
        </div>
      )}

      {/* Toggle Button */}
      <div className="chatbot-toggle-wrapper">
        <button
          className={`chatbot-toggle-btn ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen((prev) => !prev)}
          aria-label="Toggle chatbot"
        >
          <FontAwesomeIcon icon={isOpen ? faTimes : faCommentDots} />
        </button>
        {!isOpen && <span className="chatbot-toggle-online-dot"></span>}
      </div>
    </div>
  );
};

export default Chatbot;
