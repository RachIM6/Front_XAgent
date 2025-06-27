'use client';

import { Bot, X } from 'lucide-react';
import { useChatToggle } from '@/hooks/useChatToggle';
import { ChatDrawer } from './ChatDrawer';

export function ChatToggle() {
  const { isOpen, open, close } = useChatToggle();

  if (isOpen) {
    return <ChatDrawer onClose={close} />;
  }

  return (
    <div className="w-14 shrink-0 flex flex-col items-center p-4">
      <button
        onClick={open}
        className="p-3 bg-blue-600 hover:bg-blue-700 text-white rounded-full shadow-lg transition-all duration-200 hover:scale-105"
        title="Open Chat Assistant"
      >
        <Bot className="h-6 w-6" />
      </button>
    </div>
  );
}