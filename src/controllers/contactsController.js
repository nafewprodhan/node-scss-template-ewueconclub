const config = require('../../config/mail');
const nodemailer = require('nodemailer');

exports.getContactPage = (req, res) => {

    res.render('contact', {
        path: "/contact"
    })
}

exports.postContactPage = (req, res) => {

    // Email Template
    const output = `
        <p>You have a message</p>
        <h3>Contact Details</h3>
        <p>Name: ${req.body.name}</p>
        <p>Email: ${req.body.email}</p>
        <h3>Message</h3>
        <p>${req.body.message}</p>
    `;


    // <div class="alert alert-success alert-dismissible fade show" role="alert">
    //             Message has been sent
    //             <button type="button" class="close" data-dismiss="alert" aria-label="Close">
    //                     <span aria-hidden="true">&times;</span>
    //             </button>
    // </div>
    // Alert if successfully sending email
    const successAlert = "Message has been sent";

    // Alert if failed to sending email
    const failAlert = "Failed to send message. Please refresh this page";


    // Create reusable transporter object using the default SMTP transport
//     let transporter = nodemailer.createTransport({
//             host:  config.host,
//             port: config.port,
//             secure: false,
//             auth: {
//                     user: config.user,
//                     pass: config.pass
//             },
//             tls:{
//                 rejectUnauthorized:false
//             }
//     });

    // Use this is you want to use Gmail SMTP
    let transporter = nodemailer.createTransport(
            `smtps://${config.user}:${config.pass}@smtp.gmail.com`
    );

    // Setup email settings
    let mailOptions = {
            from: config.from,
            to: config.to,
            subject: config.subject,
            html: output
    };

    // Send mail with defined transport object
    transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                    res.render("send", {path: "/contact/send", msg: failAlert});
            }

            res.render("send", {path: "/contact/send", msg: successAlert});
    });
};