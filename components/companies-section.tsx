"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Card } from "@/components/ui/card"
import { Flag, Award, Hammer, PiggyBank, ShieldCheck, Scale, Heart, Globe, Users, GraduationCap, Dumbbell, BookOpen, CircleAlert, CircleCheck } from "lucide-react"

export default function CompaniesSection() {
  const [hoveredImage, setHoveredImage] = useState<string | null>(null)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  const handleMouseMove = (e: React.MouseEvent) => {
    setMousePosition({ x: e.clientX, y: e.clientY })
  }

  return (
    <section className="py-20 relative" onMouseMove={handleMouseMove}>
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
        <div className="text-center mb-20">
          <h2 className="text-5xl md:text-7xl font-display font-black mb-6 leading-tight">
            <span className="text-gradient block leading-tight">Xây Dựng</span>
            <span className="text-gradient-gold block italic mt-3 leading-tight">Đạo Đức Cách Mạng</span>
          </h2>
          <div className="section-divider my-8"></div>
          <p className="text-white/75 text-lg md:text-xl max-w-3xl mx-auto mb-6 font-body">
            Theo tư tưởng Hồ Chí Minh, đạo đức là cái "gốc" của người cách mạng
          </p>
          <div className="glass-enhanced hover-lift p-6 rounded-lg max-w-3xl mx-auto animate-pulse-glow">
            <p className="text-white italic text-lg">
              "Cũng như sông thì có nguồn mới có nước... Người cách mạng phải có đạo đức, không có đạo đức thì dù tài giỏi mấy cũng không lãnh đạo được nhân dân"
            </p>
            <p className="text-white/60 mt-2">- Hồ Chí Minh -</p>
          </div>
          <p className="text-white/75 mt-6">
            <strong className="text-white">Phương châm:</strong> Đạo đức không phải tự nhiên có, mà do đấu tranh, rèn luyện bền bỉ hàng ngày<br/> "ngọc càng mài càng sáng, vàng càng luyện càng trong"
          </p>
        </div>

        {/* Section 1: Trung với nước, Hiếu với dân */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <div className="flex items-center space-x-4 mb-4">
              <div className="rounded-full bg-red-500/10 p-3">
                <Flag className="w-10 h-10 text-red-400" />
              </div>
              <h3 className="text-3xl font-bold text-white">Trung với nước, Hiếu với dân</h3>
            </div>
            
            <p 
              className="text-white/75 leading-relaxed cursor-pointer hover:text-white transition-colors"
              onMouseEnter={() => setHoveredImage("/images/section1/1.jpg")}
              onMouseLeave={() => setHoveredImage(null)}
            >
              Đây là phẩm chất quan trọng nhất. Suốt đời phấn đấu hy sinh vì độc lập, tự do của Tổ quốc và hạnh phúc của nhân dân.
            </p>
            
            <div 
              className="glass p-6 rounded-lg cursor-pointer hover:border-white/30 transition-all"
              onMouseEnter={() => setHoveredImage("/images/section1/4.jpg")}
              onMouseLeave={() => setHoveredImage(null)}
            >
              <p className="text-white italic text-lg">
                "Một ngày mà Tổ quốc chưa thống nhất, đồng bào còn chịu khổ, là một ngày tôi ăn không ngon, <br/>ngủ không yên"
              </p>
              <p className="text-white/60 mt-2 text-sm">- Hồ Chí Minh -</p>
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
        <div className="mb-20 relative">
          {/* Background */}
          <div className="absolute inset-0 -mx-6 bg-gradient-to-b from-black via-gray-900 to-black rounded-3xl"></div>
          
          {/* Section Header */}
          <div className="text-center mb-16 relative z-10 pt-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="inline-flex items-center space-x-3 mb-6 glass-enhanced px-6 py-3 rounded-full border border-yellow-500/30">
                <Award className="w-6 h-6 text-yellow-400 animate-pulse-glow" />
                <span className="text-yellow-400 font-display font-bold text-xl">Phẩm Chất Đạo Đức</span>
              </div>
              <h3 className="text-4xl md:text-5xl font-display font-black text-white mb-4 leading-tight">
                <span className="text-gradient-gold block">Nền Tảng</span>
                <span className="text-white/90 block mt-2 italic">Cách Mạng</span>
              </h3>
              <div className="section-divider my-6"></div>
            </motion.div>
          </div>

          {/* Main Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 relative z-10 pb-12">
            {/* Left: Featured Image */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <Card className="glass-enhanced overflow-hidden border border-yellow-500/20 h-full">
                <div className="relative h-full min-h-[500px]">
                  <Image
                    src="/images/section2/7.jpg"
                    alt="Đạo đức cách mạng"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <p className="text-white/90 font-display text-lg italic leading-relaxed">
                      "Con người cách mạng phải có <br/>đạo đức cách mạng"
                    </p>
                    <p className="text-yellow-400 mt-2 text-sm font-body">- Hồ Chí Minh -</p>
                  </div>
                </div>
              </Card>
            </motion.div>

            {/* Right: Quality Cards Grid */}
            <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Cần */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
              >
                <Card 
                  className="glass-enhanced hover-lift p-6 h-full cursor-pointer group border border-white/10 hover:border-red-500/40 transition-all duration-300 relative overflow-hidden"
                  onMouseEnter={() => setHoveredImage("/images/section2/6.jpg")}
                  onMouseLeave={() => setHoveredImage(null)}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 rounded-full blur-3xl group-hover:bg-red-500/10 transition-all"></div>
                  <div className="relative">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="p-2 bg-red-500/10 rounded-lg group-hover:bg-red-500/20 transition-all">
                        <Hammer className="w-6 h-6 text-red-400" />
                      </div>
                      <h4 className="text-2xl font-display font-bold text-white group-hover:text-gradient transition-all">Cần</h4>
                    </div>
                    <p className="text-white/70 text-sm font-body leading-relaxed">Siêng năng, lao động có kế hoạch, sáng tạo</p>
                  </div>
                </Card>
              </motion.div>

              {/* Kiệm */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
              >
                <Card 
                  className="glass-enhanced hover-lift p-6 h-full cursor-pointer group border border-white/10 hover:border-yellow-500/40 transition-all duration-300 relative overflow-hidden"
                  onMouseEnter={() => setHoveredImage("/images/section2/7.jpg")}
                  onMouseLeave={() => setHoveredImage(null)}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-yellow-500/5 rounded-full blur-3xl group-hover:bg-yellow-500/10 transition-all"></div>
                  <div className="relative">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="p-2 bg-yellow-500/10 rounded-lg group-hover:bg-yellow-500/20 transition-all">
                        <PiggyBank className="w-6 h-6 text-yellow-400" />
                      </div>
                      <h4 className="text-2xl font-display font-bold text-white group-hover:text-gradient-gold transition-all">Kiệm</h4>
                    </div>
                    <p className="text-white/70 text-sm font-body leading-relaxed">Tiết kiệm, không hoang phí</p>
                  </div>
                </Card>
              </motion.div>

              {/* Liêm */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
              >
                <Card 
                  className="glass-enhanced hover-lift p-6 h-full cursor-pointer group border border-white/10 hover:border-blue-500/40 transition-all duration-300 relative overflow-hidden"
                  onMouseEnter={() => setHoveredImage("/images/section2/8.jpeg")}
                  onMouseLeave={() => setHoveredImage(null)}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-3xl group-hover:bg-blue-500/10 transition-all"></div>
                  <div className="relative">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="p-2 bg-blue-500/10 rounded-lg group-hover:bg-blue-500/20 transition-all">
                        <ShieldCheck className="w-6 h-6 text-blue-400" />
                      </div>
                      <h4 className="text-2xl font-display font-bold text-white group-hover:text-gradient transition-all">Liêm</h4>
                    </div>
                    <p className="text-white/70 text-sm font-body leading-relaxed">Trong sạch, không tham lam</p>
                  </div>
                </Card>
              </motion.div>

              {/* Chính */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
              >
                <Card 
                  className="glass-enhanced hover-lift p-6 h-full cursor-pointer group border border-white/10 hover:border-purple-500/40 transition-all duration-300 relative overflow-hidden"
                  onMouseEnter={() => setHoveredImage("/images/section2/9.jpg")}
                  onMouseLeave={() => setHoveredImage(null)}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl group-hover:bg-purple-500/10 transition-all"></div>
                  <div className="relative">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="p-2 bg-purple-500/10 rounded-lg group-hover:bg-purple-500/20 transition-all">
                        <Scale className="w-6 h-6 text-purple-400" />
                      </div>
                      <h4 className="text-2xl font-display font-bold text-white group-hover:text-gradient transition-all">Chính</h4>
                    </div>
                    <p className="text-white/70 text-sm font-body leading-relaxed">Thẳng thắn, đứng đắn</p>
                  </div>
                </Card>
              </motion.div>

              {/* Chí Công Vô Tư - Larger Card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="sm:col-span-2"
              >
                <Card 
                  className="glass-enhanced hover-lift p-6 h-full cursor-pointer group border border-white/10 hover:border-yellow-500/40 transition-all duration-300 relative overflow-hidden"
                  onMouseEnter={() => setHoveredImage("/images/section2/6.jpg")}
                  onMouseLeave={() => setHoveredImage(null)}
                >
                  <div className="absolute top-0 right-0 w-40 h-40 bg-yellow-500/5 rounded-full blur-3xl group-hover:bg-yellow-500/10 transition-all"></div>
                  <div className="relative">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="p-2 bg-yellow-500/10 rounded-lg group-hover:bg-yellow-500/20 transition-all">
                        <Heart className="w-6 h-6 text-yellow-400" />
                      </div>
                      <h4 className="text-2xl md:text-3xl font-display font-bold text-white group-hover:text-gradient-gold transition-all">Chí Công Vô Tư</h4>
                    </div>
                    <p className="text-white/70 text-sm md:text-base font-body leading-relaxed">Đặt lợi ích công (Tổ quốc, nhân dân) lên trên lợi ích tư</p>
                  </div>
                </Card>
              </motion.div>

              {/* Đức Khiêm Tốn */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
              >
                <Card 
                  className="glass-enhanced hover-lift p-6 h-full cursor-pointer group border border-white/10 hover:border-green-500/40 transition-all duration-300 relative overflow-hidden"
                  onMouseEnter={() => setHoveredImage("/images/section2/8.jpeg")}
                  onMouseLeave={() => setHoveredImage(null)}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-green-500/5 rounded-full blur-3xl group-hover:bg-green-500/10 transition-all"></div>
                  <div className="relative">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="p-2 bg-green-500/10 rounded-lg group-hover:bg-green-500/20 transition-all">
                        <CircleCheck className="w-6 h-6 text-green-400" />
                      </div>
                      <h4 className="text-2xl font-display font-bold text-white group-hover:text-gradient transition-all">Đức Khiêm Tốn</h4>
                    </div>
                    <p className="text-white/70 text-sm font-body leading-relaxed">Không tự mãn, kiêu ngạo, luôn cầu tiến bộ</p>
                  </div>
                </Card>
              </motion.div>

              {/* Trung Thực & Trách Nhiệm */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                <Card 
                  className="glass-enhanced hover-lift p-6 h-full cursor-pointer group border border-white/10 hover:border-pink-500/40 transition-all duration-300 relative overflow-hidden"
                  onMouseEnter={() => setHoveredImage("/images/section2/9.jpg")}
                  onMouseLeave={() => setHoveredImage(null)}
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-pink-500/5 rounded-full blur-3xl group-hover:bg-pink-500/10 transition-all"></div>
                  <div className="relative">
                    <div className="flex items-center space-x-3 mb-3">
                      <div className="p-2 bg-pink-500/10 rounded-lg group-hover:bg-pink-500/20 transition-all">
                        <ShieldCheck className="w-6 h-6 text-pink-400" />
                      </div>
                      <h4 className="text-xl font-display font-bold text-white group-hover:text-gradient transition-all">Trung Thực & Trách Nhiệm</h4>
                    </div>
                    <p className="text-white/70 text-sm font-body leading-relaxed">Dám làm, dám chịu trách nhiệm</p>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Section 2.5: Tình yêu thương con người & Tinh thần quốc tế */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20 items-stretch">
          <div 
            className="glass p-8 rounded-lg cursor-pointer hover:border-white/30 transition-all h-full min-h-[360px]"
            onMouseEnter={() => setHoveredImage("/images/section1/2.jpg")}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="rounded-full bg-red-500/10 p-3">
                <Heart className="w-8 h-8 text-red-400" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">Tình Yêu Thương Con Người</h3>
            </div>
            
            <p className="text-white/75 leading-relaxed mb-4">
              Tình thương của Bác là tình thương mênh mông dành cho tất cả mọi kiếp người (trừ những kẻ phản bội Tổ quốc).
            </p>
            
            <div className="glass p-6 rounded-lg mb-4">
              <p className="text-white italic text-center">
                "Việc gì có lợi cho dân, dù nhỏ, <br />cũng phải hết sức làm.<br /> Việc gì có hại cho dân, dù nhỏ,<br /> cũng phải hết sức tránh"
              </p>
            </div>

            <div className="space-y-3 text-white/75 text-sm">
              <p><strong className="text-white">Câu chuyện minh họa:</strong></p>
              <p>• <strong className="text-white">Năm 1945:</strong> Bác chủ trương "hũ gạo cứu đói", <br />mỗi tuần nhịn ăn một bữa</p>
              <p>• <strong className="text-white">Chiến dịch Biên giới:</strong> Bác cởi áo khoác tặng tù binh Pháp bị rét</p>
            </div>
          </div>

          <div 
            className="glass p-8 rounded-lg cursor-pointer hover:border-white/30 transition-all h-full min-h-[360px]"
            onMouseEnter={() => setHoveredImage("/images/section1/5.jpeg")}
            onMouseLeave={() => setHoveredImage(null)}
          >
            <div className="flex items-center space-x-4 mb-6">
              <div className="rounded-full bg-blue-500/10 p-3">
                <Globe className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white leading-tight">Tinh Thần Quốc Tế Trong Sáng</h3>
            </div>
            
            <p className="text-white/75 leading-relaxed mb-4">
              Kết hợp chủ nghĩa yêu nước chân chính với chủ nghĩa <br />quốc tế vô sản.
            </p>

            <p className="text-white/75 leading-relaxed">
              Đoàn kết với nhân dân tiến bộ thế giới vì hòa bình, độc lập dân tộc.
            </p>
          </div>
        </div>

        {/* Section 3: Thực trạng thanh niên */}
        <div 
          className="glass p-8 rounded-lg mb-20 cursor-pointer hover:border-white/30 transition-all"
          onMouseEnter={() => setHoveredImage("/images/section2/6.jpg")}
          onMouseLeave={() => setHoveredImage(null)}
        >
          <div className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="rounded-full bg-white/10 p-4">
                <Users className="w-12 h-12 text-white" />
              </div>
            </div>
            <h3 className="text-3xl font-bold text-white mb-4">Thực Trạng Đạo Đức, Lối Sống Thanh Niên Hiện Nay</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="glass p-6 rounded-lg border-2 border-green-500/30">
              <div className="flex items-center space-x-3 mb-4">
                <CircleCheck className="w-8 h-8 text-green-400" />
                <h4 className="text-2xl font-bold text-green-400">Mặt tích cực</h4>
              </div>
              <p className="text-white/75 text-sm">
                Trong bối cảnh kinh tế thị trường và Cách mạng 4.0, phần lớn sinh viên vẫn giữ được lối sống nhân hậu, tình nghĩa, năng động, sáng tạo, dám đối mặt với thách thức, có chí lập thân lập nghiệp.
              </p>
            </div>

            <div className="glass p-6 rounded-lg border-2 border-orange-500/30">
              <div className="flex items-center space-x-3 mb-4">
                <CircleAlert className="w-8 h-8 text-orange-400" />
                <h4 className="text-2xl font-bold text-orange-400">Mặt tiêu cực (Cần cảnh báo)</h4>
              </div>
              <ul className="space-y-2 text-white/75 text-sm">
                <li>• Một bộ phận phai nhạt niềm tin, lý tưởng, mất phương hướng</li>
                <li>• Lối sống thực dụng, chạy theo đồng tiền, thờ ơ với gia đình <br/>và xã hội</li>
                <li>• Sa vào tệ nạn xã hội, vi phạm pháp luật</li>
                <li>• "Bệnh" vô cảm, thiếu trách nhiệm</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Section 4: Nhiệm vụ của Sinh viên */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative bg-white/5 backdrop-blur-sm p-10 md:p-12 rounded-none border-4 border-white/20">
            {/* Header with Offset Design */}
            <div className="relative mb-12">
              <div className="flex items-start gap-8 mb-8">
                <div className="relative">
                  <div className="w-20 h-20 bg-white border-4 border-black flex items-center justify-center transform -rotate-6">
                    <GraduationCap className="w-12 h-12 text-black" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 border-2 border-black"></div>
                </div>
                
                <div className="flex-1">
                  <h3 className="text-4xl md:text-6xl font-display font-black text-white leading-none">
                    NHIỆM VỤ<br className="hidden md:block" />
                    <span className="text-white/70 block md:inline">THANH NIÊN - SINH VIÊN</span>
                  </h3>
                </div>
              </div>

              {/* Featured Quote Card - Editorial Style */}
              <div className="max-w-5xl mx-auto">
                <Card 
                  className="bg-black border-4 border-white p-8 md:p-10 cursor-pointer group hover:border-yellow-400 transition-all duration-300"
                  onMouseEnter={() => setHoveredImage("/images/section2/6.jpg")}
                  onMouseLeave={() => setHoveredImage(null)}
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-3 h-full bg-yellow-400"></div>
                    </div>
                    <div>
                      <div className="mb-6">
                        <span className="inline-block bg-yellow-400 text-black px-4 py-1 font-mono-custom text-xs tracking-wider uppercase font-bold">CÂU HỎI CĂN BẢN</span>
                      </div>
                      <p className="text-white text-3xl md:text-5xl font-display font-black mb-8 leading-tight">
                        “HỌC ĐỂ LÀM GÌ?<br />HỌC ĐỂ PHỤC VỤ AI?”
                      </p>
                      <div className="border-t-2 border-white/20 pt-6">
                        <p className="text-white text-lg md:text-xl font-body leading-relaxed">
                          Học để <span className="bg-yellow-400 text-black px-2 py-1 font-bold">phụng sự Tổ quốc</span>, <span className="bg-white text-black px-2 py-1 font-bold">phục vụ nhân dân</span>, làm cho mình trở thành người có ích.
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Main Grid - Asymmetric Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              {/* Học tập - Large Card */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="md:row-span-2"
              >
                <Card 
                  className="bg-white/10 backdrop-blur-sm border-4 border-white/30 p-8 h-full cursor-pointer group hover:bg-white/15 hover:border-white transition-all duration-300"
                  onMouseEnter={() => setHoveredImage("/images/section2/7.jpg")}
                  onMouseLeave={() => setHoveredImage(null)}
                >
                  <div className="flex flex-col h-full">
                    <div className="mb-6">
                      <div className="w-16 h-16 bg-white border-4 border-black flex items-center justify-center mb-4">
                        <BookOpen className="w-8 h-8 text-black" />
                      </div>
                      <div className="h-1 w-20 bg-yellow-400 mb-6"></div>
                    </div>
                    <h4 className="text-white font-display font-black text-3xl mb-4 leading-tight">HỌC TẬP<br />TẤM GƯƠNG</h4>
                    <p className="text-white/80 text-base font-body leading-relaxed mt-auto">
                      Tích cực học tập và làm theo tấm gương đạo đức <br/>Hồ Chí Minh
                    </p>
                    <div className="mt-6 flex items-center gap-2">
                      <div className="w-2 h-2 bg-yellow-400"></div>
                      <div className="w-4 h-2 bg-white"></div>
                      <div className="w-2 h-2 bg-white/50"></div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Right Column - Stack with equal height */}
              <div className="flex flex-col gap-6 md:row-span-2">
                {/* Rèn luyện */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="flex-1"
                >
                  <Card 
                    className="bg-black border-4 border-white/30 p-6 cursor-pointer group hover:border-white transition-all duration-300 h-full"
                    onMouseEnter={() => setHoveredImage("/images/section2/8.jpeg")}
                    onMouseLeave={() => setHoveredImage(null)}
                  >
                    <div className="flex items-start gap-4 h-full">
                      <div className="w-12 h-12 bg-white flex items-center justify-center flex-shrink-0">
                        <Dumbbell className="w-6 h-6 text-black" />
                      </div>
                      <div>
                        <h4 className="text-white font-display font-black text-xl mb-2 leading-tight">RÈN LUYỆN BẢN LĨNH</h4>
                        <p className="text-white/70 text-sm font-body">Rèn luyện bản lĩnh chính trị, không dao động trước <br/>cám dỗ</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>

                {/* Trau dồi */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                  className="flex-1"
                >
                  <Card 
                    className="bg-yellow-400 border-4 border-black p-6 cursor-pointer group hover:bg-yellow-300 transition-all duration-300 h-full"
                    onMouseEnter={() => setHoveredImage("/images/section2/9.jpg")}
                    onMouseLeave={() => setHoveredImage(null)}
                  >
                    <div className="flex items-start gap-4 h-full">
                      <div className="w-12 h-12 bg-black flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="w-6 h-6 text-yellow-400" />
                      </div>
                      <div>
                        <h4 className="text-black font-display font-black text-xl mb-2 leading-tight">TRAU DỒI CHUYÊN MÔN</h4>
                        <p className="text-black/70 text-sm font-body">Trau dồi chuyên môn, ngoại ngữ để hội nhập quốc tế</p>
                      </div>
                    </div>
                  </Card>
                </motion.div>
              </div>
            </div>

            {/* Bottom Section - Stacked Layout */}
            <div className="space-y-6">
              {/* Đấu tranh */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
              >
                <Card 
                  className="bg-white/5 border-l-8 border-red-500 p-6 cursor-pointer group hover:bg-white/10 transition-all duration-300"
                  onMouseEnter={() => setHoveredImage("/images/section1/3.jpg")}
                  onMouseLeave={() => setHoveredImage(null)}
                >
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 bg-red-500 border-4 border-black flex items-center justify-center flex-shrink-0">
                      <CircleAlert className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-display font-black text-2xl mb-1">ĐẤU TRANH PHÊ PHÁN</h4>
                      <p className="text-white/70 font-body">Đấu tranh phê phán cái xấu, cái ác, sự vô cảm</p>
                    </div>
                    <div className="hidden md:block">
                      <div className="w-2 h-20 bg-red-500"></div>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Quote */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6 }}
                className="relative"
              >
                <div className="absolute -left-6 top-0 bottom-0 w-2 bg-yellow-400"></div>
                <Card 
                  className="bg-black border-4 border-white p-8 md:p-12 cursor-pointer group hover:border-yellow-400 transition-all duration-300"
                  onMouseEnter={() => setHoveredImage("/images/section1/1.jpg")}
                  onMouseLeave={() => setHoveredImage(null)}
                >
                  <div className="text-center">
                    <p className="text-white text-3xl md:text-5xl font-display font-black leading-tight mb-6">
                      "MUỐN NÊN SỰ NGHIỆP LỚN,<br />
                      <span className="text-yellow-400">TINH THẦN CÀNG PHẢI CAO”</span>
                    </p>
                    <div className="inline-block bg-white px-6 py-2">
                      <p className="text-black font-mono-custom text-sm font-bold tracking-wider">HỒ CHÍ MINH</p>
                    </div>
                  </div>
                </Card>
              </motion.div>

              {/* Call to Action */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
              >
                <div className="bg-white/10 backdrop-blur-sm border-4 border-white/20 p-8">
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-yellow-400 border-4 border-black flex items-center justify-center text-black font-display font-black text-2xl">
                        !
                      </div>
                    </div>
                    <div>
                      <h5 className="text-yellow-400 font-display font-black text-xl mb-3 tracking-wide">LỜI KÊU GỌI</h5>
                      <p className="text-white/90 text-lg font-body leading-relaxed">
                        Sinh viên Việt Nam quyết tâm rèn đức, luyện tài để đưa đất nước <span className="text-white font-bold"><br/>“sánh vai với các cường quốc năm châu”</span> như Bác hằng mong muốn.
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
