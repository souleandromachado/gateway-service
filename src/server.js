require('dotenv').config();
const express = require('express');
const app = express();

app.use(express.json());

app.use('/auth', require('./routes/auth'));
app.use('/users', require('./routes/users'));
app.use('/posts', require('./routes/posts'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Gateway rodando na porta ${PORT}`);
});
