import styles from "../Footer/Footer.module.css"
import Image from 'next/image'

export default function Footer() {
    return(
        <footer className={styles.footer}>
            <ul>
                <Image 
                    className={styles.hackit}
                    src="/images/hackit.png" 
                    alt="Hackitのロゴ画像" 
                    width={150}
                    height={30}
                />
            </ul>
        </footer>
    )
}