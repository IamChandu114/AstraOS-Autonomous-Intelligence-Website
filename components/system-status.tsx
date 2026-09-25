'use client'

import { Circle } from 'lucide-react'

type StatusItem = { label: string; value: string; tone?: 'accent' | 'muted' }

export function SystemStatus() {
  const items: StatusItem[] = [
    { label: 'RUNTIME', value: 'ONLINE', tone: 'accent' },
    { label: 'TELEMETRY', value: 'AVAILABLE', tone: 'accent' },
    { label: 'AI ENGINE', value: 'AVAILABLE', tone: 'accent' },
    { label: 'WEBSOCKET', value: 'AVAILABLE', tone: 'accent' },
    { label: 'BENCHMARKS', value: 'AVAILABLE', tone: 'accent' },
    { label: 'EVIDENCE', value: 'AVAILABLE', tone: 'accent' },
  ]
  return <section aria-label="System status" className="border-b hairline bg-card"><div className="mx-auto grid max-w-7xl divide-y hairline px-5 sm:grid-cols-2 sm:divide-x sm:divide-y-0 lg:grid-cols-6 lg:px-8">{items.map((item) => <div key={item.label} className="flex items-center justify-between gap-4 px-0 py-4 sm:px-4 lg:block lg:px-4"><div className="mono text-[9px] tracking-[.12em] text-muted-foreground">{item.label}</div><div className={`mt-1 flex items-center gap-2 mono text-[10px] tracking-[.08em] ${item.tone === 'accent' ? 'text-accent' : 'text-muted-foreground'}`}><Circle className="size-1.5 fill-current" />{item.value}</div></div>)}</div></section>
}
    
