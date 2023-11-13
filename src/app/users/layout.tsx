import Sidebar from '@/components/Sidebar/Sidebar'
import getUsers from '@/utils/getUsers'
import styles from './style.module.scss'
import UserList from '@/components/UserList'

export default async function UsersLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const users = await getUsers()

    return (
        <Sidebar>
            <div className={styles.userListBox}>
                <UserList items={users} />
                {children}
            </div>
        </Sidebar>
    )
}
