/**
 * Model Imbriqués
 *
 */

const model = require("./models");
/**
 * DATAS MODELS
 *
 */

const Clan = [{ model: model.Clan }];
const CharacterModel = [
  { model: model.Warrior },
  { model: model.Loner },
  { model: model.KittyPet },
];

const CharacterInfo = [
  { model: model.Grade },
  { model: model.KittyPet },
  { model: model.Loner },
  {
    model: model.Warrior,
    include: [
      {
        model: model.Clan,
      },
    ],
  },
];

const modelsFulls = {
  Clan,
  CharacterModel,
  CharacterInfo,
};
module.exports = modelsFulls;
