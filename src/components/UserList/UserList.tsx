'use client'

import { User } from '@prisma/client'
import styles from './UserList.module.scss'
import UserBox from '../UserBox'

interface UserListProps {
    items: User[]
}

const UserList: React.FC<UserListProps> = ({ items }) => {
    const users = items.map((item) => <UserBox key={item.id} data={item} />)

    return (
        <aside className={styles.container}>
            <div className={styles.box}>
                <div className={styles.body}>
                    <div className={styles.title}>People</div>
                </div>
                {users}
            </div>
        </aside>
    )
}

export default UserList
