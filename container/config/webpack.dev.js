const {merge} =require('webpack-merge');
const HtmlWebpackPlugin=require('html-webpack-plugin')
const ModuleFederationPlugin=require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig=require('./webpack.common')
const packageJson=require('../package.json');

const devConfig={
    mode:'development',
    devServer:{
        port:8080,
        historyApiFallback:{
            index:'index.html'
        }
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:"./public/index.html"
        }),
        new ModuleFederationPlugin({
            name:'container',
            remotes:{
                marketing:'marketing@http://localhost:8081/remoteEntry.js'
            },
            // shared:['react','react-dom']
            shared:packageJson.dependencies,// to maganage dynamically with packagejson dependencies
            // we use this only we know version are same for all
        })
    ]
}

module.exports=merge(commonConfig,devConfig);