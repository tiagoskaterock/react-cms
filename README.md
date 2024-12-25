# CMS - Laravel & React
[![React](https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=react&logoColor=black)](https://reactjs.org/) 
[![Laravel](https://img.shields.io/badge/Laravel-FF2D20?style=flat-square&logo=laravel&logoColor=white)](https://laravel.com/)

Este é um **CMS (Content Management System)** desenvolvido com **Laravel** para o backend e **React** para o frontend. Ele permite gerenciar conteúdo de forma simples e eficaz com uma interface moderna.

## Tecnologias Utilizadas
- **Laravel**: Framework PHP para o backend, utilizado para gerenciar dados e autenticação.
- **React**: Biblioteca JavaScript para o frontend, criando interfaces dinâmicas.
- **MySQL**: Banco de dados relacional utilizado para armazenar os dados.
- **Bootstrap**: Framework CSS para uma estilização responsiva e rápida.

## Instalação

### Backend (Laravel) e Frontend (React)

git clone https://github.com/tiagoskaterock/react-cms

cd react-cms

#### Salve .env.example como .env

#### Atualize a conexão com o banco de dados em .env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=react_cms
DB_USERNAME=your_username
DB_PASSWORD=your_password

composer install

npm install

npm run watch
