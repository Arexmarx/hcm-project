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
            Xây Dựng Đạo Đức Cách Mạng
          </h2>
          <p className="text-white/75 text-lg max-w-3xl mx-auto mb-6">
            Theo tư tưởng Hồ Chí Minh, đạo đức là cái "gốc" của người cách mạng
          </p>
          <div className="glass p-6 rounded-lg max-w-3xl mx-auto">
            <p className="text-white italic text-lg">
              "Cũng như sông thì có nguồn mới có nước... Người cách mạng phải có đạo đức, không có đạo đức thì dù tài giỏi mấy cũng không lãnh đạo được nhân dân"
            </p>
            <p className="text-white/60 mt-2">- Hồ Chí Minh</p>
          </div>
          <p className="text-white/75 mt-6">
            <strong className="text-white">Phương châm:</strong> Đạo đức không phải tự nhiên có, mà do đấu tranh, rèn luyện bền bỉ hàng ngày ("ngọc càng mài càng sáng, vàng càng luyện càng trong")
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
                <h4 className="text-white font-bold mb-2">Cần</h4>
                <p className="text-white/75 text-sm">Siêng năng, lao động có kế hoạch, sáng tạo</p>
              </Card>

              <Card className="glass p-4">
                <h4 className="text-white font-bold mb-2">Kiệm</h4>
                <p className="text-white/75 text-sm">Tiết kiệm, không hoang phí</p>
              </Card>

              <Card className="glass p-4">
                <h4 className="text-white font-bold mb-2">Liêm</h4>
                <p className="text-white/75 text-sm">Trong sạch, không tham lam</p>
              </Card>

              <Card className="glass p-4">
                <h4 className="text-white font-bold mb-2">Chính</h4>
                <p className="text-white/75 text-sm">Thẳng thắn, đứng đắn</p>
              </Card>

              <Card className="glass p-4">
                <h4 className="text-white font-bold mb-2">Chí Công Vô Tư</h4>
                <p className="text-white/75 text-sm">Đặt lợi ích công (Tổ quốc, nhân dân) lên trên lợi ích tư</p>
              </Card>

              <Card className="glass p-4">
                <h4 className="text-white font-bold mb-2">Đức Khiêm Tốn</h4>
                <p className="text-white/75 text-sm">Không tự mãn, kiêu ngạo, luôn cầu tiến bộ</p>
              </Card>

              <Card className="glass p-4">
                <h4 className="text-white font-bold mb-2">Trung Thực & Trách Nhiệm</h4>
                <p className="text-white/75 text-sm">Trung thực với mình, với người, với việc. Dám làm, dám chịu trách nhiệm, không đổ lỗi cho hoàn cảnh</p>
              </Card>
            </div>
          </div>
        </div>

        {/* Section 2.5: Tình yêu thương con người & Tinh thần quốc tế */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="glass p-8 rounded-lg">
            <div className="flex items-center space-x-4 mb-6">
              <div className="text-5xl">❤️</div>
              <h3 className="text-2xl font-bold text-white">Tình Yêu Thương Con Người</h3>
            </div>
            
            <p className="text-white/75 leading-relaxed mb-4">
              Tình thương của Bác là tình thương mênh mông dành cho tất cả mọi kiếp người (trừ những kẻ phản bội Tổ quốc).
            </p>
            
            <div className="glass p-6 rounded-lg mb-4">
              <p className="text-white italic">
                "Việc gì có lợi cho dân, dù nhỏ, cũng phải hết sức làm; việc gì có hại cho dân, dù nhỏ, cũng phải hết sức tránh"
              </p>
            </div>

            <div className="space-y-3 text-white/75 text-sm">
              <p><strong className="text-white">Câu chuyện minh họa:</strong></p>
              <p>• <strong className="text-white">Năm 1945:</strong> Bác chủ trương "hũ gạo cứu đói", mỗi tuần nhịn ăn một bữa</p>
              <p>• <strong className="text-white">Chiến dịch Biên giới:</strong> Bác cởi áo khoác tặng tù binh Pháp bị rét cóng</p>
            </div>
          </div>

          <div className="glass p-8 rounded-lg">
            <div className="flex items-center space-x-4 mb-6">
              <div className="text-5xl">🌍</div>
              <h3 className="text-2xl font-bold text-white">Tinh Thần Quốc Tế Trong Sáng</h3>
            </div>
            
            <p className="text-white/75 leading-relaxed mb-4">
              Kết hợp chủ nghĩa yêu nước chân chính với chủ nghĩa quốc tế vô sản.
            </p>

            <p className="text-white/75 leading-relaxed">
              Đoàn kết với nhân dân tiến bộ thế giới vì hòa bình, độc lập dân tộc.
            </p>
          </div>
        </div>

        {/* Section 3: Thực trạng thanh niên */}
        <div className="glass p-8 rounded-lg mb-20">
          <div className="text-center mb-8">
            <div className="text-5xl mb-4">👥</div>
            <h3 className="text-3xl font-bold text-white mb-4">Thực Trạng Đạo Đức, Lối Sống Thanh Niên Hiện Nay</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass p-6 rounded-lg border-2 border-green-500/30">
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-3xl">✅</div>
                <h4 className="text-xl font-bold text-green-400">Mặt tích cực</h4>
              </div>
              <p className="text-white/75 text-sm">
                Trong bối cảnh kinh tế thị trường và Cách mạng 4.0, phần lớn sinh viên vẫn giữ được lối sống nhân hậu, tình nghĩa, năng động, sáng tạo, dám đối mặt với thách thức, có chí lập thân lập nghiệp.
              </p>
            </div>

            <div className="glass p-6 rounded-lg border-2 border-orange-500/30">
              <div className="flex items-center space-x-3 mb-4">
                <div className="text-3xl">⚠️</div>
                <h4 className="text-xl font-bold text-orange-400">Mặt tiêu cực (Cần cảnh báo)</h4>
              </div>
              <ul className="space-y-2 text-white/75 text-sm">
                <li>• Một bộ phận phai nhạt niềm tin, lý tưởng, mất phương hướng</li>
                <li>• Lối sống thực dụng, chạy theo đồng tiền, thờ ơ với gia đình và xã hội</li>
                <li>• Sa vào tệ nạn xã hội, vi phạm pháp luật</li>
                <li>• "Bệnh" vô cảm, thiếu trách nhiệm</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 4: Nhiệm vụ của Sinh viên */}
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
              <p className="text-white/75 text-sm">Trau dồi chuyên môn, ngoại ngữ để hội nhập quốc tế nhưng giữ vững bản sắc văn hóa Việt Nam</p>
            </Card>
          </div>

          <div className="glass p-6 rounded-lg max-w-2xl mx-auto mt-8">
            <h4 className="text-white font-bold mb-3 text-center">Đấu tranh phê phán</h4>
            <p className="text-white/75 text-sm text-center">
              Đấu tranh phê phán cái xấu, cái ác, sự vô cảm
            </p>
          </div>

          <div className="mt-8 text-center">
            <div className="glass p-6 rounded-lg inline-block">
              <p className="text-white text-2xl font-bold">
                "Muốn nên sự nghiệp lớn, Tinh thần càng phải cao"
              </p>
              <p className="text-white/60 mt-2">- Hồ Chí Minh</p>
            </div>
            <p className="text-white/75 mt-6 max-w-3xl mx-auto">
              <strong className="text-white">Lời kêu gọi:</strong> Sinh viên Việt Nam quyết tâm rèn đức, luyện tài để đưa đất nước "sánh vai với các cường quốc năm châu" như Bác hằng mong muốn.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
