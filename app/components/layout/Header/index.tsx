"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import styles from "./Header.module.css"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.container}>
        <div className={styles.headerContent}>
          <Link href="/" className={styles.logo}>
            HacKit
          </Link>

          {/* Desktop Navigation */}
          <nav className={styles.desktopNav}>
            <ul className={styles.navList}>
              {[
                { name: "概要", href: "#about" },
                { name: "スケジュール", href: "#schedule" },
                { name: "スポンサー", href: "#sponsors" },
                { name: "よくある質問", href: "#faq" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className={styles.navLink}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className={styles.menuButton}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "メニューを閉じる" : "メニューを開く"}
          >
            <div className={`${styles.menuIcon} ${isMenuOpen ? styles.open : ""}`}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className={styles.mobileNav}>
            <ul className={styles.mobileNavList}>
              {[
                { name: "概要", href: "#about" },
                { name: "スケジュール", href: "#schedule" },
                { name: "スポンサー", href: "#sponsors" },
                { name: "よくある質問", href: "#faq" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>
    </header>
  )
}
