import clsx from 'clsx'
import styles from './Button.module.scss'

interface ButtonProps {
    type?: 'button' | 'submit' | 'reset' | undefined
    children: React.ReactNode
    onClick?: () => void
    fullWidth?: boolean
    secondary?: boolean
    danger?: boolean
    disabled?: boolean
}

const Button: React.FC<ButtonProps> = ({
    type,
    children,
    onClick,
    fullWidth,
    secondary,
    danger,
    disabled,
}) => {
    console.log(disabled)

    return (
        <button
            className={clsx(
                styles.btn,
                fullWidth && styles.full,
                disabled && styles.disabled,
                secondary && styles.secondary,
                danger && styles.danger
            )}
        >
            {children}
        </button>
    )
}

export default Button
