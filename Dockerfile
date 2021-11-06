FROM php:7.3.32-fpm-alpine3.14

RUN docker-php-ext-install pdo_mysql
