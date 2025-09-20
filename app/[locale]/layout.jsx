import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import ClientLayout from '@/components/ClientLayout';

export function generateStaticParams() {
  return routing.locales.map((locale) => ({locale}));
}

export default async function LocaleLayout({ children, params }) {
  // Validate that the incoming `locale` parameter is valid
  const { locale } = await params;
  
  if (!routing.locales.includes(locale)) {
    notFound();
  }
  
  return (
    <ClientLayout locale={locale}>
      {children}
    </ClientLayout>
  );
}