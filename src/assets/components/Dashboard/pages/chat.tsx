// Chat.tsx
import React, { useState } from 'react';

interface ChatMessage {
  id: number;
  role: 'admin' | 'student';
  message: string;
  avatarUrl?: string;
  initials?: string;
}

interface ChatProps {
  userRole: 'admin' | 'student';
}

const Chat: React.FC<ChatProps> = ({ userRole }) => {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 1,
      role: 'student',
      message: "How can we help?",
      avatarUrl: "https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80"
    },
  ]);

  const [inputValue, setInputValue] = useState<string>('');

  const handleSendMessage = () => {
    if (inputValue.trim()) {
      const newMessage: ChatMessage = {
        id: messages.length + 1,
        role: userRole,  // Use the role of the current user
        message: inputValue,
        initials: userRole === 'admin' ? 'AZ' : undefined, // Set initials if the user is admin
      };

      setMessages([...messages, newMessage]);
      setInputValue('');
    }
  };

  return (
    <div className="border-2 h-[100%] rounded-lg bg-[#FFFFFF] dark:bg-[#262626] dark:border-[#404040] border-[#E5E7EB] flex flex-col justify-between">
  <div className="p-4 flex-grow overflow-y-auto">
    {/* Chat Messages List */}
    <ul className="space-y-5">
      {messages.map((msg) => (
        <li
          key={msg.id}
          className={`flex gap-x-2 sm:gap-x-4 ${
            msg.role === 'admin' ? 'justify-end' : 'justify-start'
          }`}
        >
          {msg.role === 'student' && (
            <img
              className="w-10 h-10 rounded-full"
              src={msg.avatarUrl}
              alt="Avatar"
            />
          )}

          <div
            className={`max-w-[80%] sm:max-w-lg flex flex-col ${
              msg.role === 'admin'
                ? 'bg-blue-600 text-white'
                : 'bg-white border border-gray-200 dark:bg-neutral-900 dark:border-neutral-700'
            } rounded-2xl p-4 space-y-3`}
          >
            <p className="text-sm">{msg.message}</p>
          </div>

          {msg.role === 'admin' && (
            <span className="w-9 h-9 flex items-center justify-center rounded-full bg-gray-600">
              <span className="text-sm font-medium text-white leading-none">{msg.initials}</span>
            </span>
          )}
        </li>
      ))}
    </ul>
  </div>

  {/* Input Field */}
  <div className="flex justify-center items-center">
  <div className='border-t-[2px] w-[94%] dark:border-[#404040] border-[#E5E7EB]'></div>
</div>

  <div className="p-4">
    <div className="flex gap-2">
      <textarea
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        rows={1}
        maxLength={500} // Optional: limit characters
        className="flex-grow p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 resize-none overflow-hidden"
        placeholder="Type a message..."
        style={{ height: 'auto', minHeight: '2.5rem', maxHeight: '9rem' }} // Adjust these values as needed
        onInput={(e) => {
          e.target.style.height = 'auto';
          e.target.style.height = `${e.target.scrollHeight}px`;
        }}
      />
      <button
        onClick={handleSendMessage}
        className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
      >
        Send
      </button>
    </div>
  </div>
</div>

  
  
  );
};

export default Chat;
