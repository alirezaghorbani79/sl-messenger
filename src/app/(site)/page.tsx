import Image from 'next/image'
import styles from './page.module.scss'
import AuthForm from '../components/AuthForm'

export default function Home() {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <Image
                    src="/images/sl_logo.png"
                    alt="logo"
                    width={48}
                    height={50}
                />
                <h2>Sign in to your account</h2>
            </div>
            <AuthForm />
        </div>
    )
}
