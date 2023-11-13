'use client'

import useOtherUser from '@/hooks/useOtherUser'
import { FullConversationType } from '@/types'
import { useSession } from 'next-auth/react'
import { useRouter } from 'next/navigation'

interface ConversationBoxProps {
    data: FullConversationType
    selected?: boolean
}

const ConversationBox: React.FC<ConversationBoxProps> = ({
    data,
    selected,
}) => {
    const session = useSession()
    const otherUser = useOtherUser(data)
    const router = useRouter()

    const handleClick = () => {
        router.push(`/conversations/${data.id}`)
    }

    const lastMessage = () => {
        const messages = data.messages || []

        return messages[messages.length - 1]
    }

    return <div>ConversationBox</div>
}

export default ConversationBox
