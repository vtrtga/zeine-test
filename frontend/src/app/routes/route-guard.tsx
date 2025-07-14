'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { ROUTE } from './routes-url';
import { useAuth } from '@/hooks/useAuth';

interface Props {
  children: React.ReactNode;
}

const publicRoutes = [ROUTE.HOME as string, ROUTE.LOGIN as string];

export default function RouteGuard({ children }: Props) {
  const pathname = usePathname();
  const router = useRouter();
  const { token, loading } = useAuth();

  useEffect(() => {
    if (loading) return;

    if (!publicRoutes.includes(pathname) && !token) {
      router.push(ROUTE.LOGIN);
    }
  }, [pathname, router, token, loading]);

  if (loading) return null;

  return <>{children}</>;
}