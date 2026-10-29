# Horta comunitária — Eliezer

## Descrição

Este projeto foi desenvolvido com React e React Router para gerenciar os canteiros de uma horta comunitária.

O sistema permite visualizar os canteiros cadastrados, cadastrar novos canteiros e navegar entre as páginas sem recarregar o site.

## Meus parâmetros

- **RA utilizado:** 53767083817
- **Tema (A):** Horta comunitária
- **Cálculo de A:** 17 % 20 = 17, correspondente ao tema Horta comunitária.
- **Slug:** `canteiros`
- **Regra do campo (B):** o antepenúltimo dígito do RA é 8. A regra correspondente exige que o campo principal tenha no máximo 30 caracteres e um contador visível.
- **Visualização (C):** a soma dos dígitos do RA é 55. Como 55 % 6 = 1, a visualização utilizada é uma tabela HTML, com uma coluna para cada campo.
- **Menu (D):** o quarto dígito contado da direita para a esquerda é 8. Como 8 % 4 = 0, o menu fica horizontal no topo, com os links centralizados.
- **Cor principal:** os três últimos dígitos do RA são 817. Como 817 % 360 = 97, a cor principal é `hsl(97, 60%, 35%)`.

## Tecnologias utilizadas

- React
- JavaScript
- React Router
- CSS
- Vite

## Funcionalidades

- Página inicial com o nome do sistema, nome do aluno e quantidade de registros.
- Cadastro de canteiros com os campos cultura, área, estação e responsável.
- Contador de caracteres no campo Cultura, limitado a 30 caracteres.
- Validação dos campos obrigatórios e da área informada.
- Mensagem de sucesso após o cadastro.
- Visualização dos registros em uma tabela HTML.
- Página de erro 404 para rotas inexistentes.
- Navegação entre páginas utilizando React Router.
- Persistência dos registros com `localStorage`, mantendo os dados após atualizar a página.

## Rotas do sistema

| Rota | Página |
|---|---|
| `/` | Página inicial |
| `/canteiros/novo` | Cadastro de canteiros |
| `/canteiros` | Visualização dos canteiros |
| `*` | Página de erro 404 |

## Opcionais implementados

- **O6 — Persistência:** os registros são armazenados no `localStorage` e continuam disponíveis após atualizar a página.

## Como executar o projeto

1. Instale o Node.js.
2. Abra a pasta do projeto no terminal.
3. Execute o comando:

   ```bash
   npm install
   ```

4. Depois, execute:

   ```bash
   npm run dev
   ```

5. Abra no navegador o endereço informado pelo terminal.

## Evidências do projeto

Adicione abaixo os prints reais do projeto para demonstrar o funcionamento das páginas.

### Página inicial

*Adicionar print da página inicial.*

### Cadastro de canteiros

*Adicionar print do formulário de cadastro.*

### Visualização dos canteiros

*Adicionar print da tabela com os registros cadastrados.*

### Validação do formulário

*Adicionar print mostrando o contador de caracteres ou a validação do formulário.*

## Vídeo de apresentação

**Link do vídeo:** *Adicionar o link do vídeo de até 3 minutos após publicá-lo.*

O vídeo deve demonstrar o fluxo dos dados funcionando, utilizando `console.log` ou React DevTools, e apresentar uma pequena alteração feita ao vivo durante a gravação.

## Autor

**Nome:** Eliezer Santos Beltrame  
**RA:** 53767083817
