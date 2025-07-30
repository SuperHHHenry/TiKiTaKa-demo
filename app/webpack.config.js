const path = require('path')
module.exports = {
  resolve: {
    extensions: ['.js', '.jsx', '.vue', '.less', '.css'],
    alias: (() => {
      return {
        '@widgets-self': path.resolve(__dirname, './pages/widgets'),
      }
    })()
  },
}