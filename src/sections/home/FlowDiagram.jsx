import { motion } from 'framer-motion'
import { Hammer, Cog, TrendingUp } from 'lucide-react'

const NODES = [
  { id: 'build', label: 'Build', Icon: Hammer, x: 60, y: 140 },
  { id: 'automate', label: 'Automate', Icon: Cog, x: 260, y: 60 },
  { id: 'grow', label: 'Grow', Icon: TrendingUp, x: 460, y: 140 },
]

export default function FlowDiagram() {
  return (
    <div className="relative mx-auto w-full max-w-xl">
      <svg viewBox="0 0 520 200" className="w-full h-auto overflow-visible">
        <defs>
          <linearGradient id="flowLine" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0057FF" />
            <stop offset="100%" stopColor="#FFC107" />
          </linearGradient>
        </defs>

        <path
          d="M 90 150 Q 175 190 260 90"
          stroke="url(#flowLine)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="6 6"
          className="animate-flow"
          opacity="0.7"
        />
        <path
          d="M 290 90 Q 375 30 430 150"
          stroke="url(#flowLine)"
          strokeWidth="2"
          fill="none"
          strokeDasharray="6 6"
          className="animate-flow"
          opacity="0.7"
        />

        {NODES.map((node, i) => (
          <g key={node.id} transform={`translate(${node.x - 40}, ${node.y - 40})`}>
            <motion.circle
              cx="40"
              cy="40"
              r="38"
              fill="rgba(255,255,255,0.04)"
              stroke={i === 1 ? '#FFC107' : '#0057FF'}
              strokeWidth="1.5"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.4, ease: 'easeInOut' }}
            />
          </g>
        ))}
      </svg>

      <div className="pointer-events-none absolute inset-0">
        {NODES.map((node, i) => (
          <motion.div
            key={node.id}
            className="absolute flex flex-col items-center gap-2"
            style={{
              left: `${(node.x / 520) * 100}%`,
              top: `${(node.y / 200) * 100}%`,
              transform: 'translate(-50%, -50%)',
            }}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 + i * 0.15, duration: 0.6 }}
          >
            <span
              className={`flex h-14 w-14 items-center justify-center rounded-2xl glass ${
                i === 1 ? 'text-secondary shadow-glow-amber' : 'text-primary shadow-glow'
              }`}
            >
              <node.Icon size={22} />
            </span>
            <span className="font-heading text-xs font-bold uppercase tracking-wider text-ink/90">
              {node.label}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
