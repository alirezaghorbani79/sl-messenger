'use client'
import styles from './AuthForm.module.scss'

import { useCallback, useState } from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'
import Input from './UI/Input'
import Button from './UI/Button'
import AuthSocialButton from './AuthSocialButton'
import { BsGithub, BsGoogle } from 'react-icons/bs'
import axios from 'axios'
import { toast } from 'react-hot-toast'
import { signIn } from 'next-auth/react'

type Variant = 'LOGIN' | 'REGISTER'

const AuthForm = () => {
    const [variant, setVariant] = useState<Variant>('LOGIN')
    const [isLoading, setIsLoading] = useState(false)

    const toggleVariant = useCallback(() => {
        if (variant === 'LOGIN') setVariant('REGISTER')
        else setVariant('LOGIN')
    }, [variant])

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        },
    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true)

        if (variant === 'REGISTER') {
            axios
                .post('api/register', data)
                .catch(() => toast.error('Something went wrong!'))
                .finally(() => setIsLoading(false))
        }
        if (variant === 'LOGIN') {
            signIn('credentials', {
                ...data,
                redirect: false,
            })
                .then((res) => {
                    if (res?.error) toast.error('Invalid credentials!')
                    if (res?.ok && !res?.error) toast.success('Logged in!')
                })
                .finally(() => setIsLoading(false))
        }
    }

    const socialActions = (action: string) => {
        setIsLoading(true)
    }

    return (
        <div className={styles.container}>
            <div className={styles.formCard}>
                <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                    {variant === 'REGISTER' && (
                        <Input
                            label="Name"
                            id="name"
                            register={register}
                            errors={errors}
                            disabled={isLoading}
                        />
                    )}
                    <Input
                        label="Email"
                        id="email"
                        type="email"
                        register={register}
                        errors={errors}
                        disabled={isLoading}
                    />
                    <Input
                        label="Password"
                        id="password"
                        type="password"
                        register={register}
                        errors={errors}
                        disabled={isLoading}
                    />
                    <Button disabled={isLoading} type="submit" fullWidth>
                        {variant === 'LOGIN' ? 'Sign in' : 'Register'}
                    </Button>

                    <div className={styles.line}></div>
                    <hr />
                    <div className={styles.socialButtons}>
                        <AuthSocialButton
                            icon={BsGithub}
                            onClick={() => socialActions('gitgub')}
                        />
                        <AuthSocialButton
                            icon={BsGoogle}
                            onClick={() => socialActions('google')}
                        />
                    </div>

                    <div className={styles.register}>
                        <div className={styles.registerBtn}>
                            {variant === 'LOGIN'
                                ? 'New to Messenger?'
                                : 'Already have an account?'}
                        </div>
                        <div
                            className={styles.registerBtn}
                            onClick={toggleVariant}
                        >
                            {variant === 'LOGIN'
                                ? 'Create an account'
                                : 'Login'}
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AuthForm
