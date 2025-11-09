import React from 'react';
import { MessageSquare, Calendar, StickyNote, CheckSquare, BarChart3, Settings } from 'lucide-react';

const tabs = [
  { key: 'chat', label: 'Chat', icon: MessageSquare },
  { key: 'calendar', label: 'Calendar', icon: Calendar },
  { key: 'notes', label: 'Notes', icon: StickyNote },
  { key: 'tasks', label: 'Tasks', icon: CheckSquare },
  { key: 'analytics', label: 'Analytics', icon: BarChart3 },
  { key: 'settings', label: 'Settings', icon: Settings },
];

export default function SidebarNav({ activeTab, onChange }) {
  return (
    <>
      {/* Desktop sidebar */}
      <aside className="hidden md:flex md:flex-col w-64 shrink-0 border-r border-zinc-200 dark:border-zinc-800 bg-white/60 dark:bg-zinc-950/60 backdrop-blur-xl">
        <div className="px-5 py-6">
          <div className="flex items-center gap-2">
            <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-blue-500 via-sky-400 to-violet-500" />
            <div>
              <div className="font-semibold text-zinc-900 dark:text-zinc-100">Aurora</div>
              <div className="text-xs text-zinc-500">AI Workspace</div>
            </div>
          </div>
        </div>
        <nav className="flex-1 px-2 space-y-1">
          {tabs.map(({ key, label, icon: Icon }) => {
            const active = activeTab === key;
            return (
              <button
                key={key}
                onClick={() => onChange(key)}
                className={[
                  'w-full flex items-center gap-3 rounded-lg px-3 py-2 transition-colors',
                  active
                    ? 'bg-blue-600 text-white'
                    : 'text-zinc-700 hover:bg-zinc-100 dark:text-zinc-300 dark:hover:bg-zinc-900',
                ].join(' ')}
              >
                <Icon size={18} />
                <span className="text-sm font-medium">{label}</span>
              </button>
            );
          })}
        </nav>
        <div className="p-4 text-xs text-zinc-500">
          Press ⌘K for commands
        </div>
      </aside>

      {/* Mobile bottom bar */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 border-t border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-xl z-20">
        <div className="grid grid-cols-5">
          {tabs.slice(0,5).map(({ key, label, icon: Icon }) => {
            const active = activeTab === key;
            return (
              <button
                key={key}
                onClick={() => onChange(key)}
                className="flex flex-col items-center justify-center py-2 text-xs"
              >
                <Icon size={18} className={active ? 'text-blue-600' : 'text-zinc-500'} />
                <span className={active ? 'text-blue-600' : 'text-zinc-500'}>{label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </>
  );
}
