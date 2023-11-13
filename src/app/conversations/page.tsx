'use client'

import EmptyState from '@/components/EmptyState'
import useConversation from '@/hooks/useConversation'
import clsx from 'clsx'
import styles from './style.module.scss'

const page = () => {
    const { isOpen } = useConversation()

    return (
        <div
            className={clsx(
                styles.container,
                !isOpen ? styles.block : styles.hidden
            )}
        >
            <EmptyState />
        </div>
    )
}

export default page
