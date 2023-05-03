const { User } = require('../models');
const router = require('express').Router();
const bcrypt = require('bcrypt');

//changed casing for push 
//post username/password data to the database when the user creates an account
router.post('/login', async (req, res) => {
  try {
    const newUser = req.body;
    newUser.password = await bcrypt.hash(req.body.password, 10);
    const userData = await db.User.create(newUser);

    req.session.logged_in = true; //registers them as logged in after creating an account
    req.session.user_id = newUser.id;

    res.redirect('/') //redirects them to the homepage(logged in), after creating an account
  } catch (err) {
    console.error(err);
  }
});


//post request route to log someone in when they log in
router.post('/login', async (req, res) => {
  try{
    const {username, password} = req.body;

    const user = await db.User.findOne({where: {username}});
    const validPassword = await bcrypt.compare(
      req.body.password,
      userData.password
      );

    if (!user){
      return res.status(401).render('login', {error: "Incorrect Username or Password."})
    }
    if (!validPassword){
      return res.status(401).render('login', {error: "Incorrect Username or Password."})
    }
    req.session.logged_in = true; 
    req.session.user_id = user.id;
    res.redirect('/');

  } catch(err){
    console.error(err);
  }
});

module.exports = router;
