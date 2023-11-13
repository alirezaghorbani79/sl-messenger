'use client'

import { User } from '@prisma/client'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import styles from './UserBox.module.scss'
import Avatar from '../Avatar'

interface UserBoxProps {
    data: User
}

const UserBox: React.FC<UserBoxProps> = ({ data }) => {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)

    const handleClick = () => {
        setIsLoading(true)

        axios
            .post('/api/conversations', {
                userId: data.id,
            })
            .then((res) => {
                router.push(`/conversations/${res.data.id}`)
            })
            .finally(() => {
                setIsLoading(false)
            })
    }

    return (
        <div className={styles.box} onClick={handleClick}>
            <Avatar user={data} />
            <div className={styles.infoBox}>
                <div className={styles.textBox}>
                    <div className={styles.name}>
                        <p>{data.name}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserBox
