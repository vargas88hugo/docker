const express = require('express');
const redis = require('redis');

const { PORT } = require('./config/keys');

const app = express();
const client = redis.createClient({ host: 'redis-server', port: 6379 });

client.set('visits', 0);

app.get('/', (req, res) => {
  client.get('visits', (err, visits) => {
    res.send(`Number of visits is ${visits}`);
    client.set('visits', parseInt(visits) + 1);
  });
});

app.listen(PORT, () => console.log(`Server connect to port ${PORT}`));
