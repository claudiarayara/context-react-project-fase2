## Nome: `Claudia Rayara Alves da Silva`
### Desenvolvimento de Sistemas Front-End: Escritório de Projetos - Fase 2;

Para este projeto é necessário fazer uso da API hotwheels-api que se encontra em: https://github.com/adsPucrsOnline/DesenvolvimentoFrontend/
### *1. Para executar a API:*
- Clone o repositório localmente;
- Entre na pasta da API utilizando o mesmo terminal com o comando: `cd ./DesenvolvimentoFrontend/hotwheels-api/`;
- Execute `npm install` e em seguida `npm start`;

### *2. Iniciando o Projeto:*
- Verifique se esta na pasta context-react-project-fase2 no terminal, caso não esteja entre na pasta usando:
```
cd context-react-project-fase2
```

- Em seguida, no terminal digite **npm install** e dê enter para instalar as dependências do projeto:
```
npm install
```

- Rode o projeto localmente usando o comando npm run dev, para iniciar a execução do projeto e abra o link segurando ctrl e clicando nele:
```
npm run dev
```
---
# 🔥 Projeto HotWheels - Biblioteca de Carros;
## *Após execução do projeto, este é o resultado esperado no navegador:*

## *Introdução:*
Este projeto foi desenvolvido como parte da disciplina de Desenvolvimento de Sistemas Frontend. \
Trata-se de uma biblioteca de carros HotWheels que permite aos usuários consultar, adicionar, editar e remover carros de uma lista.

O projeto utiliza React, Vite, e bibliotecas como TailwindCSS para estilização, além de consumir dados de uma API REST.\
Ele oferece uma interface amigável e responsiva, facilitando a navegação e o gerenciamento da coleção de carros.

Foi feito um pequeno prototipo no [Figma](https://www.figma.com/design/wUWKWXi0RoVPFEkxoJ9ktn/%F0%9F%93%98-PUCRS-(Desenvolvimento-de-Sistemas-Front-End)---HotWheels-API?node-id=0-1&t=mBROjwPHut6gRTvv-1)
 para facilitar a execução;

## *Componentes:*
O projeto é composto por diversos componentes React para organizar as funcionalidades e interfaces:
- **NavBar:** Barra de navegação superior com links para as principais páginas.
- **CarList:** Lista de carros exibidos com opções para editar e remover.
- **CarForm:** Formulário utilizado para adicionar novos carros à lista.
- **BarraDePesquisa:** Componente de busca que permite filtrar os carros exibidos na lista com base no nome, marca, cor ou ano.
- **Rodape:** Componente de rodapé com informações adicionais.
- **CarService:** Arquivo que lida com as requisições à API (listar, adicionar, editar e excluir carros).

## *Funcionalidades:*
O sistema oferece as seguintes funcionalidades:
- **Adicionar Carros:** Os usuários podem adicionar novos carros à biblioteca preenchendo um formulário.
- **Listar Carros:** A lista exibe todos os carros cadastrados, com informações detalhadas como nome, marca, cor e ano.
- **Pesquisar Carros:** A barra de pesquisa permite que os usuários filtrem os carros pela marca, nome, cor ou ano.
- **Editar Carros:** Ao clicar em editar, o usuário pode modificar os dados de um carro já cadastrado.
- **Excluir Carros:** O usuário pode remover um carro da lista com um simples clique no ícone de lixeira.

## *Conclusão:*
Este projeto oferece uma visão prática do desenvolvimento de uma aplicação frontend usando React e Vite, com integração a uma API REST para a manipulação de dados. Foi uma oportunidade de explorar o consumo de APIs, a criação de interfaces responsivas com TailwindCSS e o uso de bibliotecas modernas para um desenvolvimento mais rápido e eficiente.
