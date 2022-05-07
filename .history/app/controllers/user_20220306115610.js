const jwt = require('jsonwebtoken');
const queries = require('../DataLayer/queries')
const config = require("../config/auth.config.js");
const model = require('../DataLayer/models')
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
    .findOne({ where: { Login: req.body.Login } })
    .then(user => {
        if(user === null) {
            res.send({ error: 'Utilisateur non trouvé', res: false }).status(401)
        }else{
            try {
                if(req.body.Password === user.Password){
                    const sendingToken = { Id: user.Id, token: jwt.sign({ Id: user.Id }, config.secret , { expiresIn: '48h' }) };
                    console.log(sendingToken)
                    res.send(sendingToken).status(200);
                }
                else
                    res.send({ error: 'Mot de passe incorrect', res: false }).status(401);
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