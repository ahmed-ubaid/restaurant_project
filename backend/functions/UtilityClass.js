const dotenv=require('dotenv');
dotenv.config();
const nodemailer = require('nodemailer');


class UtilityClass{
    calculatePrice(num,rank){
        num=Number(num)
        rank=rank.toLowerCase() 
        switch(rank){
            case "silver":
                return num>5?num*1:num*2
            case "gold":
                return num>5?num*2:num*3
            case "diamond":
                return num>5?num*3:num*4
        }
    }

    sendEmail(UserEmail,password){
        const transporter = nodemailer.createTransport({
            secure:true,
            host: 'smtp.gmail.com',
            post:465,
            auth: {
            user: `${process.env.EMAIL}`,
            pass: `${process.env.EMAILPASS}` // use App Password if 2FA is on
            }
        });

        const mailOptions = {
            from: process.env.EMAIL,
            to: UserEmail,
            subject: 'Your Access Password',
            text: `Your password is: ${password}`
        };

        transporter.sendMail(mailOptions);
    }

    printStuff(UserEmail,password){
        console.log(`email:${UserEmail} password:${password}`)
    }
}



module.exports=UtilityClass