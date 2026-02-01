"use client"

import { useState, useEffect } from "react"
import { ArrowLeft, ExternalLink } from "lucide-react"
import Link from "next/link"
import { motion } from "framer-motion"
import CustomCursor from "@/components/custom-cursor"

interface Reference {
  url: string
  title: string
}

export default function ReferencesPage() {
  const [references, setReferences] = useState<Reference[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchReferences = async () => {
      try {
        const response = await fetch('/api/references')
        if (!response.ok) throw new Error('Failed to fetch references')
        
        const data = await response.json()
        
        // Parse URLs and create titles
        const parsedRefs = data.references.map((url: string) => ({
          url,
          title: extractTitleFromUrl(url)
        }))
        
        setReferences(parsedRefs)
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchReferences()
  }, [])

  const extractTitleFromUrl = (url: string): string => {
    try {
      const urlObj = new URL(url)
      const pathname = urlObj.pathname
      const parts = pathname.split('/').filter(p => p)
      const lastPart = parts[parts.length - 1]
      
      if (lastPart) {
        return decodeURIComponent(lastPart)
          .replace(/-/g, ' ')
          .replace(/%20/g, ' ')
          .substring(0, 80)
      }
      
      return urlObj.hostname
    } catch {
      return url.substring(0, 80)
    }
  }

  return (
    <>
      <CustomCursor />
      <section className="min-h-screen relative overflow-hidden pt-24 pb-20">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>
        
        <div className="relative z-10 max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-white/75 hover:text-white transition-colors mb-6"
          >
            <ArrowLeft size={20} />
            <span>Quay lại trang chủ</span>
          </Link>
          
          <h1 className="text-5xl md:text-6xl font-display font-black mb-4 leading-tight">
            <span className="text-gradient block">Tài Liệu Tham Chiếu</span>
          </h1>
          <p className="text-white/75 text-lg md:text-xl max-w-2xl">
            Các nguồn tài liệu và liên kết liên quan đến xây dựng văn hóa và đạo đức theo tư tưởng Hồ Chí Minh
          </p>
        </div>

        {/* Content */}
        {loading && (
          <div className="text-center py-12">
            <div className="inline-block animate-spin">
              <div className="w-8 h-8 border-4 border-white/20 border-t-white rounded-full"></div>
            </div>
            <p className="text-white/75 mt-4">Đang tải tài liệu...</p>
          </div>
        )}

        {error && (
          <div className="glass p-6 rounded-lg border border-red-500/30 text-red-400">
            <p>Lỗi: {error}</p>
          </div>
        )}

        {!loading && !error && references.length > 0 && (
          <div className="space-y-4">
            {references.map((ref, index) => (
              <motion.a
                key={index}
                href={ref.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05 }}
                className="group glass-enhanced hover-lift p-6 rounded-lg border border-white/10 hover:border-white/30 transition-all duration-300 block cursor-pointer"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-white/50 font-mono text-sm">{String(index + 1).padStart(2, '0')}</span>
                      <h3 className="text-white group-hover:text-white/90 transition-colors line-clamp-2 text-sm md:text-base font-medium">
                        {ref.title || ref.url}
                      </h3>
                    </div>
                    <p className="text-white/40 text-xs md:text-sm truncate group-hover:text-white/50 transition-colors">
                      {ref.url}
                    </p>
                  </div>
                  <div className="flex-shrink-0 text-white/30 group-hover:text-white/70 transition-colors">
                    <ExternalLink size={20} />
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        )}

        {!loading && !error && references.length === 0 && (
          <div className="text-center py-12">
            <p className="text-white/75">Không có tài liệu nào được tìm thấy</p>
          </div>
        )}

        {/* AI Disclosure Section */}
        <div className="mt-16 pt-12 border-t border-white/10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="glass-enhanced p-8 rounded-lg border border-blue-500/20"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0">
                <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500/20 text-blue-400">
                  <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold text-white mb-3">Về Công Nghệ Sử Dụng</h3>
                <p className="text-white/75 text-sm leading-relaxed mb-3">
                  Dự án này được phát triển với hỗ trợ của các công nghệ hiện đại, bao gồm:
                </p>
                <ul className="space-y-2 text-white/70 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span><strong>Trí Tuệ Nhân Tạo (AI)</strong>: Claude Haiku 4.5 được sử dụng để hỗ trợ trong quá trình phát triển, thiết kế, và tối ưu hóa nội dung của dự án.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span><strong>Next.js & React</strong>: Framework web hiện đại để xây dựng giao diện người dùng tương tác.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span><strong>Tailwind CSS</strong>: Công cụ styling để tạo ra thiết kế responsive và hiện đại.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-400 mt-1">•</span>
                    <span><strong>Motion & Animation</strong>: Tạo các hiệu ứng hình ảnh mượt mà để cải thiện trải nghiệm người dùng.</span>
                  </li>
                </ul>
                <p className="text-white/60 text-xs mt-4 italic">
                  Mục đích của việc sử dụng AI là để nâng cao chất lượng và hiệu quả của dự án, đảm bảo nội dung được trình bày một cách rõ ràng, chính xác và hấp dẫn.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
        </div>
      </section>
    </>
  )
}
