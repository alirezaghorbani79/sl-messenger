import styles from './AuthSocialButton.module.scss'

import { IconTree, IconType } from 'react-icons'

interface AuthSocialButtonProps {
    icon: IconType
    onClick: () => void
}

const AuthSocialButton: React.FC<AuthSocialButtonProps> = ({
    icon: Icon,
    onClick,
}) => {
    return (
        <button className={styles.btn} type="button" onClick={onClick}>
            <Icon />
        </button>
    )
}

export default AuthSocialButton
