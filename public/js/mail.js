const name = document.getElementById('name');
const email = document.getElementById('email');


const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
    service: "outlook",
    ath: {
        user: "cash4cache2@outlook.com",
        pass: "12345###"
    }
});

const options = {
    from: "cash4cache2@outlook.com",
    to: "brandon.cullifer@gmail.com",
    subject: "I would like to purchase your item",
    text: "Please!!!"
};

transporter.sendMail(options,  function (err, info){
    if(err){
        console.log(err);
        return;
    }
    console.log("SENT " + info.response);
})