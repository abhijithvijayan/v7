module.exports = {
  devIndicators: {
    autoPrerender: false,
  },

  exportPathMap() {
    return {
      '/': {page: '/'},
      '/donate': {page: '/donate'},
      '/github': {page: '/github'},
      '/writings': {page: '/writings'},
    };
  },
};
