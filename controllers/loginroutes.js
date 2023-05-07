const { User } = require('../models');
const router = require('express').Router();
const bcrypt = require('bcrypt');

//changed casing for push 

router.get('/', async (req, res) => {
  res.render('login');
})

//post name/email/password data to the database when the user creates an account
router.post('/createuser', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.create({
      name,
      email,
      password
    });

    req.session.save(() => {
      req.session.logged_in = true; //registers them as logged in after creating an account
      req.session.user_id = user.id;
      res.json({ user: user, message: 'Account created!' });
    });

  } catch (err) {
    console.error(err);
  }
});


//post request route to log someone in when they log in
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ where: { email } });

    if (!user.email) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }
   
    const validPassword = await bcrypt.compare(
      password,
      user.password
    );

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    req.session.save(() => {
      req.session.user_id = user.id;
      req.session.logged_in = true;

      res.json({ user: user, message: 'You are now logged in!' });
    });

  } catch (err) {
    console.error(err);
  }
});


module.exports = router;

