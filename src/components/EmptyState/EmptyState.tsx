import styles from './EmptyState.module.scss'

const EmptyState = () => {
    return (
        <div className={styles.body}>
            <div className={styles.text}>
                <h3 className={styles.heading}>
                    Select a chat or start a new conversation
                </h3>
            </div>
        </div>
    )
}

export default EmptyState
