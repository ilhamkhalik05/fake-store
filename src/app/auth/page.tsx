'use client';

import { useAuth } from '@/hooks/useAuth';
import Container from '@/components/container';
import AuthForm from '@/components/auth-form';

export default function AuthPage() {
  useAuth();
  return (
    <>
      <Container className="w-full md:w-2/5 m-auto px-6 py-12">
        <AuthForm />
      </Container>
    </>
  );
}
