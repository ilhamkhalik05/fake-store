import type { AuthOptions } from 'next-auth';
import { getUserByUsername } from '@/services/user';
import CredentialsProvider from 'next-auth/providers/credentials';

export const authOptions: AuthOptions = {
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
          const authorizedUser = {
            id: user.id.toString(),
            name: user.username,
            email: user.email,
          };

          return authorizedUser;
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: '/auth',
  },
};
