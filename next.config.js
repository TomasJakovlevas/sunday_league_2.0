/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [{ loader: '@svgr/webpack', options: { icon: true } }],
    });

    return config;
  },

  async redirects() {
    return [
      {
        source: '/my-games',
        destination: '/my-games/games',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
