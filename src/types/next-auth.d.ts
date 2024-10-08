import NextAuth from 'next-auth';

// Add an userId to the Session
declare module 'next-auth' {
  interface Session {
    user: {
      id: number | null;
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  }

  interface User {
    id: number;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: number; 
    role?: string;
  }
}
