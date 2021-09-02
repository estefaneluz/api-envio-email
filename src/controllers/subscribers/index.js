const connection = require('../../connection');

const subscribe = async (req, res) => {
    const { nome, email } = req.body;
    if(!nome) return res.status(400).json("O nome precisa ser informado.");
    if(!email) return res.status(400).json("O e-mail precisa ser informado.");

    try {
        const subscribersCount = await connection('subscribers').where({email}).first();

        if(subscribersCount){
            return res.status(400).json("O e-mail já existe.");
        }

        const subscriber = {
            nome,
            email
        }

        const sub = await connection('subscribers').insert(subscriber);
        if(sub.rowCount === 0) {
            return res.status(400).json("Não foi possível fazer a inscrição.");
        }

        return res.status(200).json("A inscrição foi feita com sucesso!");

    } catch(error){
        res.status(400).json(error.message);
    }
}

module.exports = { subscribe }