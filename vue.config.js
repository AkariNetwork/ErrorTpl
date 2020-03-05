module.exports = {
  pages: {
    maintain: {
      entry: 'src/entry/maintain.js',
      template: 'public/index.html',
      filename: 'maintain.html',
      title: '应用维护中',
      chunks: ['chunk-vendors', 'chunk-common', 'maintain']
    },
    noprod: {
      entry: 'src/entry/noprod.js',
      template: 'public/index.html',
      filename: 'noprod.html',
      title: '未找到应用',
      chunks: ['chunk-vendors', 'chunk-common', 'noprod']
    },
    400: {
      entry: 'src/entry/400.js',
      template: 'public/index.html',
      filename: '400.html',
      title: '400|请求错误',
      chunks: ['chunk-vendors', 'chunk-common', '400']
    },
    403: {
      entry: 'src/entry/403.js',
      template: 'public/index.html',
      filename: '403.html',
      title: '403|权限拒绝',
      chunks: ['chunk-vendors', 'chunk-common', '403']
    },
    404: {
        entry: 'src/entry/404.js',
        template: 'public/index.html',
        filename: '404.html',
        title: '404|页面不存在',
        chunks: ['chunk-vendors', 'chunk-common', '404']
      },
  },

  runtimeCompiler: true,
  productionSourceMap: false
}