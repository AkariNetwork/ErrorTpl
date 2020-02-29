module.exports = {
  pages: {
    maintain: {
      entry: 'src/entry/maintain.js',
      template: 'public/index.html',
      filename: 'maintain.html',
      title: '',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    noprod: {
      entry: 'src/entry/noprod.js',
      template: 'public/index.html',
      filename: 'noprod.html',
      title: '',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    400: {
      entry: 'src/entry/400.js',
      template: 'public/index.html',
      filename: '400.html',
      title: '400',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    403: {
      entry: 'src/entry/403.js',
      template: 'public/index.html',
      filename: '403.html',
      title: '403',
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    },
    404: {
        entry: 'src/entry/404.js',
        template: 'public/index.html',
        filename: '404.html',
        title: '404',
        chunks: ['chunk-vendors', 'chunk-common', 'index']
      },
  },

  runtimeCompiler: true
}