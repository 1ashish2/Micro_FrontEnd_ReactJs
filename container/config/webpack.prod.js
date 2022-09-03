const {merge} =require('webpack-merge');
const ModuleFederationPlugin=require('webpack/lib/container/ModuleFederationPlugin')
const commonConfig=require('./webpack.common')
const packageJson=require('../package.json');

const domain = process.env.PRODUCTION_DOMAIN;

const prodConfig={
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js',
        publicPath: '/container/latest/',
        // output will be urlpath/container/latest/filename.contenthash.js -->this will provide becoz in s3
        // bucket we created container/latest/our all files after deployment so we need to aceess mail file so 
        // we need that file location path to acces the file and show to url
        // this setup is done when we got error to load page (unexpected token '<')
    },
    plugins:[
        new ModuleFederationPlugin({
            name:'container',
            remotes:{
                marketing:`marketing@${domain}/marketing/remoteEntry.js`
            },
            shared:packageJson.dependencies,
        })
    ]
}

module.exports=merge(commonConfig,prodConfig);