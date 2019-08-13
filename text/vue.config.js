module.exports ={
    chainWebpack: config => {
        const oneOfsMap = config.module.rule('scss').oneOfs.store
        oneOfsMap.forEach(item => {
          item
            .use(['style-loader',
            'css-loader',
            'sass-loader'])
            .loader('sass-resources-loader')
            .options({
              resources: ['./src/static/scss/_minix.scss', './src/static/scss/common.scss']
            })
            .end()
        })
    }, 

    devServer: {
      proxy: {
        '/api': {
          target: 'http://192.168.111.110:7001', 
          changeOrigin: true,
          pathRewrite:{
            "^/api":""
          }  
        }
      }
     }
}