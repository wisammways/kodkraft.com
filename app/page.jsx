'use client';
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function RootPage() {
  const router = useRouter();
  
  useEffect(() => {
    // Redirect to English version
    router.replace('/en');
  }, [router]);
  
  return (
    <div>
      <p>Redirecting...</p>
    </div>
  );
}