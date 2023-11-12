'use client'

import useRoutes from '@/hooks/useRoutes'
import styles from './MobileSidebar.module.scss'
import useConversation from '@/hooks/useConversation'
import MobileItem from './MobileItem/MobileItem'

const MobileSidebar = () => {
    const routes = useRoutes()
    const { isOpen } = useConversation()

    if (isOpen) return null

    const items = routes.map((item) => (
        <MobileItem
            key={item.label}
            href={item.href}
            active={item.active}
            icon={item.icon}
            onClick={item.onClick}
        />
    ))

    return <div className={styles.container}>{items}</div>
}

export default MobileSidebar
