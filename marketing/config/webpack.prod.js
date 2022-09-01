const {merge} =require('webpack-merge');
const HtmlWebpackPlugin=require('html-webpack-plugin')

const commonConfig=require('./webpack.common')

const prodConfig={
    mode:'production',
    devServer:{
        port:8081,
        historyApiFallback:{
            index:'index.html'
        }
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./public/index.html"
        })
    ]
}

module.exports=merge(commonConfig,prodConfig);