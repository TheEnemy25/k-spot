module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'letsenhance.io',
        pathname: '/static/**',
      },
      {
        protocol: 'https',
        hostname: 'img-cdn.pixlr.com',
        pathname: '/**',
      },
    ],
  },
}
