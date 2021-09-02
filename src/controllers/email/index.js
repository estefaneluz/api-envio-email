const connection = require('../../connection');
const nodemailer = require('../../nodemailer');

const sendEmail = async (req, res) => {
    const { titulo, texto } = req.body;

    if(!titulo) return res.status(400).json("O e-mail precisa ter um titulo.");
    if(!texto) return res.status(400).json("O e-mail precisa ter um texto.");

    try {
    const subscribers = await connection('subscribers');

    for(let sub of subscribers){
        nodemailer.sendMail({
            from: '"API emails" <teste.api.emails@gmail.com>',
            to: sub.email,
            subject: titulo,
            text: `Olá ${sub.nome}! ${texto}`,
        })
    }

    res.status(200).json("Email enviado!");
    } catch(error) {
        res.status(400).json(error.message);
    }
}

module.exports = { sendEmail }