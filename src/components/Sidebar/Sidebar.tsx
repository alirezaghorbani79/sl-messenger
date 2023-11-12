import DesktopSidebar from './DesktopSidebar/DesktopSidebar'
import MobileSidebar from './MobileSidebar/MobileSidebar'
import styles from './Sidebar.module.scss'

interface SidebarProps {
    children: React.ReactNode
}

const Sidebar = async ({ children }: SidebarProps) => {
    return (
        <div className={styles.container}>
            <DesktopSidebar />
            <MobileSidebar />
            {children}
        </div>
    )
}

export default Sidebar
