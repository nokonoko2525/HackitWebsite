import React from "react";
import styles from "./page.module.css";
import { Rampart_One } from "next/font/google";
import Image from 'next/image'

const RampartOneFont = Rampart_One({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div>
      {/* タイトル */}
      <div className={RampartOneFont.className}>
        <h1 className={styles.title}>出会いが未来を変える</h1>
        <h1 className={styles.title}>HacKit-Connect</h1>
      </div>

      {/* Hackitについての説明文 */}
      <div className={styles.main_explain}>
        <h2 className={styles.content_text}>
          Hackit-connect
        </h2>
        <p className={styles.summary_text}>
        「KIT Developers Hub」が企画・運営する学内ハッカソンです
        </p>
        <p className={styles.sub_explain}>
          ここにHackitの説明記入
        </p>
      </div>

      {/* Hackit全体の流れ */}
      <div className={styles.main_explain}>
        <h2 className={styles.content_text}>
          Hackit 全体の流れ
        </h2>
      </div>

      {/* スポンサーの紹介 */}
      <div className={styles.main_explain}>
        <h2 className={styles.content_text}>
          スポンサー
        </h2>
        <p className={styles.sub_explain}>
          Hackitは多くのスポンサー様のご支援により運営されています。
          ここの文入れるかどうかは相談
        </p>
        <p className={styles.logotext}>
            premium
        </p>
        <div className={styles.sponsor}>
          
        </div>
        <p className={styles.logotext}>
            standard
        </p>
        <div className={styles.sponsor}>
          
        </div>
      </div>

      {/* Q＆A */}
      <div className={styles.main}>
        <h2 className={styles.content_text}>
          Q&A
        </h2>
      </div>

    </div>
  );
}
