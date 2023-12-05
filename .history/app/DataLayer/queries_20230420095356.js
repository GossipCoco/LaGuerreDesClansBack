const { promises } = require("tedious/lib/message");
const model = require("./models");
const modelFull = require("./modelsFulls");

const GetAllImagesTable = () => {
  return model.Images.findAndCountAll({});
};

const GetAllUsers = () => {
  console.log("**** All Users ****");
  return model.User.findAll({
    include: [
      {
        model: model.Role,
        include: [
          {
            model: model.RolePermission,
            include: [
              {
                model: model.Permission,
              },
            ],
          },
        ],
      },
      {
        model: model.Level,
      },
      {
        model: model.OriginalCharacter,
        include: {
          model: model.Character,
          include: modelFull.CharacterInfo,
        },
      },
    ],
  });
};
const GetUserByLogin = (login) => {
  console.log("**** User ****", login);
  return model.User.findOne({
    where: { Login: login },

    include: [
      {
        model: model.Role,
        include: [
          {
            model: model.RolePermission,
            include: [
              {
                model: model.Permission,
              },
            ],
          },
        ],
      },
      {
        model: model.Level,
      },
    ],
  });
};

const GetUserById = (id) => {
  console.log("**** ID User ****", id);
  return model.User.findOne({
    where: {
      Id: id,
    },
    include: [
      {
        model: model.Role,
        include: [
          {
            model: model.RolePermission,
            include: [
              {
                model: model.Permission,
              },
            ],
          },
        ],
      },
      {
        model: model.Level,
      },
      {
        model: model.OriginalCharacter,
        include: {
          model: model.Character,
          include: modelFull.CharacterInfo,
        },
      },
    ],
  });
};
const GetUserByUsername = (username) => {
  console.log("**** ID User ****", username);
  return model.User.findOne({
    where: {
      UserName: username,
    },
    include: [
      {
        model: model.Role,
        include: [
          {
            model: model.RolePermission,
            include: [
              {
                model: model.Permission,
              },
            ],
          },
        ],
      },
      {
        model: model.Level,
      },
      {
        model: model.OriginalCharacter,
        include: {
          model: model.Character,
          include: modelFull.CharacterInfo,
        },
      },
    ],
  });
};
const countAllCharacters = () => {
  console.log("test countAllCharacters");
  return model.Character.findAll({});
};
const GetAllCharacters = (usr, nav, filters) => {
  return model.Character.findAll({
    offset: nav.step * nav.current,
    limit: nav.step,
    include: [
      { model: model.Grade },
      { model: model.KittyPet },
      { model: model.Loner },
      {
        model: model.Warrior,
        include: [
          {
            model: model.Clan,
            include: [{ model: model.Location }],
            order: [["Id", "ASC"]],
          },
        ],
        order: [["ClanId", "ASC"]],
      },
      { model: model.ExistingCharacter },
      { model: model.OriginalCharacter, include: [{ model: model.User }] },
    ],
  });
};

const GetAllCharactersByUser = (user) => {
  return model.Character.findAll({
    include: [
      {
        model: model.OriginalCharacter,
        include: [
          {
            model: model.User,
            where: {
              UserName: user,
            },
          },
        ],
      },
      { model: model.Grade },
      { model: model.KittyPet },
      { model: model.Loner },
      {
        model: model.Warrior,
        include: [
          {
            model: model.Clan,
            include: [
              {
                model: model.Location,
              },
            ],
            order: [["Id", "ASC"]],
          },
        ],
        order: [["ClanId", "ASC"]],
      },
    ],
  });
};

const GetCharacterByName = (name) => {
  console.log("**** Character ****", name);
  return model.Character.findAll({
    where: { Id: { [model.Utils.Op.like]: name } },
    include: [
      {
        model: model.Grade,
      },
      {
        model: model.KittyPet,
      },
      {
        model: model.Loner,
      },
      {
        model: model.Warrior,
        include: [
          {
            model: model.Clan,
            include: [
              {
                model: model.Location,
              },
            ],
            order: [["Id", "ASC"]],
          },
        ],
        order: [["ClanId", "ASC"]],
      },
      {
        model: model.ExistingCharacter,
      },
      {
        model: model.OriginalCharacter,
        include: [
          {
            model: model.User,
          },
        ],
      },
    ],
  });
};

const GetCharacterByNameSearch = (name) => {
  console.log("**** Character ****", name);
  return model.Character.findAll({
    where: { CurrentName: { [model.Utils.Op.like]: `%${name}%` } },
    include: [
      {
        model: model.Grade,
      },
      {
        model: model.KittyPet,
      },
      {
        model: model.Loner,
      },
      {
        model: model.Warrior,
        include: [
          {
            model: model.Clan,
            include: [
              {
                model: model.Location,
              },
            ],
          },
        ],
      },
      {
        model: model.ExistingCharacter,
      },
      {
        model: model.OriginalCharacter,
        include: [
          {
            model: model.User,
          },
        ],
      },
    ],
  });
};

const CreateANewCharacter = (data) => {
  console.log(data);
  const promises = [];
  let Name = data.Name;
  var str = Name.replace(/\s+/g, "");
  const newCharacter = {
    Id: str,
    CurrentName: Name,
    Genre: data.Genre,
    KitName: data.KitName,
    ApprenticeName: data.ApprenticeName,
    WarriorName: data.WarriorName,
    OlderName: data.OlderName,
    LeaderName: data.LeaderName,
    Age: data.Age,
    Description: data.Description,
    Personnality: data.Personnality,
    Biography: data.Biography,
    Image: data.Image,
  };
  const Warrior = {
    Id: str,
    Name: data.WarriorName,
    Image: data.Image,
    ClanId: data.ClanId,
  };
  console.log(newCharacter);
  // const characterCreated = model.Character.create(newCharacter);
  // promises.push(characterCreated);
  // return characterCreated
  //   .then((w) => {
  //     return Promise.all(promises)
  //   })
  //   .catch((err) => {
  //     console.log(err)
  //     //res.send(err).status(500);
  //   });
};
const GetAllClans = () => {
  return model.Clan.findAll({
    include: [
      {
        model: model.Location,
      },
    ],
    order: [["Name", "ASC"]],
  });
};
const GetClanById = (id) => {
  return model.Clan.findOne({
    where: { Id: id },
    include: [
      {
        model: model.Location,
      },
      {
        model: model.Warrior,
        include: [
          {
            model: model.Character,
          },
        ],
      },
    ],
  });
};

const GetClanByNameClan = (name) => {
  return model.Clan.findOne({
    where: { Name: { [model.Utils.Op.like]: `%${name}%` } },
    include: [
      {
        model: model.Location,
      },
      {
        model: model.Warrior,
        include: [
          {
            model: model.Character,
          },
        ],
      },
    ],
  });
};

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
const GetAllImages = () => {
  return model.User.findAll({
    attributes: ["Avatar"],
  });
};
const queries = {
  GetAllUsers,
  GetUserByLogin,
  GetUserById,
  GetUserByUsername,
  GetAllCharacters,
  GetAllCharactersByUser,
  GetCharacterByName,
  GetCharacterByNameSearch,
  CreateANewCharacter,
  GetAllClans,
  GetClanById,
  GetClanByNameClan,
  countAllCharacters,
  GetAllImages,
  UploadUserAvatar,
  GetAllImagesTable,
};

module.exports = queries;
