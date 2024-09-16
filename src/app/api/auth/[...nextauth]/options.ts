import type { AuthOptions } from 'next-auth';
import { getUserByUsername } from '@/services/user';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET!,
  pages: {
    signIn: '/auth',
  },
  providers: [
    CredentialsProvider({
      credentials: {
        username: {},
        password: {},
      },
      async authorize(credentials) {
        if (!credentials) {
          return null;
        }

        const user = await getUserByUsername(credentials.username);

        if (!user) {
          return null;
        }

        if (credentials.password !== user.password) {
          return null;
        } else {
          return {
            id: user.id,
            name: user.username,
            email: user.email,
          };
        }
      },
    }),
  ],
  callbacks: {
    // Add custom fields to the JWT token
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id as number; // Add user id to the token
        token.name = user.name; // Add user name to the token
        token.email = user.email; // Add user email to the token
      }
      return token;
    },

    // Populate the session with custom fields from the token
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id as number; // Make sure id is typed as number
        session.user.name = token.name; // Pass name from token
        session.user.email = token.email; // Pass email from token
      }

      return session; // Return the session object
    },
  },
};
