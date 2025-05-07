import Link from "next/link"
import styles from "./Footer.module.css"

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerGrid}>
          <div className={styles.footerInfo}>
            <h3 className={styles.footerTitle}>HacKit-Connect</h3>
            <p className={styles.footerDescription}>
              金沢工業大学の課外活動プロジェクト同士の交流を目的とした学内ハッカソン
            </p>
          </div>

          <div className={styles.footerLinks}>
            <h4 className={styles.footerSubtitle}>リンク</h4>
            <ul className={styles.linkList}>
              {[
                { name: "概要", href: "#about" },
                { name: "スケジュール", href: "#schedule" },
                { name: "スポンサー", href: "#sponsors" },
                { name: "よくある質問", href: "#faq" },
              ].map((item) => (
                <li key={item.name}>
                  <Link href={item.href} className={styles.footerLink}>
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.footerContact}>
            <h4 className={styles.footerSubtitle}>お問い合わせ</h4>
            <p className={styles.contactText}>ご質問やお問い合わせは下記までお願いします。</p>
            <a href="mailto:hackit@example.com" className={styles.contactLink}>
              hackit@example.com
            </a>
          </div>
        </div>

        <div className={styles.copyright}>
          <p>© {new Date().getFullYear()} HacKit-Connect. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
