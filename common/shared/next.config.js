const { withSentryConfig } = require('@sentry/nextjs');
const withSvgr = require('@newhighsco/next-plugin-svgr');

const { NODE_ENV } = process.env;

const IS_DEVELOPMENT = NODE_ENV === 'development';

/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  eslint: {
    // Отключаем eslint линтер, т.к. eslint запускается в отдельном шаге CI
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Отключаем проверку типов, т.к. check type запускается в отдельном шаге CI
    ignoreBuildErrors: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  transpilePackages: [
    '@astral/ui',
    '@astral/icons',
    '@astral/components',
    '@astral/form',
    '@astral/validations',
    'lodash-es',
    '@common/shared',
    '@common/data',
    '@common/modules',
  ],
  images: {
    // При export static оптимизация не работает
    unoptimized: true,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.(woff|woff2)$/i,
      issuer: { and: [/\.(js|ts)x?$/] },
      type: 'asset/resource',
    });

    return config;
  },
};

const createNextjsConfig = () => {
  const config = withSvgr(nextConfig);

  if (!IS_DEVELOPMENT) {
    return withSentryConfig({
      ...config,
      sentry: {
        hideSourceMaps: true,
        autoInstrumentServerFunctions: true,
      },
    });
  }

  return config;
};

module.exports = { createNextjsConfig };
