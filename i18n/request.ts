import {getRequestConfig} from 'next-intl/server';
 
export default getRequestConfig(async ({locale}) => {
  // Ensure locale is valid
  const validLocale = locale || 'en';
  
  return {
    locale: validLocale,
    messages: (await import(`../lang/${validLocale}.json`)).default
  };
});