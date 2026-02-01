"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { useLanguage } from "@/contexts/language-context"
import { ChevronRight, BookOpen } from "lucide-react"

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredImage, setHoveredImage] = useState<string | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const { t } = useLanguage()

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    const element = document.getElementById("about")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  const viewpoints = [
    {
      id: 1,
      title: "Văn hóa là nền tảng tinh thần",
      description: "Văn hóa là nền tảng tinh thần của xã hội, vừa là mục tiêu, vừa là động lực thúc đẩy phát triển kinh tế - xã hội.",
      characteristic: "Xây dựng nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc",
      quote: "\"Văn hóa còn thì chế độ còn, văn hóa mất thì chế độ mất\"",
      icon: BookOpen,
      color: "blue",
      image: "/images/section3/10.jpg",
    },
    {
      id: 2,
      title: "Chiến lược xây dựng con người Việt Nam",
      description: "Con người là trung tâm của chiến lược phát triển, đồng thời là chủ thể phát triển.",
      values: [
        "Tinh thần yêu nước, tự cường dân tộc",
        "Ý thức tập thể, đoàn kết",
        "Lối sống lành mạnh, nếp sống văn minh",
        "Tôn trọng kỷ cương pháp nước",
        "Lao động chăm chỉ, sáng tạo",
        "Thường xuyên học tập nâng cao"
      ],
      color: "purple",
      image: "/images/section2/6.jpg",
    },
    {
      id: 3,
      title: "Các nhiệm vụ cụ thể",
      tasks: [
        { title: "Xây dựng con người", desc: "Phát triển toàn diện, đặc biệt về đạo đức" },
        { title: "Xây dựng gia đình", desc: "Gia đình no ấm, tiến bộ, hạnh phúc" },
        { title: "Phát triển văn học - nghệ thuật", desc: "Sáng tác chân - thiện - mỹ" },
        { title: "Phát triển khoa học & công nghệ", desc: "Kết hợp với giá trị nhân văn" }
      ],
      color: "gold",
      image: "/images/section4/17.jpg",
    }
  ]

  return (
    <section id="about" className="py-24 relative" onMouseMove={handleMouseMove}>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900"></div>

      {/* Hover Image Tooltip */}
      {hoveredImage && (
        <div 
          className="fixed z-[100] pointer-events-none transition-opacity duration-200"
          style={{ 
            left: `${mousePosition.x + 20}px`, 
            top: `${mousePosition.y + 20}px`,
          }}
        >
          <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20">
            <Image
              src={hoveredImage}
              alt="Preview"
              width={320}
              height={240}
              className="object-cover"
            />
          </div>
        </div>
      )}

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block mb-6">
              <span className="text-xs font-mono-custom tracking-widest text-white/50 uppercase block mb-4">Phần III</span>
              <div className="h-1 w-24 bg-gradient-to-r from-transparent via-blue-400/40 to-transparent"></div>
            </div>
            <h2 className="text-5xl md:text-7xl font-display font-black mb-6 leading-tight">
              <span className="text-gradient block">Quan Điểm</span>
              <span className="text-white/90 block italic mt-3">Của Đảng</span>
            </h2>
            <p className="text-white/70 text-lg md:text-xl max-w-3xl mx-auto font-body mt-6">
              Các quan điểm về xây dựng nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc
            </p>
          </motion.div>
        </div>

        {/* Main Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left: Featured Image - Spanning 2 rows */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:row-span-2"
          >
            <Card className="relative h-full min-h-[500px] overflow-hidden glass-enhanced border border-blue-400/20 group cursor-pointer">
              <Image
                src="/images/section1/2.jpg"
                alt="Chủ tịch Hồ Chí Minh"
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
              <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                <motion.div
                  initial={{ y: 20, opacity: 0 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-white text-lg italic font-display leading-relaxed">
                    "Con người cách mạng phải có đạo đức cách mạng"
                  </p>
                  <p className="text-blue-300 text-sm mt-3 font-body">- Hồ Chí Minh -</p>
                </motion.div>
              </div>
            </Card>
          </motion.div>

          {/* Right: Viewpoints Cards */}
          <div className="lg:col-span-2 space-y-6">
            {viewpoints.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
              >
                <Card 
                  className="bg-white/5 backdrop-blur-sm p-6 md:p-8 border-l-4 border-blue-400/40 hover:border-blue-400/70 cursor-pointer group transition-all duration-300 hover:bg-white/10"
                  onMouseEnter={() => setHoveredImage(item.image)}
                  onMouseLeave={() => setHoveredImage(null)}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex-shrink-0">
                      <div className="w-1 h-12 bg-gradient-to-b from-blue-400/60 to-blue-400/20"></div>
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-display font-black text-white mb-2 group-hover:text-gradient transition-all">{item.title}</h3>
                      {item.description && (
                        <p className="text-white/70 text-base font-body leading-relaxed mb-3">{item.description}</p>
                      )}
                      
                      {/* Viewpoint 1 - Characteristic + Quote */}
                      {item.id === 1 && (
                        <>
                          <div className="mb-4 p-4 bg-blue-500/5 rounded-lg border border-blue-400/20">
                            <p className="text-white/80 text-sm font-body">{item.characteristic}</p>
                          </div>
                          <p className="text-blue-300 italic font-semibold">{item.quote}</p>
                        </>
                      )}
                      
                      {/* Viewpoint 2 - Core Values */}
                      {item.id === 2 && item.values && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                          {item.values.map((value, idx) => (
                            <div key={idx} className="flex items-start gap-2">
                              <ChevronRight className="w-4 h-4 text-blue-400 flex-shrink-0 mt-1" />
                              <span className="text-white/80 text-sm font-body">{value}</span>
                            </div>
                          ))}
                        </div>
                      )}
                      
                      {/* Viewpoint 3 - Tasks */}
                      {item.id === 3 && item.tasks && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          {item.tasks.map((task, idx) => (
                            <div key={idx} className="p-3 bg-white/5 rounded-lg border border-white/10 hover:border-blue-400/30 transition-all">
                              <h4 className="text-white font-semibold text-sm mb-1">{task.title}</h4>
                              <p className="text-white/60 text-xs leading-tight">{task.desc}</p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Bottom Quote Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-16"
        >
          <Card className="bg-gradient-to-r from-blue-500/5 via-black to-blue-500/5 p-8 md:p-12 border border-blue-400/20 text-center">
            <p className="text-3xl md:text-5xl font-display font-black text-white leading-tight mb-6">
              <span className="text-gradient">"Nước mình có lịch sử vang dội</span>
              <br />
              <span className="text-white">Nên phải xứng đáng với những tiền nhân"</span>
            </p>
            <div className="inline-block px-6 py-2 bg-blue-500/10 border border-blue-400/40 rounded-full">
              <p className="text-blue-300 font-mono-custom text-sm tracking-wider">Hồ Chí Minh</p>
            </div>
          </Card>
        </motion.div>
      </div>
    </section>
  )
}
