import React from 'react';
import Spline from '@splinetool/react-spline';

export default function HeroSpline() {
  return (
    <div className="relative h-72 md:h-96 lg:h-[420px] w-full overflow-hidden rounded-2xl border border-zinc-200 dark:border-zinc-800">
      <Spline scene="https://prod.spline.design/4cHQr84zOGAHOehh/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/0 via-white/0 to-white dark:from-zinc-950/0 dark:via-zinc-950/0 dark:to-zinc-950" />
      <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl" />
    </div>
  );
}
