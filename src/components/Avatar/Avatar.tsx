'use client'

import { User } from '@prisma/client'
import styles from './Avatar.module.scss'
import Image from 'next/image'

interface AvatarProps {
    user?: User
}

const Avatar: React.FC<AvatarProps> = ({ user }) => {
    return (
        <div className={styles.body}>
            <div className={styles.image}>
                <Image
                    src={user?.image || '/images/placeholder.jpg'}
                    alt="avatar"
                    fill
                />
            </div>
            <span className={styles.onlineCircle} />
        </div>
    )
}

export default Avatar
