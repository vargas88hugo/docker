const express = require('express');

const router = express.Router();
const User = require('../models/User');

router.get('/', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).send('WTF');
  }
});
router.post('/', async (req, res) => {
  try {
    const user = new User(req.body);

    await user.save();
    res.json(user);
  } catch (error) {
    res.status(500).send('Server Error!');
  }
});
router.delete('/', (req, res) => {});

module.exports = router;
