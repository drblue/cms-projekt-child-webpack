const { mix } = require('laravel-mix');

mix.js('src/js/scripts.js', './')
   .sass('src/scss/style.scss', './');

mix.browserSync({
	proxy: 'http://projekt.test/',
});
