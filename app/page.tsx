import styles from "./page.module.css"
import { Bungee_Shade, Rampart_One } from "next/font/google"

const BungeeShadeFont = Bungee_Shade({
  weight: "400",
  subsets: ["latin"],
})

const RampartOneFont = Rampart_One({
  weight: "400",
  subsets: ["latin"],
})

export default function Home() {
  return (
    <div className={styles.container}>
      {/* ヒーローセクション */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <div className={BungeeShadeFont.className}>
            <h1 className={styles.title}>HacKit</h1>
            <h2 className={styles.subtitle}>-Connect-</h2>
          </div>
          <p className={styles.heroText}>金沢工業大学の課外活動プロジェクト同士の交流を目的とした学内ハッカソン</p>
          <div className={styles.buttonGroup}>
            <a href="#schedule" className={styles.primaryButton}>
              スケジュール
            </a>
            <a href="#sponsors" className={styles.secondaryButton}>
              スポンサー
            </a>
          </div>
        </div>
        <div className={styles.scrollDown}>
          <a href="#about">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
        </div>
      </section>

      {/* イベント概要セクション */}
      <section id="about" className={styles.section}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>イベント概要</h2>

          <div className={styles.aboutGrid}>
            <div className={styles.aboutCard}>
              <h3 className={styles.cardTitle}>💭 Hackitとは？</h3>
              <p className={styles.cardText}>
                金沢工業大学の<strong>課外活動プロジェクト</strong>同士の交流を目的に発足した「KIT Developers
                Hub」が企画・運営する<strong>学内ハッカソン</strong>です。
              </p>
              <p className={styles.cardText}>
                本コミュニティでは、10以上の情報系プロジェクトが熱量高く交流しています。
              </p>
            </div>

            <div className={styles.aboutCard}>
              <h3 className={styles.cardTitle}>⛳ 目的</h3>
              <ul className={styles.cardList}>
                <li>課外活動団体を超えた繋がりを創出する</li>
                <li>1年生の段階から、エンジニアの方や他の団体の方と繋がることで、新たな視点や知識を持ってもらうこと</li>
                <li>1年生のスキル向上を中心に、学年を超えたつながりを作ることで、学生の活動の幅を広める</li>
                <li>現場でエンジニアの方との交流を深める</li>
              </ul>
            </div>
          </div>

          <div className={styles.infoGrid}>
            <div className={styles.infoCard}>
              <h3 className={styles.cardTitle}>👪 参加人数</h3>
              <p className={styles.infoText}>24~40人（3~5人×8チーム）</p>
            </div>

            <div className={styles.infoCard}>
              <h3 className={styles.cardTitle}>🏆 賞金</h3>
              <p className={styles.prizeText}>
                最大 <span className={styles.highlight}>5万円</span>
              </p>
              <div className={styles.prizeDetails}>
                <p>• 最優秀賞</p>
                <p>• スポンサー企業賞</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* スケジュールセクション */}
      <section id="schedule" className={`${styles.section} ${styles.altSection}`}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>タイムスケジュール</h2>

          <div className={styles.kickoff}>
            <div className={styles.kickoffBadge}>キックオフ：2025年7月26日</div>
            <p className={styles.kickoffText}>事前勉強会</p>
          </div>

          <div className={styles.scheduleContainer}>
            {/* Day 1 */}
            <div className={styles.scheduleCard}>
              <div className={`${styles.scheduleHeader} ${styles.day1}`}>
                <h3 className={styles.scheduleTitle}>1日目：2025年8月2日(土)</h3>
              </div>
              <div className={styles.scheduleContent}>
                <table className={styles.scheduleTable}>
                  <tbody>
                    {[
                      { time: "TBA", content: "出席確認" },
                      { time: "", content: "メンター紹介" },
                      { time: "", content: "ルール確認" },
                      { time: "", content: "避難経路確認" },
                      { time: "", content: "アイデアソン" },
                      { time: "", content: "開発" },
                    ].map((item, index) => (
                      <tr key={index} className={styles.scheduleRow}>
                        <td className={styles.scheduleTime}>{item.time}</td>
                        <td className={styles.scheduleItem}>{item.content}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Day 2 */}
            <div className={styles.scheduleCard}>
              <div className={`${styles.scheduleHeader} ${styles.day2}`}>
                <h3 className={styles.scheduleTitle}>2日目：2025年8月3日(日)</h3>
              </div>
              <div className={styles.scheduleContent}>
                <table className={styles.scheduleTable}>
                  <tbody>
                    {[
                      { time: "TBA", content: "出席確認" },
                      { time: "", content: "開発" },
                      { time: "", content: "中間発表" },
                    ].map((item, index) => (
                      <tr key={index} className={styles.scheduleRow}>
                        <td className={styles.scheduleTime}>{item.time}</td>
                        <td className={styles.scheduleItem}>{item.content}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Day 3 */}
            <div className={styles.scheduleCard}>
              <div className={`${styles.scheduleHeader} ${styles.day3}`}>
                <h3 className={styles.scheduleTitle}>3日目：2025年8月4日(月)</h3>
              </div>
              <div className={styles.scheduleContent}>
                <table className={styles.scheduleTable}>
                  <tbody>
                    {[
                      { time: "TBA", content: "出席確認" },
                      { time: "", content: "開発" },
                      { time: "", content: "資料作り" },
                      { time: "", content: "発表" },
                      { time: "", content: "企業紹介" },
                      { time: "", content: "審査" },
                      { time: "", content: "表彰式・閉会式" },
                      { time: "", content: "記念撮影" },
                      { time: "", content: "アンケート" },
                      { time: "", content: "懇親会" },
                    ].map((item, index) => (
                      <tr key={index} className={styles.scheduleRow}>
                        <td className={styles.scheduleTime}>{item.time}</td>
                        <td className={styles.scheduleItem}>{item.content}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* スポンサーセクション */}
      <section id="sponsors" className={styles.section}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>スポンサー</h2>

          <p className={styles.sponsorIntro}>
            Hackit-Connectは多くのスポンサー様のご支援により運営されています。 皆様のご協力に心より感謝申し上げます。
          </p>

          {/* Premium Sponsors */}
          <div className={styles.sponsorSection}>
            <h3 className={`${styles.sponsorTier} ${styles.premiumTier}`}>プレミアムスポンサー</h3>
            <div className={styles.premiumSponsors}>
              {[1, 2, 3].map((i) => (
                <div key={i} className={styles.premiumSponsorLogo}>
                  <div className={styles.logoPlaceholder}>
                    <span>ロゴ {i}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Standard Sponsors */}
          <div className={styles.sponsorSection}>
            <h3 className={`${styles.sponsorTier} ${styles.standardTier}`}>スタンダードスポンサー</h3>
            <div className={styles.standardSponsors}>
              {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
                <div key={i} className={styles.standardSponsorLogo}>
                  <div className={styles.logoPlaceholder}>
                    <span>ロゴ {i}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Light Sponsors */}
          <div className={styles.sponsorSection}>
            <h3 className={`${styles.sponsorTier} ${styles.lightTier}`}>ライトスポンサー</h3>
            <div className={styles.lightSponsors}>
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((i) => (
                <div key={i} className={styles.lightSponsorLogo}>
                  <div className={styles.logoPlaceholder}>
                    <span>ロゴ {i}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ セクション */}
      <section id="faq" className={`${styles.section} ${styles.altSection}`}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>よくある質問</h2>

          <div className={styles.faqContainer}>
            {[
              {
                q: "参加資格はありますか？",
                a: "金沢工業大学の学生であれば、学年や学科を問わず参加可能です。プログラミング初心者も歓迎します！",
              },
              {
                q: "参加費はかかりますか？",
                a: "参加費は無料です。食事や飲み物も提供されます。",
              },
              {
                q: "何を持っていけばいいですか？",
                a: "ノートパソコン、充電器、学生証をお持ちください。必要に応じて、開発に使用したい機材があればご持参ください。",
              },
              {
                q: "プログラミング経験がなくても参加できますか？",
                a: "はい、初心者も歓迎します。チーム内でサポートし合いながら進めることができます。また、事前勉強会も予定していますので、ぜひご参加ください。",
              },
              {
                q: "チームはどのように決まりますか？",
                a: "チームは当日に決定します。多様なスキルセットを持つメンバーでチームを構成できるよう配慮します。",
              },
            ].map((item, index) => (
              <div key={index} className={styles.faqCard}>
                <h3 className={styles.faqQuestion}>{item.q}</h3>
                <p className={styles.faqAnswer}>{item.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA セクション */}
      <section className={styles.ctaSection}>
        <div className={styles.ctaContent}>
          <h2 className={`${BungeeShadeFont.className} ${styles.ctaTitle}`}>HacKit-Connect</h2>
          <p className={styles.ctaText}>新たな繋がりと挑戦の場へ。あなたの参加をお待ちしています！</p>
          <a href="#" className={styles.ctaButton}>
            参加申し込み
          </a>
        </div>
      </section>
    </div>
  )
}
