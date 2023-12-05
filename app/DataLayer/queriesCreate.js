const { promises } = require("tedious/lib/message");
const model = require("./models");
const modelFull = require("./modelsFulls");

const UploadUserAvatar = (data, id) => {
  console.log("UploadUserAvatar", data, id);
  const promises = [];
  const newRequest = model.User.update({ Avatar: data }, { where: { Id: id } });
  promises.push(newRequest);
  return newRequest
    .then((w) => {
      return Promise.all(promises);
    })
    .catch((err) => {
      console.log("ERROR: ", err);
    });
};

const queries = {
  UploadUserAvatar,
};

module.exports = queries;
