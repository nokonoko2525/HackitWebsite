import type React from "react"
import type { Metadata } from "next"
import "./globals.css"
import Footer from "./components/layout/Footer"
import Header from "./components/layout/Header"

export const metadata: Metadata = {
  title: "HacKit-Connect | 金沢工業大学ハッカソン",
  description: "金沢工業大学の課外活動プロジェクト同士の交流を目的とした学内ハッカソン「HacKit-Connect」の公式サイト",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body>
        <Header />
        {children}
        {/* <div style={{ 
            fontSize: "60px", 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center", 
            height: "100vh", 
            textAlign: "center"
          }}>
            5 / 17 公開予定です
          </div> */}
        <Footer />
      </body>
    </html>
  )
}
