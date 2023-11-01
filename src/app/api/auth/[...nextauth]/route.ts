import NextAuth, { NextAuthOptions } from 'next-auth'
import CredentialsProvider from 'next-auth/providers/credentials'

const API_URL = process.env.NEXT_PUBLIC_API_URL
const LOGIN_URI = process.env.NEXT_PUBLIC_LOGIN_URI

const nextAuthOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'email',
          type: 'email',
          placeholder: 'email@exemplo.com'
        },
        password: {
          label: 'password',
          type: 'password',
          placeholder: 'Digite sua senha'
        }
      },

      async authorize(credentials) {
        const res = await fetch(`${API_URL}/auth`, {
          method: 'POST',
          body: JSON.stringify({
            email: credentials?.email,
            password: credentials?.password
          }),
          headers: { 'Content-Type': 'application/json' }
        })

        const user = await res.json()
        console.log(user)

        if (res.ok && user) {
          return user
        }

        return null
      }
    })
  ],
  pages: {
    signIn: LOGIN_URI
  },
  callbacks: {
    async jwt({ token, user }) {
      user && (token.user = user)
      return token
    },
    async session({ session, token }) {
      session = token.user as any
      return session
    }
  }
}

const handler = NextAuth(nextAuthOptions)

export { handler as GET, handler as POST, nextAuthOptions }
