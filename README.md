# Documentação - Testes Automatizados Sauce Demo

Projeto de teste automatizado para o site Sauce Demo v1.

# Introdução
Este documento descreve os passos para configurar e executar os testes automatizados para o site Sauce Demo, incluindo uma visão geral dos testes implementados.

## Pré-requisitos

É necessário ter Node.js e npm instalados para executar este projeto.

> Usei as versões `v22.12.0` e `10.9.0` do Node.js e npm, respectivamente. Sugiro que você use as mesmas versões ou versões posteriores.

## Instalação

Execute `npm install` (ou `npm i` para uma versão menor) para instalar as dependências de desenvolvimento.

## Testes

Execute `npx cypress run` para rodar o teste em modo headless.

Ou, execute `npx cypress open` para abrir Cypress em modo interativo.

### Estrutura do Projeto

- **cypress/e2e/Specs**: Contém os arquivos de especificação dos testes `(.cy.js)`.
- **cypress/e2e/pages**: Implementa o padrão Page Object Model (POM) com classes específicas para cada página.
   - **`homePage.js`**: Métodos para realizar login e validar mensagens de erro.
   - **`inventoryPage.js`**: Métodos para manipular a lista de produtos e o carrinho.
   - **`cartPage.js`**: Métodos para gerenciar produtos no carrinho e finalizar compras.
   - **`iventoryItemPage.js`**: Métodos para manipular a página de produtos.
- **cypress/support/**: Contém os arquivos de comandos personalizados dos testes.
   - **`cart_commands.js`**: Comandos personalizados para gerenciar produtos no carrinho e finalizar compras.
   - **`inventory_commands.js`**: Comandos personalizados para manipular a lista de produtos e o carrinho.
   - **`login_commands.js`**: Comandos personalizados para para realizar login.

## Descrição dos testes

- **Login com credenciais válidas:**
   - Garante que o usuário pode acessar a página principal com username e password corretas.
 
- **Login com Username inválido:**
   - Verifica se mensagens de erro adequadas são exibidas.

- **Login com Password inválida:**
   - Verifica se mensagens de erro adequadas são exibidas.

- **Login com Username e Password vazios:**
   - Verifica se mensagens de erro adequadas são exibidas.

- **Login com User bloqueado:**
   - Verifica se mensagens de erro adequadas são exibidas.

- **Visualização de produtos:**
   - Valida que a lista de produtos é exibida após login.

- **Adicionar produtos ao carrinho:**
   - Testa a funcionalidade de adicionar produtos e atualiza o ícone do carrinho.

- **Remover produtos do carrinho:**
   - Verifica se produtos podem ser removidos corretamente.

- **Finalizar compra:**
   - Testa o fluxo completo de compra, desde o login até a finalização.

- **Ordenar lista de produtos em ordem crescente:**
   - Testa a funcionalidade de ordenar a lista de produtos em ordem crescente.

- **Ordenar lista de produtos em ordem decrescente:**
   - Testa a funcionalidade de ordenar a lista de produtos em ordem decrescente.

- **Realizar Logout:**
   - Testa a funcionalidade de sair da conta e voltar para a página de Login.
___

This project was created with 💚 by [Vinny](https://github.com/vinnybp).
