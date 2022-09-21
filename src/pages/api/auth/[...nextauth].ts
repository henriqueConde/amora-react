import NextAuth from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'credentials',
      credentials: {},
      authorize: async ({ email, password }) => {
        // database look up
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/local`,
          {
            method: 'POST',
            body: new URLSearchParams({ identifier: email, password })
          }
        )

        const data = await response.json()

        console.log('USERRR', data.user)

        if (data.user) {
          return { ...data.user, name: data.user.username, jwt: data.jwt }
        } else {
          return null
        }
      }
    })
  ],
  callbacks: {
    jwt: ({ token, user }) => {
      // first time jwt callback is run, user object is available
      if (user) {
        token.id = user.id
        token.email = user.email
        token.name = user.name
        token.jwt = user.jwt
      }

      return Promise.resolve(token)
    },
    session: ({ session, token }) => {
      if (token) {
        session.id = token.id
      }

      return session
    }
  },
  pages: {
    signIn: '/sign-in'
  }
})
