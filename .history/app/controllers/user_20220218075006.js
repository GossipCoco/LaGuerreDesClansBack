const jwt = require('jsonwebtoken');
const queries = require('../DataLayer/queries')

const User = {};

User.GetAllUsers = (req, res) => {
    queries.GetAllUsers()
        .then(w => {
            res.send({ob: w, res: true}).status(200)
        })
        .catch(err => {
            console.log(err)
            res.send(err).status(500)
        })
}
User.GetUserById = (req, res) => {
    const id = req.params.id;
    queries.GetUserById(id)
    .then(w => {
        res.send({ob: w, res: true}).status(200)
    })
    .catch(err => {
        console.log(err)
        res.send(err).status(500)
    })
}

User.Login = (req, res, next) => {
    model.User
    .findOne({ where: { Login: req.body.login } })
    .then(user => {
        console.log(user)
        if(user === null) {
            res.send({ error: 'Utilisateur non trouvé', res: false }).status(401)
        }else{
            try {
                if(req.body.password === user.Password){
                    const sendingToken = { Id: user.Id, token: jwt.sign({ Id: user.Id }, 'AMK', { expiresIn: '24h' }) };
                    res.send(sendingToken).status(200);
                }
                else
                    res.send({ error: 'Mot de passe incorrect !', res: false }).status(401);
            }
            catch (error) {
                console.log(error);
                res.send({ error, pathTo: 'logout', res: false }).status(401);
            }
        }
    })
    .catch(err => res.send({ error: err, pathTo: 'logout', res: false }).status(500));
}
module.exports = User