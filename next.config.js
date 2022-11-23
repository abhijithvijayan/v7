
/**
 * @type {import('next').NextConfig}
 * */
const nextConfig = {
  distDir: '.next',

  poweredByHeader: false,

  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },

  typescript: {
    tsconfigPath: './tsconfig.json',
    ignoreBuildErrors: false,
  },

  // The webpack function is executed twice, once for the server and once for the client.
  // This allows you to distinguish between client and server configuration using the isServer property.
  webpack(
      config,
      {buildId, dev, isServer, defaultLoaders, nextRuntime, webpack}
  ) {
    // Important: return the modified config

    return config;
  },

  exportPathMap() {
    return {
      '/': {page: '/'},
      '/donate': {page: '/donate'},
    };
  },
};

module.exports = nextConfig;
