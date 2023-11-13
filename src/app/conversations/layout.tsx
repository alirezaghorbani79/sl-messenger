import ConversationList from '@/components/Conversation/ConversationList'
import Sidebar from '@/components/Sidebar/Sidebar'
import getConversations from '@/utils/getConversations'

export default async function ConversationsLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const conversations = await getConversations()

    return (
        <Sidebar>
            <ConversationList initialData={conversations} />
            <div>{children}</div>
        </Sidebar>
    )
}
