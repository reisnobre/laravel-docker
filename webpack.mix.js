const mix = require('laravel-mix')
const path = require('path')

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.options({
  hmrOptions: {
    host: '0.0.0.0',
    port: 3000
  }
})

mix.webpackConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'resources', 'app'),
    }
  }
})


mix.js('resources/app/app.js', 'public/js')
  .sass('resources/scss/app.scss', 'public/css')
