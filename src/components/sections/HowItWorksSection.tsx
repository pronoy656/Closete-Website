"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "LIST OR DISCOVER",
    desc: "Browse a curated selection of luxury pieces or list your own in minutes with guided pricing and intelligent recommendations.",
  },
  {
    number: "02",
    title: "AUTHENTICATION",
    desc: "Each item undergoes a structured verification process using advanced AI and expert review to ensure authenticity.",
  },
  {
    number: "03",
    title: "SECURE DELIVERY & PAYMENT",
    desc: "Items are delivered securely, and payment is only released once the buyer has received and accepted the item.",
  },
];

// Sunburst ray angles (degrees)
const RAY_ANGLES = [0, 22.5, 45, 67.5, 90, 112.5, 135, 157.5, 180, 202.5, 225, 247.5, 270, 292.5, 315, 337.5];

export function HowItWorksSection() {
  // Circle center is at x=230, y=295 in SVG coords (1200×590 viewBox)
  const cx = 230;
  const cy = 295;
  const r = 105; // circle radius in SVG units

  // Card vertical centers in SVG coords
  const cardY = [100, 295, 490];

  return (
    <section
      id="how-it-works"
      className="relative py-20 overflow-hidden bg-transparent"
    >
      <div className="container mx-auto px-8 lg:px-16 relative z-10 max-w-7xl pt-6">

        {/* ── Header ───────────────────────────────────────── */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-serif text-white mb-3" style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}>
            How Closete works
          </h2>
          <p style={{ color: "rgba(242,242,242,0.5)", fontSize: "0.9rem" }}>
            Discover, verify, and receive luxury pieces with complete confidence.
          </p>
        </motion.div>

        {/* ── Main two-column layout ───────────────────────── */}
        <div className="relative" style={{ minHeight: "590px" }}>

          {/* Full-width SVG: circle + sunburst + connector lines */}
          <svg
            viewBox="0 0 1200 590"
            preserveAspectRatio="xMidYMid meet"
            className="absolute inset-0 w-full h-full pointer-events-none"
            style={{ zIndex: 1 }}
          >
            {/* ── Ambient glow behind circle ── */}
            <defs>
              <linearGradient id="circleGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="4.77%" stopColor="#AF7413" stopOpacity="1" />
                <stop offset="19.33%" stopColor="#C98C28" stopOpacity="1" />
                <stop offset="38.93%" stopColor="#E2B744" stopOpacity="1" />
                <stop offset="50.54%" stopColor="#FFED81" stopOpacity="1" />
                <stop offset="62.1%" stopColor="#E1C24E" stopOpacity="1" />
                <stop offset="90.74%" stopColor="#A06008" stopOpacity="1" />
              </linearGradient>
              <radialGradient id="glowGrad" cx="50%" cy="50%" r="50%">
                <stop offset="0%"  stopColor="#FFD700" stopOpacity="0.38" />
                <stop offset="60%" stopColor="#D4A017" stopOpacity="0.12" />
                <stop offset="100%" stopColor="#D4A017" stopOpacity="0" />
              </radialGradient>
              <radialGradient id="shineGrad" cx="38%" cy="28%" r="40%">
                <stop offset="0%"  stopColor="#FFFFF0" stopOpacity="0.55" />
                <stop offset="100%" stopColor="#FFFFF0" stopOpacity="0" />
              </radialGradient>
              <clipPath id="circleClip">
                <circle cx={cx} cy={cy} r={r} />
              </clipPath>
              <filter id="softBlur">
                <feGaussianBlur stdDeviation="2" />
              </filter>
            </defs>

            {/* ── Gold circle ── */}
            <circle cx={cx} cy={cy} r={r} fill="url(#circleGrad)" />

            {/* Circle border ring */}
            <circle
              cx={cx} cy={cy} r={r}
              fill="none"
              stroke="rgba(255,220,80,0.7)"
              strokeWidth="2"
            />

            {/* ── Dashed connector lines from circle to each card ── */}
            {cardY.map((y, i) => {
              if (i === 1) return null;

              // Start: right edge of circle, at vertical position of card
              const startX = cx + r * Math.cos(Math.atan2(y - cy, 500 - cx));
              const startY = cy + r * Math.sin(Math.atan2(y - cy, 500 - cx));
              // End: left side of number column
              const endX = i === 1 ? 355 : 555;
              const endY = y;
              // Control point
              const cpX = cx + 140;
              const cpY = y;

              return (
                <g key={i}>
                  <path
                    d={`M ${startX} ${startY} Q ${cpX} ${cpY} ${endX} ${endY}`}
                    fill="none"
                    stroke="rgba(180,140,30,0.55)"
                    strokeWidth="1.5"
                    strokeDasharray="6 7"
                    strokeLinecap="round"
                  />
                  {/* Arrow tip */}
                  <polygon
                    points={`${endX},${endY - 5} ${endX + 12},${endY} ${endX},${endY + 5}`}
                    fill="rgba(180,140,30,0.55)"
                  />
                </g>
              );
            })}

            {/* ── "Closeté" label on circle ── */}
            <text
              x={cx}
              y={cy + 14}
              textAnchor="middle"
              fontFamily="Georgia, serif"
              fontSize="48"
              fontWeight="400"
              fill="#1a0e02"
            >
              Closeté
            </text>
          </svg>

          {/* ── Group image beside circle ── */}
          <div
            className="absolute pointer-events-none"
            style={{
              left: "-160px",
              top: "50%",
              transform: "translateY(-50%)",
              width: "390px",
              height: "550px",
              zIndex: 1,
              mixBlendMode: "screen",
              opacity: 0.9,
            }}
          >
            <Image
              src="/Frame 2087328317.png"
              alt="Background stars and rays"
              fill
              className="object-cover object-right"
            />
          </div>

          {/* ── Step cards column (right side) ── */}
          <div
            className="absolute flex flex-col justify-between"
            style={{
              left: "40%",
              top: 0,
              right: 0,
              height: "100%",
              paddingTop: "8px",
              paddingBottom: "8px",
              gap: "24px",
              zIndex: 2,
            }}
          >
            {steps.map((step, i) => {
              const marginClass = i === 1 ? "ml-0 lg:ml-64" : "ml-0 lg:ml-20";
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.15 }}
                  className={`relative flex items-center gap-4 lg:gap-8 group flex-1 ${marginClass}`}
                >
                  {/* Background Number */}
                  <div 
                    className="shrink-0 text-7xl lg:text-[110px] font-bold select-none pointer-events-none leading-none
                               bg-gradient-to-b from-yellow-600/80 to-transparent bg-clip-text text-transparent opacity-70"
                  >
                    {step.number}.
                  </div>

                  {/* Content Card */}
                  <div className={`relative z-10 w-full ${i === 1 ? 'max-w-3xl' : 'max-w-lg'} bg-[#1a1a1e]/80 backdrop-blur-md border border-white/5 p-8 lg:p-10 rounded-3xl 
                                  shadow-2xl transition-all duration-500 group-hover:border-yellow-500/30
                                  after:absolute after:inset-0 after:rounded-3xl after:shadow-[inset_-1px_-1px_2px_rgba(234,179,8,0.2)]`}>
                    
                    <h3 className="text-white text-xl font-bold tracking-wider mb-4 uppercase">
                      {step.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm lg:text-base leading-relaxed font-light">
                      {step.desc}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
