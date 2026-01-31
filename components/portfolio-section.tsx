"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"

interface GalleryImage {
  id: number
  src: string
  alt: string
  section: string
}

const galleryImages: GalleryImage[] = [
  { id: 1, src: "/images/section1/1.jpg", alt: "Hồ Chí Minh - Lãnh tụ vĩ đại", section: "Trung với nước, Hiếu với dân" },
  { id: 2, src: "/images/section1/2.jpg", alt: "Bác Hồ với nhân dân", section: "Trung với nước, Hiếu với dân" },
  { id: 3, src: "/images/section1/3.jpg", alt: "Tấm gương sáng", section: "Trung với nước, Hiếu với dân" },
  { id: 4, src: "/images/section1/4.jpg", alt: "Hồ Chí Minh - Người cha già", section: "Trung với nước, Hiếu với dân" },
  { id: 5, src: "/images/section1/5.jpeg", alt: "Tình yêu Tổ quốc", section: "Trung với nước, Hiếu với dân" },
  
  { id: 6, src: "/images/section2/6.jpg", alt: "Xây dựng con người mới", section: "Xây dựng con người" },
  { id: 7, src: "/images/section2/7.jpg", alt: "Giáo dục thế hệ trẻ", section: "Xây dựng con người" },
  { id: 8, src: "/images/section2/8.jpeg", alt: "Rèn luyện đạo đức", section: "Xây dựng con người" },
  { id: 9, src: "/images/section2/9.jpg", alt: "Phát triển toàn diện", section: "Xây dựng con người" },
  
  { id: 10, src: "/images/section3/10.jpg", alt: "Bản sắc văn hóa dân tộc", section: "Bản sắc văn hóa" },
  { id: 11, src: "/images/section3/11.png", alt: "Di sản văn hóa", section: "Bản sắc văn hóa" },
  { id: 12, src: "/images/section3/12.jpg", alt: "Văn hóa truyền thống", section: "Bản sắc văn hóa" },
  { id: 13, src: "/images/section3/13.jpg", alt: "Giữ gìn bản sắc", section: "Bản sắc văn hóa" },
  
  { id: 14, src: "/images/section4/14.jpeg", alt: "Nếp sống văn minh", section: "Nếp sống văn minh" },
  { id: 15, src: "/images/section4/15.jpg", alt: "Bảo vệ môi trường", section: "Nếp sống văn minh" },
  { id: 16, src: "/images/section4/16.jpg", alt: "Xây dựng xã hội", section: "Nếp sống văn minh" },
  { id: 17, src: "/images/section4/17.jpg", alt: "Môi trường xanh", section: "Nếp sống văn minh" },
  { id: 18, src: "/images/section4/18.jpg", alt: "Phát triển bền vững", section: "Nếp sống văn minh" },
]

export default function PortfolioSection() {
  const [isVisible, setIsVisible] = useState(false)
  const [selectedFilter, setSelectedFilter] = useState("Tất cả")

  const filters = ["Tất cả", "Trung với nước, Hiếu với dân", "Xây dựng con người", "Bản sắc văn hóa", "Nếp sống văn minh"]

  const filteredImages = selectedFilter === "Tất cả" 
    ? galleryImages 
    : galleryImages.filter(img => img.section === selectedFilter)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    const element = document.getElementById("portfolio")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="portfolio" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-black to-gray-900"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Thư Viện Hình Ảnh
          </h2>
          <p className="text-white/75 text-lg max-w-3xl mx-auto mb-8">
            Khám phá những hình ảnh về tư tưởng Hồ Chí Minh và giá trị văn hóa Việt Nam
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`px-6 py-2 rounded-full font-semibold transition-all duration-300 ${
                  selectedFilter === filter
                    ? "glass border-2 border-white/40 text-white scale-105"
                    : "glass border border-white/20 text-white/75 hover:border-white/30 hover:text-white"
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className={`transition-all duration-1000 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredImages.map((image, index) => (
              <Card
                key={image.id}
                className="glass glass-hover overflow-hidden group cursor-pointer"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                <div className="relative w-full h-64">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-white font-semibold text-sm mb-1">{image.section}</p>
                      <p className="text-white/75 text-xs">{image.alt}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {filteredImages.length === 0 && (
            <div className="text-center py-20">
              <p className="text-white/50 text-lg">Không tìm thấy hình ảnh phù hợp</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
