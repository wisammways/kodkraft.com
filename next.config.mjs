import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
};
const withNextIntl = createNextIntlPlugin();

export default withNextIntl(nextConfig);