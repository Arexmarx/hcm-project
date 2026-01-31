import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"
import { LanguageProvider } from "@/contexts/language-context"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-space-grotesk",
  preload: true,
  fallback: ["system-ui", "arial"],
})

export const metadata: Metadata = {
  title: "Tư tưởng Hồ Chí Minh | Văn hóa & Con người",
  description:
    "Tư tưởng Hồ Chí Minh về văn hóa và con người: nền tảng tinh thần của xã hội, mục tiêu và động lực phát triển bền vững Việt Nam.",
  keywords: [
    "Tư tưởng Hồ Chí Minh",
    "Văn hóa Việt Nam",
    "Xây dựng con người",
    "Đạo đức cách mạng",
    "Bản sắc dân tộc",
    "Nếp sống văn minh",
    "Giáo dục",
  ],
  authors: [{ name: "Dự án giáo dục" }],
  creator: "Dự án giáo dục",
  publisher: "Dự án giáo dục",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "vi_VN",
    url: "",
    siteName: "Tư tưởng Hồ Chí Minh",
    title: "Tư tưởng Hồ Chí Minh | Văn hóa & Con người",
    description:
      "Tư tưởng Hồ Chí Minh về văn hóa và con người: nền tảng tinh thần của xã hội, mục tiêu và động lực phát triển bền vững Việt Nam.",
    images: [
      {
        url: "/images/section1/1.jpg",
        width: 1200,
        height: 630,
        alt: "Tư tưởng Hồ Chí Minh về văn hóa và con người",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Tư tưởng Hồ Chí Minh | Văn hóa & Con người",
    description:
      "Tư tưởng Hồ Chí Minh về văn hóa và con người: nền tảng tinh thần của xã hội, mục tiêu và động lực phát triển bền vững Việt Nam.",
    images: ["/images/section1/1.jpg"],
  },
  alternates: {
    canonical: "",
  },
  generator: "Next.js",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="vi" className={`${spaceGrotesk.variable} antialiased`}>
      <head>
        <link rel="preload" href="/images/section1/1.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/images/section1/2.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/images/background.jpg" as="image" type="image/jpeg" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@graph": [
                {
                  "@type": "WebSite",
                  name: "Tư tưởng Hồ Chí Minh",
                  description:
                    "Tư tưởng Hồ Chí Minh về văn hóa và con người: nền tảng tinh thần của xã hội, mục tiêu và động lực phát triển bền vững Việt Nam.",
                  inLanguage: "vi-VN",
                },
                {
                  "@type": "CreativeWork",
                  name: "Tư tưởng Hồ Chí Minh | Văn hóa & Con người",
                  description:
                    "Tổng quan tư tưởng Hồ Chí Minh về văn hóa, đạo đức và xây dựng con người Việt Nam.",
                  inLanguage: "vi-VN",
                },
              ],
            }),
          }}
        />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
      </head>
      <body className={spaceGrotesk.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  )
}
