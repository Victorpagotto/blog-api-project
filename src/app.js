const express = require('express');
const categoryRouter = require('./routers/category.router');
const loginRouter = require('./routers/login.router');
const postRouter = require('./routers/blogpost.router');
const userRouter = require('./routers/user.router');

// ...

const app = express();

app.use('/login', loginRouter);
app.use('/user', userRouter);
app.use('/categories', categoryRouter);
app.use('/post', postRouter);
app.use(express.json());

// ...

// É importante exportar a constante `app`,
// para que possa ser utilizada pelo arquivo `src/server.js`
module.exports = app;
