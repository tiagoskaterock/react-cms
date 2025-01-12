const mix = require('laravel-mix');

// Compila o JavaScript (React) e o CSS
mix.js('resources/js/App.jsx', 'public/js/app.js')
   .js('resources/js/website/Website.jsx', 'public/js/website.js')
   .react()  // Habilita o React
   .postCss('resources/css/app.css', 'public/css/app.css', [
      require('tailwindcss'), // Certifique-se de que você tem o TailwindCSS configurado
   ])
   .version();  // Para garantir que o cache seja invalidado quando houver mudanças
