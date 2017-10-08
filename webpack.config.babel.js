// @flow

/*
Questo file serve a descrivere in che modo assemblare il nostro bundle:
entry è il punto di accesso della nostra app,
output.filename è il nome del file di bundle da generare,
output.path e output.publicPath descrivono la cartella di destinazione e l'URL.
Mettiamo il bundle nella cartella dist, che conterrà i file generati automaticamente
(a differenza del CSS che abbiamo creato in precedenza e che si trova in public).
module.rules è dove spieghi a Webpack di applicare alcune operazioni a certi tipi di file.
Qua diciamo che vogliamo che tutti i file .js e .jsx (per React)
ad esclusione di quelli in node_modules passino attraverso un modulo chiamato babel-loader.
Vogliamo inoltre che queste due estensioni vengano utilizzate per la risoluzione dei
moduli (resolve) quando ne facciamo un import.
Infine definiamo una porta per il Webpack Dev Server.
*/

import path from 'path'
import webpack from 'webpack'

import { WDS_PORT } from './src/shared/config'
import { isProd } from './src/shared/util'

export default {
  entry: [
    'react-hot-loader/patch',
    './src/client',
  ],
  output: {
    filename: 'js/bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: isProd ? '/static/' : `http://localhost:${WDS_PORT}/dist/`,
  },
  module: {
    rules: [
      { test: /\.(js|jsx)$/, use: 'babel-loader', exclude: /node_modules/ },
    ],
  },
  devtool: isProd ? false : 'source-map',
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    port: WDS_PORT,
    hot: true,
    headers: { 'Access-Control-Allow-Origin': '*' },
  },
  plugins: [
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
  ],
}
