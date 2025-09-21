import React from 'react';
import MobileLayout from '@/components/MobileLayout';
import ChatBot from '@/components/ChatBot';

const Chat = () => {
  return (
    <MobileLayout>
      <div className="max-w-4xl mx-auto h-[calc(100vh-12rem)]">
        <ChatBot className="h-full" />
      </div>
    </MobileLayout>
  );
};

export default Chat;