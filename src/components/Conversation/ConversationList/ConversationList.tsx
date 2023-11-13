'use client'

import useConversation from '@/hooks/useConversation'
import { FullConversationType } from '@/types'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import { MdOutlineGroupAdd } from 'react-icons/md'
import clsx from 'clsx'
import styles from './ConversationList.module.scss'
import ConversationBox from '../ConversationBox'

interface ConversationListProps {
    initialData: FullConversationType[]
}

const ConversationList: React.FC<ConversationListProps> = ({ initialData }) => {
    const [items, setItems] = useState(initialData)
    const router = useRouter()
    const { conversationId, isOpen } = useConversation()

    const conversations = items.map((item) => (
        <ConversationBox
            key={item.id}
            data={item}
            selected={conversationId === item.id}
        />
    ))

    return (
        <aside
            className={clsx(
                styles.container,
                isOpen ? styles.hidden : styles.block
            )}
        >
            <div className={styles.box}>
                <div className={styles.infoBox}>
                    <div className={styles.title}>Messages</div>
                    <div className={styles.icon}>
                        <MdOutlineGroupAdd size={20} />
                    </div>
                </div>
                {conversations}
            </div>
        </aside>
    )
}

export default ConversationList
