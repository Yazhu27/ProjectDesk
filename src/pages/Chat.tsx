import React, { useState, useEffect, useRef } from 'react';
import { Send, MessageCircle, Users, Smile } from 'lucide-react';
import io, { Socket } from 'socket.io-client';

interface Message {
  id: string;
  text: string;
  timestamp: Date;
  user: string;
}

const Chat: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const [newMessage, setNewMessage] = useState('');
  const [isConnected, setIsConnected] = useState(false);
  const [onlineUsers, setOnlineUsers] = useState(1);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const socketRef = useRef<Socket | null>(null);

  // Mock user for demo purposes
  const currentUser = 'Yazhini S';

  useEffect(() => {
    // Initialize socket connection (mock for demo)
    setIsConnected(true);
    
    // Add some initial messages for demo
    const initialMessages: Message[] = [
      {
        id: '1',
        text: 'Welcome to the team chat! 👋',
        timestamp: new Date(Date.now() - 3600000),
        user: 'System'
      },
      {
        id: '2',
        text: 'Hey everyone! Just deployed the new dashboard features.',
        timestamp: new Date(Date.now() - 1800000),
        user: 'Aarav Mehta'
      },
      {
        id: '3',
        text: 'Great work on the analytics module! The performance improvements are impressive.',
        timestamp: new Date(Date.now() - 900000),
        user: 'Priya Narayanan'
      },
      {
        id: '4',
        text: 'Thanks! The new caching strategy really made a difference.',
        timestamp: new Date(Date.now() - 600000),
        user: 'Chen Wei'
      }
    ];
    
    setMessages(initialMessages);
    setOnlineUsers(Math.floor(Math.random() * 8) + 3); // Random number between 3-10

    // Cleanup function
    return () => {
      if (socketRef.current) {
        socketRef.current.disconnect();
      }
    };
  }, []);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newMessage.trim()) return;

    const message: Message = {
      id: Date.now().toString(),
      text: newMessage,
      timestamp: new Date(),
      user: currentUser
    };

    setMessages(prev => [...prev, message]);
    setNewMessage('');

    // Simulate receiving a response after a delay (for demo purposes)
    setTimeout(() => {
      const responses = [
        'That sounds great!',
        'I agree with that approach.',
        'Let me know if you need any help with that.',
        'Good point! I hadn\'t considered that.',
        'Thanks for the update!',
        'Looking forward to seeing the results.',
        'That should improve our workflow significantly.'
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      const teamMembers = ['Arjun Raj', 'Divya Sharma', 'Jacob Williams', 'Anjali Kapoor', 'Ravi Sankar'];
      const randomUser = teamMembers[Math.floor(Math.random() * teamMembers.length)];
      
      const responseMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: randomResponse,
        timestamp: new Date(),
        user: randomUser
      };
      
      setMessages(prev => [...prev, responseMessage]);
    }, 2000 + Math.random() * 3000); // Random delay between 2-5 seconds
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString('en-US', { 
      hour: '2-digit', 
      minute: '2-digit',
      hour12: true 
    });
  };

  const formatDate = (date: Date) => {
    const today = new Date();
    const messageDate = new Date(date);
    
    if (messageDate.toDateString() === today.toDateString()) {
      return 'Today';
    }
    
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);
    
    if (messageDate.toDateString() === yesterday.toDateString()) {
      return 'Yesterday';
    }
    
    return messageDate.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const groupMessagesByDate = (messages: Message[]) => {
    const groups: { [key: string]: Message[] } = {};
    
    messages.forEach(message => {
      const dateKey = formatDate(message.timestamp);
      if (!groups[dateKey]) {
        groups[dateKey] = [];
      }
      groups[dateKey].push(message);
    });
    
    return groups;
  };

  const messageGroups = groupMessagesByDate(messages);

  return (
    <div className="h-[calc(100vh-12rem)] flex flex-col">
      {/* Chat Header */}
      <div className="bg-white rounded-t-lg shadow-sm border border-gray-200 p-4 border-b">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mr-3">
              <MessageCircle className="w-5 h-5 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-semibold text-gray-900">Team Chat</h2>
              <p className="text-sm text-gray-500">General discussion</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center text-sm text-gray-500">
              <div className={`w-2 h-2 rounded-full mr-2 ${isConnected ? 'bg-green-500' : 'bg-red-500'}`} />
              {isConnected ? 'Connected' : 'Disconnected'}
            </div>
            <div className="flex items-center text-sm text-gray-500">
              <Users className="w-4 h-4 mr-1" />
              {onlineUsers} online
            </div>
          </div>
        </div>
      </div>

      {/* Messages Area */}
      <div className="flex-1 bg-white border-l border-r border-gray-200 overflow-y-auto p-4 space-y-4">
        {Object.entries(messageGroups).map(([date, dateMessages]) => (
          <div key={date}>
            {/* Date Separator */}
            <div className="flex items-center justify-center my-4">
              <div className="bg-gray-100 text-gray-600 text-xs px-3 py-1 rounded-full">
                {date}
              </div>
            </div>
            
            {/* Messages for this date */}
            {dateMessages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.user === currentUser ? 'justify-end' : 'justify-start'} mb-4`}
              >
                <div className={`max-w-xs lg:max-w-md ${
                  message.user === currentUser 
                    ? 'bg-blue-600 text-white' 
                    : message.user === 'System'
                    ? 'bg-gray-100 text-gray-800'
                    : 'bg-gray-100 text-gray-900'
                } rounded-lg px-4 py-2`}>
                  {message.user !== currentUser && message.user !== 'System' && (
                    <div className="text-xs font-medium mb-1 text-blue-600">
                      {message.user}
                    </div>
                  )}
                  <div className="text-sm">{message.text}</div>
                  <div className={`text-xs mt-1 ${
                    message.user === currentUser 
                      ? 'text-blue-100' 
                      : 'text-gray-500'
                  }`}>
                    {formatTime(message.timestamp)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Message Input */}
      <div className="bg-white rounded-b-lg shadow-sm border border-gray-200 p-4 border-t">
        <form onSubmit={handleSendMessage} className="flex items-center space-x-3">
          <div className="flex-1 relative">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent pr-12"
              disabled={!isConnected}
            />
            <button
              type="button"
              className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 rounded-full hover:bg-gray-100"
            >
              <Smile className="w-5 h-5 text-gray-400" />
            </button>
          </div>
          <button
            type="submit"
            disabled={!newMessage.trim() || !isConnected}
            className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors duration-200"
          >
            <Send className="w-5 h-5" />
          </button>
        </form>
        
        {!isConnected && (
          <div className="mt-2 text-sm text-red-600 flex items-center">
            <div className="w-2 h-2 bg-red-500 rounded-full mr-2" />
            Connection lost. Trying to reconnect...
          </div>
        )}
      </div>
    </div>
  );
};

export default Chat;