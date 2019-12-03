/* 웹팩 설명
webpack-dev-server
    -> 가상의 bundle.js를 만들어줌
webpack.config.js
    -> webpack을 실행 시 옵션지정
*/

const webpack = require('webpack');
const path = require('path');
const HtmlWebPackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    // 시작점(모든 import 등)
    entry: './index.js',
    // 번들링된 파일명과 경로 지정
    output: {
        //해당경로로 모두 뱉어짐
        path: path.resolve(__dirname, 'dist'),
        // publicPath: '/dist/',   뭐하는놈일까
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.resolve("./dist"),
        index: "disIndex.html",
        port: 9000
    },
    // 번들링 규칙?
    module: {
        rules: [
            {
                // .js로 끝나는 파일들을 모두 babel로 처리
                test: /\.js$/,
                include: path.join(__dirname),
                //node_modules폴더와 dist폴더는 제외
                exclude: /(node_modules)|(dist)/,
                // use: 경우 여러 loader를 지정할 때 [], 하나의 경우 객체 {}
                // loader는 단일로 사용, loader : "dd"
                use: {
                    loader: 'babel-loader',
                    // 최상위 디렉터리에서 .babelrc 파일
                    // 내용 : {"presets": ["@babel/preset-env", "@babel/preset-react"]}
                    options: {
                        presets: ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
                // -> use: ['babel-loader']
            },
            {
                test: /\.html$/,
                use: [
                  {
                    loader: "html-loader",
                    options: { minimize: true }
                  }
                ]
            },
        /* {
                test: /\.css$/,
                loader: 'css-loader',
                query: {
                    modules: true,
                    localIdentName: '[name]__[local]___[hash:base64:5]'
                }
            } */
            {
                test : /\.css$/,
                // 'style-loader' -> style태그로 html파일안에 삽입해줌 
                use: [
                    {
                        loader : MiniCssExtractPlugin.loader 
                    },
                    {
                        loader : 'css-loader',
                        options : { 
                            //turns on the CSS modules mode
                            modules : true,
                            //defines the structure of the generated CSS class should be
                            localIdentName: '[name]__[local]___[hash:base64:5]'
                        } 
                    }
                ]
            },
            {
                test : /\.scss$/,
                use : [
                    {
                        loader : MiniCssExtractPlugin.loader
                    },
                    {
                        loader : 'css-loader',
                        options : { 
                            //turns on the CSS modules mode
                            modules : true,
                            //defines the structure of the generated CSS class should be
                            localIdentName: '[name]__[local]___[hash:base64:5]'
                        } 
                    } , 
                    {
                        loader : 'sass-loader'
                    }
                ]
            }            
        ]
    },
    plugins: [
        // 자동으로 파일들을 html에 바인딩 해줌
        new HtmlWebPackPlugin({
          template: './public/index.html', // public/index.html 파일을 읽는다.
          filename: 'disIndex.html' // output으로 출력할 파일은 index.html 이다.
        }),
        // 저용량 css파일로 뱉어줌
        new MiniCssExtractPlugin({
            filename: 'disStyle.css'
        }),
        // 빌드 할 때 마다 필요없는 파일들 삭제해줌
        new CleanWebpackPlugin()
    ]
};

/* 사용안한 옵션들 

mode : "production"
     최적화되어 빌드되어지는 특징
mode : "development"
    빠르게 빌드
mode : "none"
    아무 기능 없이 웹팩으로 빌드

*/