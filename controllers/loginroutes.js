const { User } = require('../../models');
const router = require('express').Router();
const bcrypt = require('bcrypyt');

//post username/password data to the database when the user creates an account
router.post('/create-account', async (req, res) => {
  try {
    const newUser = req.body;
    newUser.password = await bcrypt.hash(req.body.password, 10);
    const userData = await db.User.create(newUser);

    req.session.logged_in = true; //registers them as logged in after creating an account
    req.session.user_id = newUser.id;

    res.redirect('/') //redirects them to the homepage(logged in), after creating an account
  } catch (err) {
    console.error(err);
    res.status
  }
});


//post request route to log someone in when they log in
router.post('/', async (req, res) => {
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
    req.session.logged_in = true; //registers them as logged in after creating an account
    req.session.user_id = user.id;
    res.redirect('/') //redirects them to the homepage(logged in), after creating an account

  } catch(err){
    res.status(500).send('Server Error')
  }
});

