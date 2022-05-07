const queries = require("../DataLayer/queries");

const Clan = {};

Clan.GetAllClans = (req, res) => {
  queries
    .GetAllClans()
    .then((w) => {
      res.send({ ob: w, res: true }).status(200);
    })
    .catch((err) => {
      console.log(err);
      res.send(err).status(500);
    });
};

module.exports = Clan
