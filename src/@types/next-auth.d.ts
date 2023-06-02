// eslint-disable-next-line no-unused-vars
import NextAuth from 'next-auth'

declare module 'next-auth' {
  export interface User {
    id: string
    name: string
    avatar_url: string
    email?: string | null
  }

  // eslint-disable-next-line no-unused-vars
  interface Session {
    user: User
  }
}
