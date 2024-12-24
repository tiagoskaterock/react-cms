const mix = require('laravel-mix');

mix.js('resources/js/App.jsx', 'public/js/app.js')
   .react() // Habilita o React
   .version();  // Para garantir que o cache seja invalidado quando houver mudanças
