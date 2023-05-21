const MiniCssExtractPlugin = require("mini-css-extract-plugin");
    
module.exports = {
    
    performance: {
        maxEntrypointSize: 500000,
        maxAssetSize: 500000,
    },

   
    mode: "production",

    // メインとなるJavaScriptファイル（エントリーポイント）
    entry: `./src/index.ts`,


    output: {
      //  出力ファイルのディレクトリ名
      path: `${__dirname}/assets/`,
      // 出力ファイル名
      filename: "js/main.js",
      assetModuleFilename: 'images/[name][ext][query]'
    },

    module: {
        rules:[
            {
                test: /\.ts$/,
                use: 'ts-loader',
            },
            {
                //拡張子 .scss、.sass、css を対象
                test: /\.(scss|sass|css)$/i, 
                // 使用するローダーの指定（後ろから順番に適用される）
                use: [ MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader' ], 
            },
            {
                //対象とするアセットファイルの拡張子を正規表現で指定
                test: /\.(png|svg|jpe?g|gif)$/i,
                //画像をコピーして出力
                type: "asset/inline" 
              },
        ],
    },

    plugins: [
        new MiniCssExtractPlugin({
          // 抽出する CSS のファイル名
          filename: 'css/style.css',
        }),
    ],

    devtool: 'source-map',

    devServer: {
        // 読み込むパス
        static: "./",
        open: true
    },

    resolve: {
    // 拡張子を配列で指定
        extensions: [
            '.ts', '.js',
        ],
    },
  };