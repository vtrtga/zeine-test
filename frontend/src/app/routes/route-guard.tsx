'use client';

import { useEffect } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { ROUTE } from './routes-url';

interface Props {
  children: React.ReactNode;
}

const publicRoutes = [ROUTE.HOME as string, ROUTE.LOGIN  as string];

export default function RouteGuard({ children }: Props) {
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');

    if (!publicRoutes.includes(pathname) && !token) {
      router.push('/login');
    }
  }, [pathname, router]);

  return <>{children}</>;
}
