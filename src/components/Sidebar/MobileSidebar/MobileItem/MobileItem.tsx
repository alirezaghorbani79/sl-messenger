import clsx from 'clsx'
import Link from 'next/link'
import styles from './MobileItem.module.scss'

interface MobileItemProps {
    href: string
    icon: any
    active?: boolean
    onClick?: () => void
}

const MobileItem: React.FC<MobileItemProps> = ({
    href,
    icon: Icon,
    active,
    onClick,
}) => {
    const handleClick = () => {
        if (onClick) {
            return onClick()
        }
    }

    return (
        <Link
            href={href}
            onClick={handleClick}
            className={clsx(styles.link, active && styles.active)}
        >
            <Icon className={styles.icon} />
        </Link>
    )
}

export default MobileItem
