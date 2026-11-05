'use client'

import { useState } from 'react'
import {
  AlertTriangle,
  ArrowUpRight,
  Bell,
  Check,
  ChevronDown,
  CircleHelp,
  FileCheck2,
  FileUp,
  Fingerprint,
  LayoutDashboard,
  LockKeyhole,
  MoreHorizontal,
  Plus,
  Search,
  Settings2,
  ShieldCheck,
  Upload,
  Users,
  WalletCards,
  X,
} from 'lucide-react'

type Batch = {
  name: string
  purpose: string
  recipients: string
  amount: string
  status: 'Processing' | 'Ready to pay' | 'Needs review' | 'Completed'
  date: string
}

const batches: Batch[] = [
  { name: 'December relief fund', purpose: 'Community support', recipients: '1,000', amount: '₦12,450,000', status: 'Processing', date: 'Today, 09:42' },
  { name: 'Scholarship stipends — Q4', purpose: 'Education', recipients: '248', amount: '₦4,960,000', status: 'Ready to pay', date: 'Yesterday' },
  { name: 'Lagos community health drive', purpose: 'Healthcare', recipients: '86', amount: '₦1,720,000', status: 'Needs review', date: 'Nov 28, 2026' },
  { name: 'Volunteer transport support', purpose: 'Operations', recipients: '42', amount: '₦840,000', status: 'Completed', date: 'Nov 24, 2026' },
]

function StatusPill({ status }: { status: Batch['status'] }) {
  const styles = {
    Processing: 'bg-blue-50 text-blue-700 ring-blue-600/10',
    'Ready to pay': 'bg-emerald-50 text-emerald-700 ring-emerald-600/10',
    'Needs review': 'bg-amber-50 text-amber-700 ring-amber-600/10',
    Completed: 'bg-slate-100 text-slate-600 ring-slate-500/10',
  }
  return <span className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ring-1 ring-inset ${styles[status]}`}><span className="h-1.5 w-1.5 rounded-full bg-current" />{status}</span>
}

export default function Page() {
  const [showUpload, setShowUpload] = useState(false)
  const [filter, setFilter] = useState('All batches')

  return (
    <main className="min-h-screen bg-[#f7f9fc] text-[#132238]">
      <aside className="fixed inset-y-0 left-0 hidden w-[244px] border-r border-slate-200/80 bg-white lg:flex lg:flex-col">
        <div className="flex h-[76px] items-center gap-3 border-b border-slate-100 px-7">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#123d5b] text-white shadow-sm"><ShieldCheck size={19} strokeWidth={2.5} /></div>
          <div><div className="text-[15px] font-bold tracking-tight text-[#123d5b]">directly</div><div className="text-[9px] font-semibold uppercase tracking-[.18em] text-emerald-600">trust infrastructure</div></div>
        </div>
        <nav className="flex-1 space-y-1 px-3 py-6 text-sm font-medium">
          <div className="mb-4 px-3 text-[10px] font-bold uppercase tracking-[.16em] text-slate-400">Workspace</div>
          <a className="flex items-center gap-3 rounded-lg bg-[#edf7f5] px-3 py-2.5 font-semibold text-[#087f73]" href="#"><LayoutDashboard size={17} /> Overview</a>
          <a className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-500 hover:bg-slate-50" href="#batches"><WalletCards size={17} /> Payout batches <span className="ml-auto rounded-full bg-slate-100 px-2 py-0.5 text-[11px] text-slate-500">12</span></a>
          <a className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-500 hover:bg-slate-50" href="#"><Users size={17} /> Recipients</a>
          <a className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-500 hover:bg-slate-50" href="#"><FileCheck2 size={17} /> Reports</a>
          <div className="mb-4 mt-8 px-3 text-[10px] font-bold uppercase tracking-[.16em] text-slate-400">Manage</div>
          <a className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-500 hover:bg-slate-50" href="#"><Settings2 size={17} /> Organisation</a>
          <a className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-slate-500 hover:bg-slate-50" href="#"><CircleHelp size={17} /> Help centre</a>
        </nav>
        <div className="m-4 rounded-xl bg-[#f4f8fb] p-4">
          <div className="mb-2 flex items-center gap-2 text-xs font-bold text-[#123d5b]"><LockKeyhole size={14} /> Your money stays yours</div>
          <p className="text-[11px] leading-4 text-slate-500">directly never holds your funds. Payouts move through a licensed partner.</p>
        </div>
        <div className="flex items-center gap-3 border-t border-slate-100 p-5"><div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#d8ece9] text-xs font-bold text-[#087f73]">AO</div><div className="min-w-0 flex-1"><p className="truncate text-xs font-semibold">Amina Okafor</p><p className="truncate text-[11px] text-slate-400">Community Trust</p></div><MoreHorizontal size={16} className="text-slate-400" /></div>
      </aside>

      <section className="lg:pl-[244px]">
        <header className="flex h-[76px] items-center justify-between border-b border-slate-200/80 bg-white px-5 sm:px-10">
          <div className="lg:hidden flex items-center gap-2"><div className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#123d5b] text-white"><ShieldCheck size={16} /></div><span className="font-bold text-[#123d5b]">directly</span></div>
          <div className="hidden text-sm text-slate-400 sm:block">Tuesday, December 1, 2026 <span className="mx-2 text-slate-300">/</span> <span className="text-slate-600">Overview</span></div>
          <div className="ml-auto flex items-center gap-3"><button aria-label="Notifications" className="relative rounded-lg p-2 text-slate-400 hover:bg-slate-50"><Bell size={18} /><span className="absolute right-1.5 top-1.5 h-1.5 w-1.5 rounded-full bg-rose-500" /></button><div className="h-6 w-px bg-slate-200" /><button className="flex items-center gap-2 text-sm font-semibold text-slate-600"><span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#d8ece9] text-xs text-[#087f73]">AO</span><ChevronDown size={14} /></button></div>
        </header>

        <div className="mx-auto max-w-[1280px] px-5 py-8 sm:px-10">
          <div className="mb-8 flex flex-col justify-between gap-5 sm:flex-row sm:items-end"><div><p className="mb-2 text-xs font-bold uppercase tracking-[.16em] text-emerald-600">Good morning, Amina</p><h1 className="text-3xl font-bold tracking-[-.03em] text-[#132238]">Make every payout count.</h1><p className="mt-2 text-sm text-slate-500">One clear record for every naira, from your list to their account.</p></div><button onClick={() => setShowUpload(true)} className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-[#123d5b] px-5 text-sm font-semibold text-white shadow-[0_5px_12px_rgba(18,61,91,.18)] transition hover:bg-[#0d314a]"><Plus size={17} /> Create payout batch</button></div>

          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4"><Metric label="Total paid out" value="₦19.97m" detail="Across 12 batches" icon={<WalletCards size={18} />} tone="teal" /><Metric label="Recipients reached" value="1,847" detail="98.4% success rate" icon={<Users size={18} />} tone="blue" /><Metric label="Awaiting confirmation" value="126" detail="From 2 active batches" icon={<Bell size={18} />} tone="amber" /><Metric label="Verification checks" value="4,392" detail="0 unresolved flags" icon={<Fingerprint size={18} />} tone="purple" /></div>

          <div className="mt-8 grid gap-5 xl:grid-cols-[1fr_326px]">
            <div id="batches" className="rounded-xl border border-slate-200/90 bg-white shadow-[0_2px_8px_rgba(20,42,70,.025)]"><div className="flex flex-col gap-4 border-b border-slate-100 px-5 py-5 sm:flex-row sm:items-center sm:justify-between"><div><h2 className="font-bold text-[#132238]">Recent payout batches</h2><p className="mt-1 text-xs text-slate-400">A live view of your organisation&apos;s payouts</p></div><div className="flex gap-2"><button className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600"><Search size={14} /> Search</button><button onClick={() => setFilter(filter === 'All batches' ? 'Active only' : 'All batches')} className="flex items-center gap-2 rounded-lg border border-slate-200 px-3 py-2 text-xs font-semibold text-slate-600">{filter}<ChevronDown size={14} /></button></div></div><div className="overflow-x-auto"><table className="w-full min-w-[680px] text-left text-sm"><thead className="bg-slate-50/70 text-[10px] font-bold uppercase tracking-[.12em] text-slate-400"><tr><th className="px-5 py-3">Batch</th><th className="px-3 py-3">Recipients</th><th className="px-3 py-3">Amount</th><th className="px-3 py-3">Status</th><th className="px-3 py-3">Last activity</th><th className="px-5 py-3" /></tr></thead><tbody className="divide-y divide-slate-100">{batches.filter((batch) => filter === 'All batches' || batch.status !== 'Completed').map((batch) => <tr key={batch.name} className="transition hover:bg-slate-50/60"><td className="px-5 py-4"><div className="font-semibold text-slate-700">{batch.name}</div><div className="mt-1 text-xs text-slate-400">{batch.purpose}</div></td><td className="px-3 py-4 text-slate-600">{batch.recipients}</td><td className="px-3 py-4 font-semibold text-slate-700">{batch.amount}</td><td className="px-3 py-4"><StatusPill status={batch.status} /></td><td className="px-3 py-4 text-xs text-slate-400">{batch.date}</td><td className="px-5 py-4 text-right"><button aria-label={`Open ${batch.name}`} className="rounded-md p-1.5 text-slate-400 hover:bg-slate-100"><ArrowUpRight size={16} /></button></td></tr>)}</tbody></table></div><div className="flex justify-center border-t border-slate-100 px-5 py-4"><button className="text-xs font-bold text-[#087f73] hover:underline">View all batches <span aria-hidden="true">→</span></button></div></div>

            <div className="rounded-xl border border-slate-200/90 bg-white p-5 shadow-[0_2px_8px_rgba(20,42,70,.025)]"><div className="mb-6 flex items-start justify-between"><div><h2 className="font-bold text-[#132238]">Your trust score</h2><p className="mt-1 text-xs text-slate-400">Based on your payout history</p></div><ShieldCheck className="text-emerald-500" size={21} /></div><div className="flex items-center gap-5"><div className="relative flex h-24 w-24 items-center justify-center rounded-full" style={{ background: 'conic-gradient(#13a68e 0 93%, #e5f1f0 93% 100%)' }}><div className="flex h-[76px] w-[76px] items-center justify-center rounded-full bg-white text-2xl font-bold text-[#123d5b]">93</div></div><div><p className="text-sm font-bold text-slate-700">Excellent standing</p><p className="mt-1 text-xs leading-5 text-slate-400">Your records are clear and<br />your recipients confirm quickly.</p></div></div><div className="mt-6 space-y-3 border-t border-slate-100 pt-5"><TrustRow icon={<Check size={13} />} label="Identity verified" /><TrustRow icon={<Check size={13} />} label="No unresolved flags" /><TrustRow icon={<Check size={13} />} label="Public reports enabled" /></div><button className="mt-5 flex w-full items-center justify-center gap-1 text-xs font-bold text-[#087f73] hover:underline">See how this is calculated <ArrowUpRight size={13} /></button></div>
          </div>

          <div className="mt-5 flex flex-col items-start justify-between gap-4 rounded-xl border border-[#cde8e3] bg-[#effaf7] px-5 py-4 sm:flex-row sm:items-center"><div className="flex items-start gap-3"><div className="mt-0.5 rounded-full bg-emerald-100 p-1.5 text-emerald-600"><Fingerprint size={16} /></div><div><p className="text-sm font-bold text-[#17675c]">Every batch gets a tamper-evident fingerprint</p><p className="mt-1 text-xs text-[#4c8078]">Anyone can verify that your published payout record hasn&apos;t changed.</p></div></div><button className="shrink-0 text-xs font-bold text-[#087f73]">Learn about verification <ArrowUpRight className="ml-1 inline" size={13} /></button></div>
        </div>
      </section>

      {showUpload && <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#10263b]/40 p-4 backdrop-blur-sm"><div role="dialog" aria-modal="true" className="w-full max-w-lg rounded-2xl bg-white p-6 shadow-2xl"><div className="flex items-start justify-between"><div><p className="text-xs font-bold uppercase tracking-[.14em] text-emerald-600">New payout batch</p><h2 className="mt-1 text-xl font-bold text-[#132238]">Upload your recipient list</h2><p className="mt-1 text-sm text-slate-500">We&apos;ll check every row before any money moves.</p></div><button aria-label="Close" onClick={() => setShowUpload(false)} className="rounded-lg p-2 text-slate-400 hover:bg-slate-50"><X size={18} /></button></div><div className="mt-6 grid gap-4"><label className="text-xs font-bold text-slate-600">Batch name<input className="mt-2 h-11 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none ring-emerald-500 focus:ring-2" placeholder="e.g. December relief fund" /></label><label className="text-xs font-bold text-slate-600">Purpose<input className="mt-2 h-11 w-full rounded-lg border border-slate-200 px-3 text-sm outline-none ring-emerald-500 focus:ring-2" placeholder="What is this payout for?" /></label><button className="mt-2 flex min-h-[132px] flex-col items-center justify-center gap-2 rounded-xl border-2 border-dashed border-slate-200 bg-slate-50/60 text-center hover:border-emerald-300 hover:bg-emerald-50/30"><div className="rounded-full bg-white p-3 text-[#087f73] shadow-sm"><Upload size={19} /></div><span className="text-sm font-bold text-slate-600">Drop your recipient list here</span><span className="text-xs text-slate-400">CSV, XLSX or TXT · Max 10MB</span></button></div><div className="mt-6 flex justify-end gap-3"><button onClick={() => setShowUpload(false)} className="rounded-lg px-4 py-2.5 text-sm font-semibold text-slate-500 hover:bg-slate-50">Cancel</button><button onClick={() => setShowUpload(false)} className="flex items-center gap-2 rounded-lg bg-[#123d5b] px-4 py-2.5 text-sm font-semibold text-white"><FileUp size={16} /> Continue</button></div></div></div>}
    </main>
  )
}

function Metric({ label, value, detail, icon, tone }: { label: string; value: string; detail: string; icon: React.ReactNode; tone: string }) {
  const colors: Record<string, string> = { teal: 'bg-[#e8f7f3] text-[#087f73]', blue: 'bg-[#edf3fb] text-[#3970a8]', amber: 'bg-[#fff5df] text-[#ad7612]', purple: 'bg-[#f2effb] text-[#7159ae]' }
  return <div className="rounded-xl border border-slate-200/90 bg-white p-5 shadow-[0_2px_8px_rgba(20,42,70,.025)]"><div className="flex items-start justify-between"><div className={`rounded-lg p-2.5 ${colors[tone]}`}>{icon}</div><MoreHorizontal size={17} className="text-slate-300" /></div><p className="mt-5 text-xs font-medium text-slate-400">{label}</p><p className="mt-1 text-2xl font-bold tracking-tight text-[#132238]">{value}</p><p className="mt-1 text-xs text-slate-400">{detail}</p></div>
}

function TrustRow({ icon, label }: { icon: React.ReactNode; label: string }) { return <div className="flex items-center gap-2 text-xs font-semibold text-slate-600"><span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">{icon}</span>{label}</div> }
