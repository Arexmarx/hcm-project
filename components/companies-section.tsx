"use client"

import Image from "next/image"
import { Card } from "@/components/ui/card"

export default function CompaniesSection() {
  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-black"></div>

      <div className="relative z-10 max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Phẩm Chất Đạo Đức Cách Mạng
          </h2>
          <p className="text-white/75 text-lg max-w-3xl mx-auto">
            Theo tư tưởng Hồ Chí Minh, đạo đức là cái "gốc" của người cách mạng
          </p>
        </div>

        {/* Section 1: Trung với nước, Hiếu với dân */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="text-5xl">🇻🇳</div>
              <h3 className="text-3xl font-bold text-white">Trung với nước, Hiếu với dân</h3>
            </div>
            
            <p className="text-white/75 leading-relaxed">
              Đây là phẩm chất quan trọng nhất. Suốt đời phấn đấu hy sinh vì độc lập, tự do của Tổ quốc và hạnh phúc của nhân dân.
            </p>
            
            <div className="glass p-6 rounded-lg">
              <p className="text-white italic text-lg">
                "Một ngày mà Tổ quốc chưa thống nhất, đồng bào còn chịu khổ, là một ngày tôi ăn không ngon, ngủ không yên"
              </p>
              <p className="text-white/60 mt-2 text-sm">- Hồ Chí Minh</p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/images/section1/4.jpg"
                alt="Hồ Chí Minh với nhân dân"
                width={300}
                height={200}
                className="rounded-lg object-cover w-full h-48"
              />
              <Image
                src="/images/section1/5.jpeg"
                alt="Tình yêu Tổ quốc"
                width={300}
                height={200}
                className="rounded-lg object-cover w-full h-48"
              />
            </div>
          </div>

          <div>
            <Image
              src="/images/section1/1.jpg"
              alt="Chủ tịch Hồ Chí Minh"
              width={600}
              height={800}
              className="rounded-lg w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Section 2: Các phẩm chất đạo đức */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="order-2 lg:order-1">
            <div className="grid grid-cols-2 gap-4">
              <Image
                src="/images/section2/7.jpg"
                alt="Đạo đức cách mạng"
                width={300}
                height={200}
                className="rounded-lg object-cover w-full h-64"
              />
              <Image
                src="/images/section2/8.jpeg"
                alt="Rèn luyện đạo đức"
                width={300}
                height={200}
                className="rounded-lg object-cover w-full h-64"
              />
              <Image
                src="/images/section2/9.jpg"
                alt="Phẩm chất người cách mạng"
                width={300}
                height={200}
                className="rounded-lg object-cover w-full h-64 col-span-2"
              />
            </div>
          </div>

          <div className="space-y-6 order-1 lg:order-2">
            <div className="flex items-center space-x-4 mb-4">
              <div className="text-5xl">✨</div>
              <h3 className="text-3xl font-bold text-white">Các Phẩm Chất Đạo Đức</h3>
            </div>

            <div className="space-y-4">
              <Card className="glass p-4">
                <h4 className="text-white font-bold mb-2">Cần - Kiệm - Liêm - Chính</h4>
                <p className="text-white/75 text-sm">Siêng năng, tiết kiệm, trong sạch, thẳng thắn - bốn đức tính nền tảng</p>
              </Card>

              <Card className="glass p-4">
                <h4 className="text-white font-bold mb-2">Chí Công Vô Tư</h4>
                <p className="text-white/75 text-sm">Đặt lợi ích công (Tổ quốc, nhân dân) lên trên lợi ích tư</p>
              </Card>

              <Card className="glass p-4">
                <h4 className="text-white font-bold mb-2">Khiêm Tốn & Trách Nhiệm</h4>
                <p className="text-white/75 text-sm">Không tự mãn, luôn cầu tiến bộ, dám làm dám chịu</p>
              </Card>

              <Card className="glass p-4">
                <h4 className="text-white font-bold mb-2">Tình Yêu Thương Con Người</h4>
                <p className="text-white/75 text-sm">Tình thương mênh mông dành cho mọi kiếp người</p>
              </Card>
            </div>
          </div>
        </div>

        {/* Section 3: Nhiệm vụ của Sinh viên */}
        <div className="glass p-8 rounded-lg">
          <div className="text-center mb-8">
            <div className="text-5xl mb-4">🎓</div>
            <h3 className="text-3xl font-bold text-white mb-4">Nhiệm Vụ Của Thanh Niên - Sinh Viên</h3>
            <div className="glass p-6 rounded-lg max-w-3xl mx-auto">
              <p className="text-white text-xl italic">
                "Học để làm gì? Học để phục vụ ai?"
              </p>
              <p className="text-white/90 mt-4">
                Học để phụng sự Tổ quốc, phục vụ nhân dân, làm cho mình trở thành người có ích.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <Card className="glass p-6 text-center">
              <div className="text-4xl mb-3">📚</div>
              <h4 className="text-white font-bold mb-2">Học tập tấm gương</h4>
              <p className="text-white/75 text-sm">Tích cực học tập và làm theo tấm gương đạo đức Hồ Chí Minh</p>
            </Card>

            <Card className="glass p-6 text-center">
              <div className="text-4xl mb-3">💪</div>
              <h4 className="text-white font-bold mb-2">Rèn luyện bản lĩnh</h4>
              <p className="text-white/75 text-sm">Rèn luyện bản lĩnh chính trị, không dao động trước cám dỗ</p>
            </Card>

            <Card className="glass p-6 text-center">
              <div className="text-4xl mb-3">🌟</div>
              <h4 className="text-white font-bold mb-2">Trau dồi chuyên môn</h4>
              <p className="text-white/75 text-sm">Nâng cao kiến thức, giữ vững bản sắc văn hóa Việt Nam</p>
            </Card>
          </div>

          <div className="mt-8 text-center">
            <div className="glass p-6 rounded-lg inline-block">
              <p className="text-white text-2xl font-bold">
                "Muốn nên sự nghiệp lớn, Tinh thần càng phải cao"
              </p>
              <p className="text-white/60 mt-2">- Hồ Chí Minh</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
