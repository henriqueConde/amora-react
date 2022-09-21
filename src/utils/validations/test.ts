import { signInValidate, signUpValidate } from '.'

describe('validations', () => {
  describe('signUpValidate', () => {
    it('should validate empty fields', () => {
      const values = {
        email: '',
        password: '',
        username: '',
        confirm_password: ''
      }

      expect(signUpValidate(values)).toMatchInlineSnapshot(`
        Object {
          "email": "\\"email\\" is not allowed to be empty",
          "password": "\\"password\\" is not allowed to be empty",
          "username": "\\"username\\" is not allowed to be empty",
        }
      `)
    })

    it('should return short username error', () => {
      const values = {
        email: '',
        password: '',
        username: 'joe',
        confirm_password: ''
      }

      expect(signUpValidate(values)).toMatchInlineSnapshot(`
        Object {
          "email": "\\"email\\" is not allowed to be empty",
          "password": "\\"password\\" is not allowed to be empty",
          "username": "\\"username\\" length must be at least 5 characters long",
        }
      `)
    })

    it('should return invalid email error', () => {
      const values = {
        email: 'not valid email',
        password: '123456',
        username: 'jonathan harker',
        confirm_password: '123456'
      }

      expect(signUpValidate(values)).toMatchInlineSnapshot(`
        Object {
          "email": "\\"email\\" must be a valid email",
        }
      `)
    })

    it('should return error if confirm password does not match', () => {
      const values = {
        email: 'dracula@mina.com',
        password: '123456',
        username: 'jonathan harker',
        confirm_password: '123457'
      }

      expect(signUpValidate(values)).toMatchInlineSnapshot(`
        Object {
          "confirm_password": "confirm password doesn't match password",
        }
      `)
    })

    it('should return empty object if there are no errors', () => {
      const values = {
        email: 'dracula@mina.com',
        password: '123456',
        username: 'jonathan harker',
        confirm_password: '123456'
      }

      expect(signUpValidate(values)).toMatchInlineSnapshot(`Object {}`)
    })
  })

  describe('signInValidate()', () => {
    it('should validate empty fields', () => {
      const values = { email: '', password: '' }

      expect(signInValidate(values)).toMatchObject({
        email: '"email" is not allowed to be empty',
        password: '"password" is not allowed to be empty'
      })
    })

    it('should return invalid email error', () => {
      const values = { email: 'invalid email', password: '123' }
      expect(signInValidate(values)).toMatchObject({
        email: '"email" must be a valid email'
      })
    })
  })
})
