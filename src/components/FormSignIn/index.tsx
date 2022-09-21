import Link from 'next/link'
import { Email, Lock, ErrorOutline } from '@styled-icons/material-outlined'
import { signIn } from 'next-auth/react'

import Button from 'components/Button'
import TextField from 'components/TextField'
import { FormWrapper, FormLink, FormError } from 'components/Form'

import * as S from './styles'
import { useState } from 'react'
import { useRouter } from 'next/router'
import Loading from 'components/Loading'
import { FieldErrors, signInValidate } from 'utils/validations'

const FormSignIn = () => {
  const [formError, setFormError] = useState('')
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [values, setValues] = useState({
    email: '',
    password: ''
  })
  const [loading, setLoading] = useState(false)
  const { push } = useRouter()

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setFormError('')
    setLoading(true)

    const errors = signInValidate(values)

    if (Object.keys(errors).length) {
      setFieldError(errors)
      setLoading(false)
      return
    }

    setFieldError({})

    const result = await signIn('credentials', {
      ...values,
      redirect: false,
      callbackUrl: '/'
    })

    if (result?.url) {
      return push(result.url)
    }

    setLoading(false)
    setFormError('username or password is invalid')
  }

  const handleInput = (field: string, value: string) => {
    setFieldError({})
    setValues((prevState) => ({
      ...prevState,
      [field]: value
    }))
  }

  return (
    <FormWrapper>
      {!!formError && (
        <FormError>
          <ErrorOutline />
          {formError}
        </FormError>
      )}
      <form onSubmit={handleSubmit}>
        <TextField
          onInputChange={(value) => handleInput('email', value)}
          name="email"
          placeholder="Email"
          type="email"
          icon={<Email />}
          error={fieldError?.email}
        />
        <TextField
          onInputChange={(value) => handleInput('password', value)}
          name="password"
          placeholder="Password"
          type="password"
          icon={<Lock />}
          error={fieldError?.password}
        />
        <S.ForgotPassword href="#">Forgot your password?</S.ForgotPassword>

        {loading ? (
          <Loading color="black" />
        ) : (
          <Button type="submit" size="large" fullWidth>
            Sign in now
          </Button>
        )}

        <FormLink>
          Don’t have an account?{' '}
          <Link href="/sign-up">
            <a>Sign up</a>
          </Link>
        </FormLink>
      </form>
    </FormWrapper>
  )
}

export default FormSignIn
