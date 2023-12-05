const { promises } = require("tedious/lib/message");
const model = require("./models");
const modelFull = require("./modelsFulls");

const queries = {
  UploadUserAvatar,
};

module.exports = queries;
