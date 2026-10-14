export default function Logo({ size = 44, variant = 'circle' }) {
  if (variant === 'badge') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 120 120"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="glowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.8" />
            <stop offset="50%" stopColor="#818cf8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#c084fc" stopOpacity="0.8" />
          </linearGradient>
          <linearGradient id="innerGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#0f172a" />
            <stop offset="100%" stopColor="#020617" />
          </linearGradient>
        </defs>

        <circle cx="60" cy="60" r="56" fill="url(#innerGrad)" stroke="url(#glowGrad)" strokeWidth="3" />
        <circle cx="60" cy="60" r="48" fill="#ffffff" />
        <path d="M60 22L92 88H74L60 56L46 88H28L60 22Z" fill="#0b0f19" />
        <path d="M46 82H64L55 62L46 82Z" fill="#ffffff" />
      </svg>
    )
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="50" cy="50" r="48" fill="#ffffff" />
      <path d="M50 18L78 78H62L50 48L38 78H22L50 18Z" fill="#0b0f19" />
      <path d="M38 72H54L46 54L38 72Z" fill="#ffffff" />
    </svg>
  )
}
