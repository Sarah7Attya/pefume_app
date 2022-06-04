const nodemailer = require("nodemailer")
const smtpConfig = {
    service:'gmail',
    auth:{
        user: "nadia6@gmail.com",
        pass: "98876"
    }
}
const sendEmail = (userEmail) =>{
    try{
        const transporter = nodemailer.createTransport(smtpConfig)
        let mailOptions = {
            from:"sara",
            to: userEmail,
            subject:"hello",
            text:"hello from site"
        }
        transporter.sendMail(mailOptions)
    }
    catch(e){
        console.log(e.message);
    }
}

module.exports= sendEmail