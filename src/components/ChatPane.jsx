import React, { useEffect, useRef, useState } from 'react';
import { Mic, Send, Sparkles } from 'lucide-react';

const demoMessages = [
  { role: 'assistant', content: 'Welcome! I can help plan your week, schedule focus time, and turn ideas into tasks.' },
  { role: 'user', content: 'Find 2 hours tomorrow for deep work and add it to my calendar.' },
  { role: 'assistant', content: 'I found 2-4 PM free tomorrow. Shall I block a Focus Session there and set Do Not Disturb?' },
];

export default function ChatPane() {
  const [messages, setMessages] = useState(demoMessages);
  const [input, setInput] = useState('');
  const endRef = useRef(null);

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const send = () => {
    if (!input.trim()) return;
    const newMsgs = [...messages, { role: 'user', content: input }];
    setMessages(newMsgs);
    setInput('');
    // Mock AI response
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        { role: 'assistant', content: 'On it! I drafted a task and proposed a time slot. You can adjust in Calendar.' },
      ]);
    }, 600);
  };

  return (
    <div className="flex flex-col h-full rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-950/60 backdrop-blur-xl">
      <div className="flex items-center justify-between px-4 py-3 border-b border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center gap-2">
          <Sparkles className="text-blue-600" size={18} />
          <span className="font-medium">Assistant</span>
        </div>
        <div className="text-xs text-zinc-500">Context-aware • Demo mode</div>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((m, i) => (
          <div key={i} className={m.role === 'user' ? 'flex justify-end' : 'flex justify-start'}>
            <div
              className={[
                'max-w-[80%] rounded-2xl px-4 py-2 text-sm',
                m.role === 'user'
                  ? 'bg-blue-600 text-white'
                  : 'bg-zinc-100 dark:bg-zinc-900 text-zinc-900 dark:text-zinc-100',
              ].join(' ')}
            >
              {m.content}
            </div>
          </div>
        ))}
        <div ref={endRef} />
      </div>
      <div className="p-3 border-t border-zinc-200 dark:border-zinc-800">
        <div className="flex items-center gap-2">
          <button className="inline-flex items-center justify-center h-10 w-10 rounded-xl border border-zinc-200 dark:border-zinc-800 hover:bg-zinc-50 dark:hover:bg-zinc-900">
            <Mic size={18} />
          </button>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && send()}
            placeholder="Ask anything — e.g., Plan my week"
            className="flex-1 h-10 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-600"
          />
          <button onClick={send} className="inline-flex items-center gap-2 h-10 px-3 rounded-xl bg-blue-600 text-white hover:bg-blue-700">
            <Send size={16} />
            Send
          </button>
        </div>
      </div>
    </div>
  );
}
