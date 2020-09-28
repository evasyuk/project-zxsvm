/* eslint-disable no-param-reassign, import/no-extraneous-dependencies */
const webpack = require('webpack')
const dotenv = require('dotenv')

module.exports = () => {
  // call dotenv and it will return an Object with a parsed key
  const env = dotenv.config().parsed

  // reduce it to a nice object, the same as before
  const envKeys = Object.keys(env).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(env[next])
    return prev
  }, {})

  return new webpack.DefinePlugin(envKeys)
}

// source => https://medium.com/@trekinbami/using-environment-variables-in-react-6b0a99d83cf5
