#!/bin/sh
yarn cross-env NODE_ENV=development node_modules/webpack-dev-server/bin/webpack-dev-server.js --hot --config=node_modules/laravel-mix/setup/webpack.config.js
# --https --key /etc/ssl/private/nginx-selfsigned.key --cert /etc/ssl/certs/nginx-selfsigned.crt
