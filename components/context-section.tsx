"use client"

import { useEffect, useState } from "react"
import { Card } from "@/components/ui/card"
import { AlertCircle } from "lucide-react"

export default function ContextSection() {
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

    const element = document.getElementById("context")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="context" className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className={`transition-all duration-1000 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Bối Cảnh Và Thực Trạng
            </h2>
            <p className="text-white/75 text-lg max-w-3xl mx-auto">
              Sau 35 năm đổi mới, đất nước đạt nhiều thành tựu to lớn nhưng vẫn đối mặt với những thách thức nghiêm trọng
            </p>
          </div>

          {/* Thành tựu & Thách thức */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <Card className="glass p-8">
              <div className="flex items-center space-x-4 mb-4">
                <div className="text-5xl">🏆</div>
                <h3 className="text-2xl font-bold text-white">Thành Tựu</h3>
              </div>
              <p className="text-white/75 leading-relaxed">
                Qua 35 năm đổi mới, đất nước đã đạt được những thành tựu to lớn về kinh tế, chính trị và xã hội.
              </p>
            </Card>

            <Card className="glass p-8 border-2 border-yellow-500/30">
              <div className="flex items-center space-x-4 mb-4">
                <AlertCircle className="w-12 h-12 text-yellow-400" />
                <h3 className="text-2xl font-bold text-white">Thách Thức</h3>
              </div>
              <p className="text-white/75 leading-relaxed">
                Lĩnh vực văn hóa và xây dựng con người đang đứng trước những thách thức nghiêm trọng cần được giải quyết.
              </p>
            </Card>
          </div>

          {/* Những hạn chế và yếu kém */}
          <div className="mb-12">
            <h3 className="text-3xl font-bold text-white mb-8 text-center">Những Hạn Chế Và Yếu Kém</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card className="glass p-6">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="text-3xl">📊</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-3">Vị trí chưa xứng tầm</h4>
                    <ul className="space-y-2 text-white/75">
                      <li>• Văn hóa chưa được quan tâm tương xứng với kinh tế và chính trị</li>
                      <li>• Chưa thật sự trở thành nguồn lực, động lực nội sinh cho sự phát triển bền vững</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="glass p-6">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="text-3xl">🎭</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-3">Lệch lạc trong nhận thức</h4>
                    <p className="text-white/75">
                      Còn có chiều hướng coi trọng chức năng giải trí đơn thuần, bỏ qua vai trò giáo dục và phát triển con người
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="glass p-6">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="text-3xl">🌫️</div>
                  <div>
                    <h4 className="text-xl font-bold text-white mb-3">Môi trường suy thoái</h4>
                    <ul className="space-y-2 text-white/75">
                      <li>• Môi trường văn hóa bị ô nhiễm bởi các tệ nạn xã hội, tham nhũng, tiêu cực</li>
                      <li>• Có sự chênh lệch lớn về hưởng thụ văn hóa giữa các vùng miền (đặc biệt là vùng sâu, vùng xa, đồng bào dân tộc thiểu số)</li>
                    </ul>
                  </div>
                </div>
              </Card>

              <Card className="glass p-6 border-2 border-red-500/30">
                <div className="flex items-start space-x-3 mb-4">
                  <div className="text-3xl">🚨</div>
                  <div>
                    <h4 className="text-xl font-bold text-red-400 mb-3">Báo động đỏ</h4>
                    <p className="text-white/75">
                      Tình trạng suy thoái về tư tưởng chính trị, đạo đức, lối sống trong Đảng và trong xã hội có chiều hướng gia tăng
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
