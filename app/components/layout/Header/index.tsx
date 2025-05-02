import styles from "../Header/Header.module.css"
import Image from 'next/image'

export default function Header() {
    return(
        <nav className={styles.Header}>
            <ul>
                <Image 
                    className={styles.hackit}
                    src="/images/hackit.png" 
                    alt="Hackitのロゴ画像" 
                    width={150}
                    height={100}
                />
            </ul>
        </nav>
    )
}