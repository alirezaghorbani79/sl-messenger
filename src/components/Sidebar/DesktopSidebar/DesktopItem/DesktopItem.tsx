'use client'

import clsx from 'clsx'
import Link from 'next/link'
import styles from './DesktopItem.module.scss'

interface DesktopItemProps {
    label: string
    icon: any
    href: string
    onClick?: () => void
    active?: boolean
}

const DesktopItem: React.FC<DesktopItemProps> = ({
    label,
    icon: Icon,
    href,
    onClick,
    active,
}) => {
    const handleClick = () => {
        if (onClick) return onClick()
    }

    return (
        <li onClick={handleClick} className={styles.item}>
            <Link
                href={href}
                className={clsx(styles.link, active && styles.active)}
            >
                <Icon className={styles.icon} />
                <span className={styles.span}>{label}</span>
            </Link>
        </li>
    )
}

export default DesktopItem
