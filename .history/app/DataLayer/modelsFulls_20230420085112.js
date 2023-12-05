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
