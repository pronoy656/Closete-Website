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
      className="relative py-20 overflow-hidden"
      style={{ background: "#111115" }}
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
              <radialGradient id="circleGrad" cx="35%" cy="28%" r="70%">
                <stop offset="0%"  stopColor="#FFF5A0" stopOpacity="1" />
                <stop offset="20%" stopColor="#FFD84D" stopOpacity="1" />
                <stop offset="45%" stopColor="#D4A017" stopOpacity="1" />
                <stop offset="72%" stopColor="#9B6C0A" stopOpacity="1" />
                <stop offset="100%" stopColor="#5A3804" stopOpacity="1" />
              </radialGradient>
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

            {/* Outer ambient glow */}
            <ellipse cx={cx} cy={cy} rx="220" ry="220" fill="url(#glowGrad)" />

            {/* ── Sunburst rays ── */}
            {RAY_ANGLES.map((angle, i) => {
              const rad = (angle * Math.PI) / 180;
              const innerR = r + 8;
              // Alternate long and short rays
              const outerR = i % 2 === 0 ? r + 160 : r + 80;
              const x1 = cx + innerR * Math.cos(rad);
              const y1 = cy + innerR * Math.sin(rad);
              const x2 = cx + outerR * Math.cos(rad);
              const y2 = cy + outerR * Math.sin(rad);
              return (
                <line
                  key={angle}
                  x1={x1} y1={y1}
                  x2={x2} y2={y2}
                  stroke="rgba(200,160,30,0.35)"
                  strokeWidth={i % 2 === 0 ? "1.5" : "1"}
                  strokeLinecap="round"
                />
              );
            })}

            {/* ── Gold circle ── */}
            <circle cx={cx} cy={cy} r={r} fill="url(#circleGrad)" />

            {/* Specular shine highlight on circle */}
            <circle cx={cx} cy={cy} r={r} fill="url(#shineGrad)" />

            {/* Circle border ring */}
            <circle
              cx={cx} cy={cy} r={r}
              fill="none"
              stroke="rgba(255,220,80,0.7)"
              strokeWidth="2"
            />

            {/* ── Dashed connector lines from circle to each card ── */}
            {cardY.map((y, i) => {
              // Start: right edge of circle, at vertical position of card
              const startX = cx + r * Math.cos(Math.atan2(y - cy, 500 - cx));
              const startY = cy + r * Math.sin(Math.atan2(y - cy, 500 - cx));
              // End: left side of number column
              const endX = 475;
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
              y={cy + 7}
              textAnchor="middle"
              fontFamily="Georgia, serif"
              fontSize="22"
              fontWeight="600"
              fill="#1a0e02"
            >
              Closeté
            </text>
          </svg>

          {/* ── Group image beside circle ── */}
          <div
            className="absolute pointer-events-none"
            style={{
              left: "0%",
              top: "50%",
              transform: "translateY(-50%)",
              width: "350px",
              height: "550px",
              zIndex: 1,
              mixBlendMode: "screen",
              opacity: 0.9,
            }}
          >
            <Image
              src="/Group.png"
              alt="Group rays"
              fill
              className="object-contain object-right"
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
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="flex items-center gap-4 flex-1"
              >
                {/* Step number */}
                <div
                  className="shrink-0 font-serif leading-none select-none text-right"
                  style={{
                    width: "80px",
                    fontSize: "clamp(2.5rem, 4vw, 3.5rem)",
                    background: "linear-gradient(135deg, #A87C36 0%, #D4AF37 40%, #F5D78D 65%, #C49A30 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    opacity: 0.9,
                    lineHeight: 1,
                  }}
                >
                  {step.number}.
                </div>

                {/* Card */}
                <div
                  className="flex-1 flex items-center justify-between gap-4 rounded-2xl py-5 px-6"
                  style={{
                    background: "rgba(22, 20, 15, 0.85)",
                    border: "1px solid rgba(180,140,30,0.2)",
                    backdropFilter: "blur(12px)",
                    boxShadow: "0 4px 40px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)",
                  }}
                >
                  <div>
                    <h3
                      className="font-bold mb-2"
                      style={{
                        fontSize: "0.75rem",
                        letterSpacing: "0.14em",
                        color: "#e8e8e8",
                      }}
                    >
                      {step.title}
                    </h3>
                    <p style={{ fontSize: "0.85rem", color: "rgba(242,242,242,0.5)", lineHeight: 1.6 }}>
                      {step.desc}
                    </p>
                  </div>

                  {/* Arrow indicator */}
                  <div
                    className="shrink-0 flex items-center justify-center"
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "50%",
                      border: "1px solid rgba(180,140,30,0.4)",
                      color: "rgba(212,175,55,0.8)",
                      fontSize: "0.9rem",
                      lineHeight: 1,
                    }}
                  >
                    ›
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
