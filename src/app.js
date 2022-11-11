const express = require('express');
const path = require('path');

const alunoRouter = require('./routes/aluno')


const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// view engine setup
app.set('views', path.resolve(__dirname, './views'));
app.set('view engine', 'ejs');

app.use(express.static(path.resolve(__dirname, '../public')));

app.use('/aluno', alunoRouter)

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.json(err);
});

app.listen('3001', () => console.log('Servidor rodando na porta 3001'))

module.exports = app;
