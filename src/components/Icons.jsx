const base = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': true,
}

export const Icon = {
  Download: (p) => (
    <svg width="18" height="18" viewBox="0 0 24 24" {...base} {...p}>
      <path d="M12 3v12" /><path d="m7 10 5 5 5-5" /><path d="M5 21h14" />
    </svg>
  ),
  Mail: (p) => (
    <svg width="20" height="20" viewBox="0 0 24 24" {...base} {...p}>
      <rect x="2" y="4" width="20" height="16" rx="2" /><path d="m22 7-10 6L2 7" />
    </svg>
  ),
  LinkedIn: (p) => (
    <svg width="20" height="20" viewBox="0 0 24 24" {...base} {...p}>
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
    </svg>
  ),
  GitHub: (p) => (
    <svg width="20" height="20" viewBox="0 0 24 24" {...base} {...p}>
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  ),
  Check: (p) => (
    <svg width="26" height="26" viewBox="0 0 24 24" {...base} {...p}>
      <path d="M9 11l3 3 8-8" /><path d="M20 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
    </svg>
  ),
  Spark: (p) => (
    <svg width="26" height="26" viewBox="0 0 24 24" {...base} {...p}>
      <path d="M12 3v4" /><path d="M12 17v4" /><path d="M3 12h4" /><path d="M17 12h4" />
      <path d="m5.6 5.6 2.8 2.8" /><path d="m15.6 15.6 2.8 2.8" /><path d="m5.6 18.4 2.8-2.8" /><path d="m15.6 8.4 2.8-2.8" />
    </svg>
  ),
  Plug: (p) => (
    <svg width="26" height="26" viewBox="0 0 24 24" {...base} {...p}>
      <path d="M9 2v6" /><path d="M15 2v6" /><path d="M6 8h12v3a6 6 0 0 1-12 0V8z" /><path d="M12 17v5" />
    </svg>
  ),
  Cap: (p) => (
    <svg width="24" height="24" viewBox="0 0 24 24" {...base} {...p}>
      <path d="M22 10 12 5 2 10l10 5 10-5z" /><path d="M6 12v5c3 2 9 2 12 0v-5" />
    </svg>
  ),
  Trophy: (p) => (
    <svg width="24" height="24" viewBox="0 0 24 24" {...base} {...p}>
      <path d="M8 21h8" /><path d="M12 17v4" /><path d="M7 4h10v5a5 5 0 0 1-10 0V4z" />
      <path d="M17 5h3v2a3 3 0 0 1-3 3" /><path d="M7 5H4v2a3 3 0 0 0 3 3" />
    </svg>
  ),
  Menu: (p) => (
    <svg width="22" height="22" viewBox="0 0 24 24" {...base} {...p}>
      <path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" />
    </svg>
  ),
  Close: (p) => (
    <svg width="22" height="22" viewBox="0 0 24 24" {...base} {...p}>
      <path d="M6 6l12 12" /><path d="M18 6 6 18" />
    </svg>
  ),
}
