'use client'

import useRoutes from '@/hooks/useRoutes'
import styles from './DesktopSidebar.module.scss'
import { useState } from 'react'
import DesktopItem from './DesktopItem/DesktopItem'

const DesktopSidebar = () => {
    const routes = useRoutes()
    const [isOpen, setIsOpen] = useState(false)

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
        </div>
    )
}

export default DesktopSidebar
