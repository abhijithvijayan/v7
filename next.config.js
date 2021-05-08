module.exports = {
  devIndicators: {
    autoPrerender: false,
  },

  future: {
    webpack5: true,
  },

  exportPathMap() {
    return {
      '/': {page: '/'},
      '/buymeacoffee': {page: '/buymeacoffee'},
      '/donate': {page: '/donate'},
      '/github': {page: '/github'},
      '/linkedin': {page: '/linkedin'},
      '/opencollective': {page: '/opencollective'},
      '/patreon': {page: '/patreon'},
      '/paypal': {page: '/paypal'},
      '/twitter': {page: '/twitter'},
      '/writings': {page: '/writings'},
    };
  },
};
