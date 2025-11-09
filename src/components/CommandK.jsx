import React, { useEffect, useState } from 'react';
import { Command, CalendarPlus, CheckSquare, FilePlus, BarChart3 } from 'lucide-react';

const suggestions = [
  { icon: CalendarPlus, text: 'Find 2 hours this week for deep work' },
  { icon: CheckSquare, text: 'Create a task: Ship v1 landing page by Friday' },
  { icon: FilePlus, text: 'New note from meeting summary' },
  { icon: BarChart3, text: 'Show productivity insights for this week' },
];

export default function CommandK() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('');

  useEffect(() => {
    const handler = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setOpen((v) => !v);
      }
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-24">
      <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />
      <div className="relative w-full max-w-xl rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 overflow-hidden shadow-xl">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-200 dark:border-zinc-800">
          <Command size={18} className="text-blue-600" />
          <input
            autoFocus
            value={value}
            onChange={(e) => setValue(e.target.value)}
            placeholder="Ask or command anything..."
            className="flex-1 bg-transparent outline-none text-sm"/>
          <span className="text-xs text-zinc-500">Esc</span>
        </div>
        <div className="p-2">
          {suggestions
            .filter((s) => s.text.toLowerCase().includes(value.toLowerCase()))
            .map((s, i) => (
              <button key={i} className="w-full flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-zinc-100 dark:hover:bg-zinc-900 text-left">
                <s.icon size={16} className="text-zinc-500" />
                <span className="text-sm">{s.text}</span>
              </button>
            ))}
        </div>
      </div>
    </div>
  );
}
