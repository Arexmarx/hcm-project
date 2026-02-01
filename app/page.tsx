import Navbar from "@/components/navbar"
import CustomCursor from "@/components/custom-cursor"
import SmoothScroll from "@/components/smooth-scroll"
import HeroSection from "@/components/hero-section"
import ContextSection from "@/components/context-section"
import TrustedBySection from "@/components/trusted-by-section"
import AboutSection from "@/components/about-section"
import CompaniesSection from "@/components/companies-section"
import PortfolioSection from "@/components/portfolio-section"
import Footer from "@/components/footer"
import ScrollFadeWrapper from "@/components/scroll-fade-wrapper"
import TextMarquee from "@/components/text-marquee"

export default function Home() {
  return (
    <SmoothScroll>
      <CustomCursor />
      <main className="min-h-screen bg-gradient-to-b from-gray-900 via-black to-gray-900">
        <Navbar />

        <ScrollFadeWrapper delay={100}>
          <HeroSection />
        </ScrollFadeWrapper>

        <ScrollFadeWrapper delay={130}>
          <TextMarquee />
        </ScrollFadeWrapper>

        <ScrollFadeWrapper delay={150}>
          <ContextSection />
        </ScrollFadeWrapper>

        <ScrollFadeWrapper delay={200}>
          <AboutSection />
        </ScrollFadeWrapper>

        <ScrollFadeWrapper delay={300}>
          <TrustedBySection />
        </ScrollFadeWrapper>

        <ScrollFadeWrapper delay={350}>
          <CompaniesSection />
        </ScrollFadeWrapper>

        <ScrollFadeWrapper delay={400}>
          <PortfolioSection />
        </ScrollFadeWrapper>

        <ScrollFadeWrapper delay={700}>
          <Footer />
        </ScrollFadeWrapper>
      </main>
    </SmoothScroll>
  )
}
