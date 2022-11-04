<h1 align="center">Blog API</h1>

<h2 align="center">Português</h2>


**Nome**: Blog API

**Conhecimentos Usados**: JavaScript e Sequelize.

**Ferramentas usadas**: Node.js, JWT, Express e MySQL.

**Número de Pessoas**: 1 (sozinho).

-----------------------

<h3 align="center">Descrição</h3>

<p align="justify">Desenvolvida como uma API capaz de suportar um blog, esta possui a capacidade de receber, devolver, pesquisar e manejar (CRUD) informações sobre usuários, posts e categorias em um banco de dados MySQL utilizando-se da abstração proveniente do Sequelize, uma ferramenta capaz de servir de interface entre o código da API e o banco de daods, com modelos de query prontos. Dito isso, a API é focada em desenvolver os serviços e controladores com base no Express e suas rotas.</p>
<p align="justify">Todo o código é criado sobre os princípios do conceito de REST, possuindo então um manejo eficiente da integridade de dados - com validações, verificações e criptografia dos dados utilizando-se de JWT para a correlação usuário e funcionalidades/posts, buscando também respostas claras com os retornos. </p>
<p align="justify">O principal desafio aqui era o manejo de informações utilizando-se do Sequelize, uma ferramenta com a qual não possuía total familiaridade. Entretanto o Sequelize mostra-se muito prático e eficiente, abstraindo o processo da criação de queries sem a perda de qualquer funcionalidade. Por ter sido feita a partir de Sequelize, a API pode ser facilmente adaptada a outros tipos de banco de dados, uma vez que a interface é capaz de se adaptar aos mesmos com a simples mudança de alguns parâmetros.</p>

-----------------------

<h3 align="center">Projeto Trybe</h3>

  <p align="justify">Um projeto Trybe é um projeto o qual eu tenha feito durante minha estadia como aluno da Trybe. Este é um curso 100% online focado em desenvolvimento web, mas que tange partes de outras áreas, tentando prover mais ferramentas.</p>
  <p align="justify">Tais projetos são feitos ao fim de blocos ao longo do curso, com o objetivo de solidificar o conhecimento nele adquirido. Estes projetos são feitos a partir de requisitos os quais devem ser atendidos, os quais buscam imitar requisições feitas para o profissional no mercado de trabalho. Esses requisitos precisam ser implementados, e isso é testado através de testes automáticos fornecidos pela própria Trybe ao longo do desenvolvimento.</p>
  <p align="justify">Entretanto, apesar de estes fornecerem uma estrutura básica para o desenvolvimento e teste do que eles requerem, o código relativo à funcionalidade deste projeto foi desenvolvido por alunos.</p>

-----------------------

<h3 align="center">Como Instalar</h3>
<p align="justify">Para realizar o uso desta API em seu computador, você precisará ter instalado o Node.js e o servidor de banco de dados MySQL, tendo-os funcionando corretamente. Preencha as variáveis de sistema no .env, retirando o .exemple, tornando-as assim ativas através da biblioteca dotenv pelo projeto. Antes de iniciar o projeto, instale as dependências com "npm install" e em seguida utilize o comando padrão "npm start". </p>

-----------------------

<h2 align="center">English</h2>


**Name**: Blog API

**Used Knowledges**: JavaScript and Sequelize.

**Used Tools**: Node.js, JWT, Express and MySQL.

**Number of People**: 1 (solo).

-----------------------

<h3 align="center">Description</h3>

<p align="justify">Developed as an API capable of supporting a blog, it can receive, return, search and handle (CRUD) information about users, posts and categories within a MySQL database using the abstraction from Sequelize, a tool capable of serving as an interface between the API code and the database, with already built in query templates. That said, the API is focused on building services and controllers based on Express and its routes.</p>
<p align="justify">All the code is created based in principles of the REST concept, thus having an efficient handling of data integrity - with validations, verifications and data encryption using JWT for correlation between users and functionalities/posts, also seeking clear answers with the routes' returns.</p>
<p align="justify">The main challenge was managing information using Sequelize, a tool with which I was not fully familiar. However, Sequelize proves to be very practical and efficient, abstracting the process of creating queries without losing any functionality. As it was made from Sequelize, the API can be easily adapted to other database types, since the interface is able to adapt to them with the simple change of some parameters.</p>

-----------------------

<h3 align="center">Trybe Project</h3>

  <p align="justify">A Trybe project is a project which was done during my time as a Trybe student. This is a 100% online course focused on web development, but it touches parts of other areas, trying to provide more tools.</p>
  <p align="justify">Such projects happen at the end of blocks throughout the course, with the aim of solidifying the knowledge acquired along  it. These projects are made from requirements that must be met, which seek to imitate those made to the professionals in the work environment. These requirements need to be implemented, and this is tested through automatic tests provided by Trybe.</p>
  <p align="justify">However, although these provide a basic framework for developing and testing for what they require, the code related to the functionality of these project are developed by students.</p>

-----------------------

<h3 align="center">How to Install</h3>
<p align="justify">In order to use this API on your computer, you'll need to have both Node.js and the MySQL database server installed and running. Fill the system variables in the .env, removing the .example, thus making them active through the dotenv library by the project. Before starting it, install the dependencies with "npm install" and then use the standard "npm start" command.</p>
<p align="justify">Before anything, for you  to have your db up and running, arun the theses commands for creating and seeding it:</p>
<p align="justify">npx sequelize db:create</p>
<p align="justify">npx sequelize db:migrate</p>
<p align="justify">npx sequelize db:seed:all</p>
-----------------------

