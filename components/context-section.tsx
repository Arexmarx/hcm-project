"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import { AlertTriangle, BarChart3, CloudFog, Siren, Theater, Trophy } from "lucide-react"

export default function ContextSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [hoveredImage, setHoveredImage] = useState<string | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

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
      { threshold: 0.2 },
    )

    const element = document.getElementById("context")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="context" className="py-20 relative" onMouseMove={handleMouseMove}>
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>

      {/* Hover Image Tooltip */}
      {hoveredImage && (
        <div 
          className="fixed z-[100] pointer-events-none transition-opacity duration-200"
          style={{ 
            left: `${mousePosition.x + 20}px`, 
            top: `${mousePosition.y + 20}px`,
          }}
        >
          <div className="glass rounded-lg overflow-hidden shadow-2xl border-2 border-white/20">
            <Image
              src={hoveredImage}
              alt="Preview"
              width={300}
              height={200}
              className="object-cover"
            />
          </div>
        </div>
      )}

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <div className="text-center mb-20">
            <div className="inline-block mb-4">
              <span className="text-xs font-mono-custom tracking-widest text-white/50 uppercase">Phần II</span>
            </div>
            <h2 className="text-5xl md:text-7xl font-display font-black mb-6 animate-text-reveal">
              <span className="text-gradient block">Bối Cảnh</span>
              <span className="text-white/90 block italic mt-2">& Thực Trạng</span>
            </h2>
            <div className="section-divider my-8"></div>
            <p className="text-white/75 text-lg md:text-xl max-w-3xl mx-auto font-body leading-relaxed">
              Sau 35 năm đổi mới, đất nước đạt nhiều thành tựu to lớn nhưng vẫn đối mặt với những thách thức nghiêm trọng
            </p>
          </div>

          {/* Thành tựu & Thách thức */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card 
              className="glass-enhanced hover-lift p-8 cursor-pointer animate-pulse-glow"
              onMouseEnter={() => setHoveredImage("/images/section1/1.jpg")}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="rounded-full bg-white/10 p-3">
                  <Trophy className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-white">Thành Tựu</h3>
              </div>
              <p className="text-white/75 leading-relaxed">
                Qua 35 năm đổi mới, đất nước đã đạt được những thành tựu to lớn về kinh tế, chính trị và xã hội.
              </p>
            </Card>

            <Card 
              className="glass p-8 border-2 border-yellow-500/30 cursor-pointer hover:border-yellow-500/50 transition-all"
              onMouseEnter={() => setHoveredImage("/images/section4/14.jpeg")}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="rounded-full bg-yellow-500/10 p-3">
                  <AlertTriangle className="w-8 h-8 text-yellow-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">Thách Thức</h3>
              </div>
              <p className="text-white/75 leading-relaxed">
                Lĩnh vực văn hóa và xây dựng con người đang đứng trước những thách thức nghiêm trọng cần được giải quyết.
              </p>
            </Card>
          </div>

          {/* Những hạn chế và yếu kém */}
          <div className="mb-12">
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-8 text-center animate-text-reveal">Những Hạn Chế Và Yếu Kém</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card 
                className="glass p-6 cursor-pointer hover:border-white/30 transition-all"
                onMouseEnter={() => setHoveredImage("/images/section3/10.jpg")}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <div className="flex items-start space-x-3 mb-4">
                  <div className="rounded-full bg-white/10 p-2 mt-1">
                    <BarChart3 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-3">Vị trí chưa xứng tầm</h4>
                    <ul className="space-y-2 text-white/75">
                      <li>• Văn hóa chưa được quan tâm tương xứng với kinh tế và chính trị</li>
                      <li>• Chưa thật sự trở thành nguồn lực, động lực nội sinh cho sự phát triển bền vững</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card 
                className="glass p-6 cursor-pointer hover:border-white/30 transition-all"
                onMouseEnter={() => setHoveredImage("/images/section3/11.png")}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <div className="flex items-start space-x-3 mb-4">
                  <div className="rounded-full bg-white/10 p-2 mt-1">
                    <Theater className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-3">Lệch lạc trong nhận thức</h4>
                    <p className="text-white/75">
                      Còn có chiều hướng coi trọng chức năng giải trí đơn thuần, bỏ qua vai trò giáo dục và phát triển con người
                    </p>
                  </div>
                </div>
              </Card>

              <Card 
                className="glass p-6 cursor-pointer hover:border-white/30 transition-all"
                onMouseEnter={() => setHoveredImage("/images/section4/15.jpg")}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <div className="flex items-start space-x-3 mb-4">
                  <div className="rounded-full bg-white/10 p-2 mt-1">
                    <CloudFog className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-white mb-3">Môi trường suy thoái</h4>
                    <ul className="space-y-2 text-white/75">
                      <li>• Môi trường văn hóa bị ô nhiễm bởi các tệ nạn xã hội, tham nhũng, tiêu cực</li>
                      <li>• Có sự chênh lệch lớn về hưởng thụ văn hóa giữa các vùng miền (đặc biệt là vùng sâu, vùng xa, đồng bào dân tộc thiểu số)</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card 
                className="glass p-6 border-2 border-red-500/30 cursor-pointer hover:border-red-500/50 transition-all"
                onMouseEnter={() => setHoveredImage("/images/section4/16.jpg")}
                onMouseLeave={() => setHoveredImage(null)}
              >
                <div className="flex items-start space-x-3 mb-4">
                  <div className="rounded-full bg-red-500/10 p-2 mt-1">
                    <Siren className="w-6 h-6 text-red-400" />
                  </div>
                  <div>
                    <h4 className="text-2xl font-bold text-red-400 mb-3">Báo động đỏ</h4>
                    <p className="text-white/75">
                      Tình trạng suy thoái về tư tưởng chính trị, đạo đức, lối sống trong Đảng và trong xã hội có chiều hướng <br/>gia tăng
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
