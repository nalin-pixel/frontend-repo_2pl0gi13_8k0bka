import React from 'react';

const sampleEvents = [
  { id: 1, title: 'Standup', time: '09:30', color: 'bg-blue-500' },
  { id: 2, title: 'Deep Work', time: '14:00', color: 'bg-green-500' },
  { id: 3, title: '1:1 with Alex', time: '16:30', color: 'bg-violet-500' },
];

export default function CalendarPreview() {
  return (
    <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-4 bg-white/60 dark:bg-zinc-950/60 backdrop-blur-xl">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-medium">Today</h3>
        <div className="text-xs text-zinc-500">Weekly view</div>
      </div>
      <div className="space-y-2">
        {sampleEvents.map((e) => (
          <div key={e.id} className="flex items-center gap-3 p-2 rounded-xl border border-zinc-200 dark:border-zinc-800">
            <div className={`h-2 w-2 rounded-full ${e.color}`} />
            <div className="flex-1">
              <div className="text-sm font-medium">{e.title}</div>
              <div className="text-xs text-zinc-500">{e.time}</div>
            </div>
            <button className="text-xs px-2 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-900">Open</button>
          </div>
        ))}
      </div>
    </div>
  );
}
