import DesktopSidebar from './DesktopSidebar/DesktopSidebar'
import MobileSidebar from './MobileSidebar/MobileSidebar'
import getCurrentUser from '@/utils/getCurrentUser'
import styles from './Sidebar.module.scss'

interface SidebarProps {
    children: React.ReactNode
}

const Sidebar = async ({ children }: SidebarProps) => {
    const currentUser = await getCurrentUser()

    return (
        <div className={styles.container}>
            <DesktopSidebar currentUser={currentUser!} />
            <MobileSidebar />
            <main className={styles.main}>{children}</main>
        </div>
    )
}

export default Sidebar
