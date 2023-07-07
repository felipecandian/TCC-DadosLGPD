# Como instalar
![DadosLGPD](https://raw.githubusercontent.com/felipecandian/TCC-DadosLGPD/main/logo.png)

# Instalação do _DADOSLGPD_

Este é um guia passo a passo para instalar um site WordPress em seu servidor. O WordPress é um sistema de gerenciamento de conteúdo (CMS) popular que permite criar e manter um site com facilidade. Vamos começar!

## Requisitos

Certifique-se de que você tenha os seguintes requisitos antes de prosseguir com a instalação:

- Um servidor web configurado (como Apache, Nginx).
- PHP versão 7.3 ou superior.
- Um banco de dados MySQL (ou MariaDB).
- Acesso ao servidor web por FTP ou SSH.
- Um navegador da web para acessar a interface de administração do WordPress.

## Passo 1: Baixar o WordPress

1. Acesse o site para baixar DadosLGPD do WordPress em [DadosLGPD](https://drive.google.com/file/d/12wIqmZXgsRvJH6T2DN_PQWc7JSHFB5Yw/view?usp=sharing).
2. Clique no link do Google Drive: "link dados LGPD" para obter a versão do WordPress em formato ZIP.

## Passo 2: Preparar o servidor

1. Conecte-se ao seu servidor web via FTP ou SSH.
2. Navegue até o diretório raiz do seu servidor web (geralmente é chamado de `public_html` ou `www`).
3. Crie uma nova pasta para o seu site WordPress (por exemplo, `meusite`).

## Passo 3: Instalar o WordPress

1. Extraia o conteúdo do arquivo ZIP do WordPress que você baixou anteriormente.
2. Copie todos os arquivos e pastas extraídos para a pasta que você criou no passo anterior (`meusite`).
3. Certifique-se de que os arquivos do WordPress estejam dentro da pasta correta (`public_html/meusite`).

## Passo 4: Configurar o banco de dados

1. Crie um banco de dados MySQL vazio em seu servidor.
2. Anote as seguintes informações do banco de dados: nome do banco de dados, nome de usuário e senha.

## Passo 5: Configurar o arquivo wp-config.php

1. Renomeie o arquivo `wp-config-sample.php` para `wp-config.php`.
2. Abra o arquivo `wp-config.php` em um editor de texto.
3. Localize as linhas que se referem às informações do banco de dados:

```php
define('DB_NAME', 'nome_do_banco_de_dados');
define('DB_USER', 'nome_de_usuario');
define('DB_PASSWORD', 'senha');
define('DB_HOST', 'localhost');
```

4. Substitua `'nome_do_banco_de_dados'`, `'nome_de_usuario'`, `'senha'` e `'localhost'` pelos valores corretos do seu banco de dados.

## Passo 6: Concluir a instalação

1. Abra um navegador da web e digite o URL do seu site WordPress (por exemplo, `http://seusite.com/meusite`).
2. Você verá uma página de boas-vindas do WordPress. Selecione o idioma desejado e clique no botão "Continuar".
3. Na próxima página, você precisará fornecer algumas informações básicas, como o título do seu site, nome de usuário, senha e endereço de e-mail. Preencha esses detalhes e clique no botão "Instalar o WordPress".
4. Após a instalação bem-sucedida, você será redirecionado para a página de login do WordPress. Insira seu nome de usuário e senha para fazer login no painel de administração do WordPress.

Parabéns! Você concluiu a instalação do seu site WordPress. Agora você pode personalizar seu site, instalar temas e plugins, e começar a criar seu conteúdo. Divirta-se!

