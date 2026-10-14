export default function Logo({ size = 44, variant = 'circle' }) {
  if (variant === 'badge') {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" r="48" fill="#ffffff" stroke="#0f172a" strokeWidth="2" />
        <path d="M50 18L78 78H62L50 48L38 78H22L50 18Z" fill="#0b0f19" />
        <path d="M38 72H54L46 54L38 72Z" fill="#ffffff" />
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
      <circle cx="50" cy="50" r="48" fill="#ffffff" stroke="#e2e8f0" strokeWidth="1.5" />
      <path d="M50 18L78 78H62L50 48L38 78H22L50 18Z" fill="#0b0f19" />
      <path d="M38 72H54L46 54L38 72Z" fill="#ffffff" />
    </svg>
  )
}
