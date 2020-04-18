const express = require('express');

const app = express();
const { PORT } = require('./config/keys');

app.get('/', (req, res) => {
  res.send('Home page');
});

app.use('/users', require('./routes/users'));

app.listen(PORT, () => console.log(`Server connected to port 3000`));
