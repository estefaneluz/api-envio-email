const nodemailer = require('nodemailer');

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
        user: "1c04bbf3d4eb87",
        pass: "10eab0e3163ef8"
    }
});

module.exports = transport;