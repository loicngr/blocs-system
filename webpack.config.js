const path = require('path')

module.exports = {
  resolve: {
    extensions: ['.vue', '.js'],
    alias: {
      '@': path.resolve('./src'),
      // Officiel
      src: path.resolve('./src'),
      app: path.resolve('./'),
      components: path.resolve('./src/components'),
      layouts: path.resolve('./src/layouts'),
      pages: path.resolve('./src/pages'),
      assets: path.resolve('./src/assets'),
      boot: path.resolve('./src/boot')
    }
  }
}
