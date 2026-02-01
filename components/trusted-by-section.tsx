"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { Landmark, Leaf, Users } from "lucide-react"

const VietnamFlagIcon = ({ className = "w-5 h-5 sm:w-6 sm:h-6" }) => (
  <svg viewBox="0 0 900 600" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="900" height="600" fill="#CE1126" />
    <polygon points="450,100 500,250 660,250 530,340 580,490 450,400 320,490 370,340 240,250 400,250" fill="#FFD700" />
  </svg>
)

const coreValues = [
  {
    id: 1,
    title: "Trung với nước, Hiếu với dân",
    description: "Phẩm chất quan trọng nhất. Suốt đời phấn đấu hy sinh vì độc lập, tự do của Tổ quốc.",
    quote: "Một ngày mà Tổ quốc chưa thống nhất, đồng bào còn chịu khổ, là một ngày tôi ăn không ngon, ngủ không yên",
    image: "/images/section1/3.jpg",
    icon: <VietnamFlagIcon />
  },
  {
    id: 2,
    title: "Xây dựng Con người",
    description: "Con người phát triển toàn diện: Đức, Trí, Thể, Mỹ. Có tinh thần yêu nước, tự cường dân tộc, lối sống lành mạnh.",
    quote: "Học để làm gì? Học để phụng sự Tổ quốc, phục vụ nhân dân",
    image: "/images/section2/6.jpg",
    icon: <Users className="w-6 h-6 text-white" />
  },
  {
    id: 3,
    title: "Giữ gìn Bản sắc Văn hóa",
    description: "Xây dựng nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc; thống nhất mà đa dạng.",
    quote: "Văn hóa còn thì chế độ còn, văn hóa mất thì chế độ mất",
    image: "/images/section3/10.jpg",
    icon: <Landmark className="w-6 h-6 text-white" />
  },
  {
    id: 4,
    title: "Nếp sống Văn minh",
    description: "Xây dựng môi trường văn hóa lành mạnh, nếp sống văn minh, bảo vệ môi trường cho thế hệ tương lai.",
    quote: "Việc gì có lợi cho dân, dù nhỏ, cũng phải hết sức làm; việc gì có hại cho dân, dù nhỏ, cũng phải hết sức tránh",
    image: "/images/section4/14.jpeg",
    icon: <Leaf className="w-6 h-6 text-white" />
  }
]

export default function TrustedBySection() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    const element = document.getElementById("values")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="values" className="py-20 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-display font-black mb-6 animate-text-reveal leading-tight">
            <span className="text-gradient-gold block leading-tight">Bốn Trụ Cột</span>
            <span className="text-white/90 block italic mt-2">Văn Hóa & Con Người</span>
          </h2>
          <div className="section-divider my-8"></div>
          <p className="text-white/75 text-lg md:text-xl max-w-3xl mx-auto font-body">
            Theo tư tưởng Hồ Chí Minh, xây dựng văn hóa và con người Việt Nam dựa trên bốn giá trị cốt lõi
          </p>
        </div>

        <div className={`grid grid-cols-1 md:grid-cols-2 gap-8 transition-all duration-1000 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          {coreValues.map((value, index) => (
            <Card 
              key={value.id} 
              className="glass-enhanced hover-lift p-8 group animate-pulse-glow"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="flex flex-col h-full">
                <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={value.image}
                    alt={value.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute top-4 left-4 text-4xl bg-black/50 p-3 rounded-full">
                    {value.icon}
                  </div>
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-4">{value.title}</h3>
                <p className="text-white/75 mb-4 leading-relaxed flex-grow">{value.description}</p>
                
                <div className="mt-4 pt-4 border-t border-white/10">
                  <p className="text-white/60 italic text-sm">"{value.quote}"</p>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
