"use client"

import { motion } from "framer-motion"

const rowOne = [
  "VĂN HÓA",
  "ĐẠO ĐỨC",
  "CON NGƯỜI",
  "TỔ QUỐC",
  "TRUNG THÀNH",
  "NHÂN DÂN",
  "ĐOÀN KẾT",
  "TỰ CƯỜNG",
  "NHÂN ÁI",
  "KỶ CƯƠNG",
]

const rowTwo = [
  "GIÁO DỤC",
  "TRUYỀN THỐNG",
  "TRÁCH NHIỆM",
  "PHỤNG SỰ",
  "TRÍ TUỆ",
  "LIÊM CHÍNH",
  "CẦN KIỆM",
  "CHÍNH TRỰC",
  "VĂN MINH",
  "BỀN VỮNG",
]

function MarqueeRow({ items, direction = "left" }: { items: string[]; direction?: "left" | "right" }) {
  const duplicatedItems = [...items, ...items, ...items, ...items]

  return (
    <div className="relative overflow-hidden py-3">
      <motion.div
        className={`flex gap-8 ${direction === "left" ? "animate-marquee-left" : "animate-marquee-right"}`}
        style={{ width: "fit-content" }}
      >
        {duplicatedItems.map((item, index) => (
          <span
            key={`${item}-${index}`}
            className="group font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-wide whitespace-nowrap cursor-default"
            style={{
              WebkitTextStroke: "1px rgba(255,255,255,0.35)",
              color: "transparent",
              transition: "all 0.3s ease",
            }}
            onMouseEnter={(e) => {
              const colors = ['#ffd700', '#ffffff', '#667eea', '#f093fb']
              const randomColor = colors[Math.floor(Math.random() * colors.length)]
              e.currentTarget.style.color = randomColor
              e.currentTarget.style.webkitTextStroke = "none"
              e.currentTarget.style.transform = "scale(1.1)"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "transparent"
              e.currentTarget.style.webkitTextStroke = "1px rgba(255,255,255,0.35)"
              e.currentTarget.style.transform = "scale(1)"
            }}
          >
            {item}
            <span className="mx-6 text-white/20">•</span>
          </span>
        ))}
      </motion.div>
    </div>
  )
}

export default function TextMarquee() {
  return (
    <section className="relative py-16 sm:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black opacity-50"></div>
      <div className="relative space-y-3">
        <MarqueeRow items={rowOne} direction="left" />
        <MarqueeRow items={rowTwo} direction="right" />
      </div>
    </section>
  )
}
