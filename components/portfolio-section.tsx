"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { X, ZoomIn, Filter } from "lucide-react"
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
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null)
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

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

  const openLightbox = (image: GalleryImage) => {
    setSelectedImage(image)
    setIsLightboxOpen(true)
  }

  const closeLightbox = () => {
    setIsLightboxOpen(false)
    setTimeout(() => setSelectedImage(null), 300)
  }

  return (
    <section id="portfolio" className="py-24 relative overflow-hidden zigzag-border">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 via-black to-gray-900">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(255,255,255,0.15) 1px, transparent 0)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6">
        <div className="text-center mb-20">
          <span className="text-xs font-mono-custom tracking-widest text-white/50 uppercase block mb-4">Phần VI</span>
          <h2 className="text-5xl md:text-7xl font-display font-black mb-6 animate-text-reveal leading-tight">
            <span className="text-gradient block">Thư Viện</span>
            <span className="text-gradient-gold block italic mt-2">Hình Ảnh</span>
          </h2>
          <div className="section-divider my-8"></div>
          <p className="text-white/75 text-lg md:text-xl max-w-3xl mx-auto mb-10 font-body">
            Khám phá những hình ảnh về <span className="text-gradient-gold font-semibold">tư tưởng Hồ Chí Minh</span> và <span className="text-gradient font-semibold">giá trị văn hóa Việt Nam</span>
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Filter className="w-5 h-5 text-white/50 self-center mr-2" />
            {filters.map((filter) => (
              <motion.button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-body font-semibold transition-all duration-300 relative overflow-hidden group ${
                  selectedFilter === filter
                    ? "glass-enhanced border-2 border-purple-500/50 text-white shadow-lg shadow-purple-500/20"
                    : "glass border border-white/10 text-white/70 hover:border-white/30 hover:text-white"
                }`}
              >
                <span className="relative z-10">{filter}</span>
                {selectedFilter === filter && (
                  <motion.div
                    layoutId="activeFilter"
                    className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </motion.button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={selectedFilter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6"
          >
            {filteredImages.map((image, index) => {
              const heights = [280, 320, 360, 300, 340]
              const randomHeight = heights[index % heights.length]
              
              return (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  className="break-inside-avoid mb-6"
                >
                  <Card
                    onClick={() => openLightbox(image)}
                    className="glass-enhanced hover-lift overflow-hidden group cursor-pointer border border-white/10 hover:border-purple-500/30 transition-all duration-300"
                    style={{ height: `${randomHeight}px` }}
                  >
                    <div className="relative w-full h-full">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                      />
                      
                      {/* Gradient Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                      
                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-purple-900/90 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="absolute inset-0 flex items-center justify-center">
                          <ZoomIn className="w-12 h-12 text-white transform scale-0 group-hover:scale-100 transition-transform duration-300" />
                        </div>
                        
                        <div className="absolute bottom-0 left-0 right-0 p-5">
                          <motion.div
                            initial={{ y: 20, opacity: 0 }}
                            whileHover={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.3 }}
                          >
                            <span className="inline-block px-3 py-1 bg-white/10 backdrop-blur-sm rounded-full text-xs font-body text-white/90 mb-2">
                              {image.section}
                            </span>
                            <p className="text-white font-display text-lg font-bold leading-tight">{image.alt}</p>
                          </motion.div>
                        </div>
                      </div>
                      
                      {/* Bottom Info (Always Visible) */}
                      <div className="absolute bottom-0 left-0 right-0 p-4 group-hover:opacity-0 transition-opacity duration-300">
                        <p className="text-white/90 font-body text-sm font-semibold drop-shadow-lg">{image.alt}</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>

        {filteredImages.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <Filter className="w-16 h-16 text-white/20 mx-auto mb-4" />
            <p className="text-white/50 text-lg font-body">Không tìm thấy hình ảnh phù hợp</p>
          </motion.div>
        )}
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {isLightboxOpen && selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/95 backdrop-blur-xl"
            onClick={closeLightbox}
          >
            <motion.button
              onClick={closeLightbox}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
              className="absolute top-6 right-6 p-3 glass-enhanced rounded-full border border-white/20 hover:border-white/40 transition-all group z-50"
            >
              <X className="w-6 h-6 text-white" />
            </motion.button>

            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-6xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src={selectedImage.src}
                  alt={selectedImage.alt}
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              
              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-6 text-center"
              >
                <span className="inline-block px-4 py-2 glass-enhanced rounded-full text-sm font-body text-white/90 border border-white/10 mb-3">
                  {selectedImage.section}
                </span>
                <h3 className="text-2xl md:text-3xl font-display font-bold text-white mb-2">{selectedImage.alt}</h3>
                <p className="text-white/60 font-body">Nhấp vào bất kỳ đâu để đóng</p>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
