const auth = require('auth.js');
const router = require('express').Router();
const { User } = require('../models');

//route to grab user's information
router.get('/profile', async (req,res)=>{
    try{
        const user = await db.User.findOne({
            where:{
                id: req.session.user_id
            }
        });
        
        res.render('profile', {user : user});
    } catch(err){
        console.error(err);
    }
});

module.exports = router;