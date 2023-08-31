'use client'

import { FieldErrors, FieldValues, UseFormRegister } from 'react-hook-form'
import styles from './Input.module.scss'

interface InputProps {
    label: string
    id: string
    register: UseFormRegister<FieldValues>
    errors: FieldErrors
    type?: string
    required?: boolean
    disabled?: boolean
}

const Input: React.FC<InputProps> = ({
    label,
    id,
    register,
    errors,
    type,
    required,
    disabled,
}) => {
    return (
        <div className={styles.container}>
            <label htmlFor={id}>{label}</label>
            <div>
                <input
                    className={styles.input}
                    type={type}
                    id={id}
                    autoComplete={id}
                    disabled={disabled}
                    {...register(id, { required })}
                />
            </div>
        </div>
    )
}

export default Input
