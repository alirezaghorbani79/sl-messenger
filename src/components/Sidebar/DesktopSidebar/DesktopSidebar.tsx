'use client'

import useRoutes from '@/hooks/useRoutes'
import styles from './DesktopSidebar.module.scss'
import { useState } from 'react'
import DesktopItem from './DesktopItem/DesktopItem'
import { User } from '@prisma/client'
import Avatar from '@/components/Avatar'

interface DesktopSidebarProps {
    currentUser: User
}

const DesktopSidebar: React.FC<DesktopSidebarProps> = ({ currentUser }) => {
    const routes = useRoutes()
    const [isOpen, setIsOpen] = useState(false)

    console.log(currentUser)

    const items = routes.map((item) => (
        <DesktopItem
            key={item.label}
            href={item.href}
            label={item.label}
            icon={item.icon}
            active={item.active}
            onClick={item.onClick}
        />
    ))

    return (
        <div className={styles.container}>
            <nav className={styles.navigation}>
                <ul role="list" className={styles.list}>
                    {items}
                </ul>
            </nav>
            <nav className={styles.userNav} onClick={() => setIsOpen(true)}>
                <div className={styles.userAvatar}>
                    <Avatar user={currentUser} />
                </div>
            </nav>
        </div>
    )
}

export default DesktopSidebar
