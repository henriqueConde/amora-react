import Link from 'next/link'
import {
  AccountCircle,
  Email,
  Lock,
  ErrorOutline
} from '@styled-icons/material-outlined'

import Button from 'components/Button'
import TextField from 'components/TextField'
import { signIn } from 'next-auth/react'

import { FormWrapper, FormLink, FormError } from 'components/Form'
import { useState } from 'react'
import { UsersPermissionsRegisterInput } from 'graphql/generated/globalTypes'
import { useMutation } from '@apollo/client'
import { MUTATION_REGISTER } from 'graphql/mutations/register'
import Loading from 'components/Loading'
import { FieldErrors, signUpValidate } from 'utils/validations'

const FormSignUp = () => {
  const [formError, setFormError] = useState<string | undefined>('')
  const [fieldError, setFieldError] = useState<FieldErrors>({})
  const [values, setValues] = useState<UsersPermissionsRegisterInput>({
    username: '',
    email: '',
    password: ''
  })

  const [createUser, { error, loading }] = useMutation(MUTATION_REGISTER, {
    onCompleted: () => {
      !error &&
        signIn('credentials', {
          email: values.email,
          password: values.password,
          callbackUrl: '/'
        })
    },
    onError: () => {
      setFormError(error?.message)
    }
  })

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault()
    setFieldError({})
    setFormError('')

    const error = signUpValidate(values)

    if (Object.keys(error).length > 0) {
      setFieldError(error)
      return
    }

    createUser({
      variables: {
        input: {
          username: values.username,
          email: values.email,
          password: values.password
        }
      }
    })
  }

  const handleInput = (field: string, value: string) => {
    setFieldError({})
    setFormError('')
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
          onInputChange={(value) => handleInput('username', value)}
          name="username"
          placeholder="Username"
          type="text"
          icon={<AccountCircle />}
          error={fieldError?.username}
        />
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
        <TextField
          onInputChange={(value) => handleInput('confirm_password', value)}
          name="confirm-password"
          placeholder="Confirm password"
          type="password"
          icon={<Lock />}
          error={fieldError?.confirm_password}
        />

        {loading ? (
          <Loading color="black" />
        ) : (
          <Button type="submit" size="large" fullWidth>
            Sign up now
          </Button>
        )}

        <FormLink>
          Already have an account?{' '}
          <Link href="/sign-in">
            <a>Sign in</a>
          </Link>
        </FormLink>
      </form>
    </FormWrapper>
  )
}

export default FormSignUp
