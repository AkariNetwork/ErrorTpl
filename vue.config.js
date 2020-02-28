module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  pages: {
    maintain: {
      entry: 'src/maintain.js',
      template: 'public/index.html',
      filename: 'maintain.html',
      title: '',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    noprod: {
      entry: 'src/noprod.js',
      template: 'public/index.html',
      filename: 'noprod.html',
      title: '',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    400: {
      entry: 'src/400.js',
      template: 'public/index.html',
      filename: '400.html',
      title: '400',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    403: {
      entry: 'src/403.js',
      template: 'public/index.html',
      filename: '403.html',
      title: '403',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    404: {
        entry: 'src/404.js',
        template: 'public/index.html',
        filename: '404.html',
        title: '404',
        chunks: ['chunk-vendors', 'chunk-common', 'index']
      },
  }
}