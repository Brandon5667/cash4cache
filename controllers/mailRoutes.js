const { User } = require('../models');
const router = require('express').Router();

router.get('/', async (req, res) => {
    res.render('mail');
  });