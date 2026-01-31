"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { MessageCircle } from "lucide-react"

export default function AboutSection() {
  const [isVisible, setIsVisible] = useState(false)
  const { t } = useLanguage()

  const renderBioWithLinks = (text: string) => {
    // Replace link placeholders with actual JSX links
    const processedText = text
      .replace(
        /\[Eluter\]/g,
        '<a href="https://www.eluter.com/" target="_blank" rel="noopener noreferrer" class="text-white hover:text-white/80 underline underline-offset-2 transition-colors">Eluter</a>',
      )
      .replace(
        /\[DESAFIA\]/g,
        '<a href="https://desafia.tech/" target="_blank" rel="noopener noreferrer" class="text-white hover:text-white/80 underline underline-offset-2 transition-colors">DESAFIA</a>',
      )
      .replace(
        /\[Polkadot Blockchain Academy\]/g,
        '<a href="https://pbax.polkadot.academy/" target="_blank" rel="noopener noreferrer" class="text-white hover:text-white/80 underline underline-offset-2 transition-colors">Polkadot Blockchain Academy</a>',
      )
      .replace(
        /\[Devconnect\]/g,
        '<a href="https://devconnect.org/" target="_blank" rel="noopener noreferrer" class="text-white hover:text-white/80 underline underline-offset-2 transition-colors">Devconnect</a>',
      )

    // Process bold text
    const parts = processedText.split(/(\*.*?\*)/g)
    return parts.map((part, index) => {
      if (part.startsWith("*") && part.endsWith("*")) {
        const boldContent = part.slice(1, -1)
        return (
          <strong key={index} className="text-white font-semibold" dangerouslySetInnerHTML={{ __html: boldContent }} />
        )
      }
      return <span key={index} dangerouslySetInnerHTML={{ __html: part }} />
    })
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

  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative group">
                <div className="absolute -inset-4 glass rounded-full opacity-30 group-hover:opacity-50 transition-opacity"></div>
                <Image
                  src="/images/section1/2.jpg"
                  alt="Chủ tịch Hồ Chí Minh"
                  width={400}
                  height={400}
                  className="relative rounded-full border-4 border-white/10 hover:border-white/20 transition-all duration-300 hover:scale-105 object-cover"
                />
              </div>
            </div>

            {/* About Content */}
            <div className="space-y-6 text-center lg:text-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-8 text-white">Tư Tưởng Hồ Chí Minh</h2>

              <div className="space-y-4 text-white/75 leading-relaxed">
                <p className="text-white font-semibold text-xl">Văn hóa là nền tảng tinh thần</p>
                <p>
                  Văn hóa là <strong className="text-white">nền tảng tinh thần của xã hội</strong>, vừa là mục tiêu, vừa là động lực thúc đẩy phát triển kinh tế - xã hội. 
                  Xây dựng nền văn hóa Việt Nam tiên tiến, đậm đà bản sắc dân tộc; thống nhất mà đa dạng trong cộng đồng các dân tộc Việt Nam.
                </p>
                <p>
                  <strong className="text-white">"Văn hóa còn thì chế độ còn, văn hóa mất thì chế độ mất"</strong> - 
                  Văn hóa phải gắn kết chặt chẽ, thấm sâu vào toàn bộ đời sống xã hội. Mục tiêu xã hội: Dân chủ, công bằng, văn minh, 
                  vì lợi ích chân chính và phẩm giá con người.
                </p>
                <p className="text-white font-semibold">
                  Con người là trung tâm của chiến lược phát triển, đồng thời là chủ thể phát triển.
                </p>
              </div>

              <div className="flex justify-center lg:justify-start">
                <Button
                  className="glass glass-hover border border-white/20 hover:border-white/40 text-white font-semibold px-8 py-4 mt-8 group transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-white/10"
                  onClick={() => document.getElementById("values")?.scrollIntoView({ behavior: "smooth" })}
                >
                  Tìm hiểu thêm
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
