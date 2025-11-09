import React, { useState } from 'react';
import SidebarNav from './components/SidebarNav';
import HeroSpline from './components/HeroSpline';
import ChatPane from './components/ChatPane';
import CalendarPreview from './components/CalendarPreview';
import CommandK from './components/CommandK';

export default function App() {
  const [active, setActive] = useState('chat');

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-950 dark:to-zinc-900 text-zinc-900 dark:text-zinc-100">
      <div className="flex">
        <SidebarNav activeTab={active} onChange={setActive} />
        <main className="flex-1 p-4 md:p-8 pb-20 md:pb-8">
          <div className="max-w-7xl mx-auto space-y-6">
            <header className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h1 className="text-2xl md:text-3xl font-semibold tracking-tight">Your AI Command Center</h1>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">Plan, think, and organize — unified by an intelligent assistant.</p>
                </div>
                <div className="hidden md:block text-xs text-zinc-500">Light/Dark supported</div>
              </div>
              <HeroSpline />
            </header>

            <section className="grid md:grid-cols-3 gap-6">
              <div className="md:col-span-2 h-[520px]">
                <ChatPane />
              </div>
              <div className="space-y-6">
                <CalendarPreview />
                <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 p-4 bg-white/60 dark:bg-zinc-950/60 backdrop-blur-xl">
                  <h3 className="font-medium mb-2">Quick Capture</h3>
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">Turn ideas into tasks or notes instantly. Try ⌘K anywhere.</p>
                </div>
              </div>
            </section>

            <footer className="pt-4 text-xs text-zinc-500">
              Demo mode with sample data. Google sign-in, calendar sync, and persistence can be enabled in a full build.
            </footer>
          </div>
        </main>
      </div>

      <CommandK />
    </div>
  );
}
