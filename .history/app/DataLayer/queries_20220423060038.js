const { promises } = require("tedious/lib/message");
const model = require("./models");

const PermissionStatut = [
  { model: model.Admin },
  { model: model.Member },
  { model: model.Banned },
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
          include: CharacterInfo,
        },
      },
    ],
  });
};
const GetUserByLogin = (login) => {
  console.log('**** User ****', login)
  return model.User.findOne({
      where: { Login: login }
  })
}

const GetUserById = (id) => {
  console.log("**** ID User ****", id);
  return model.User.findOne({
    where: {
      UserID: id,
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
          include: CharacterInfo,
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
          include: CharacterInfo,
        },
      },
    ],
  });
};

const GetAllCharacters = () => {
  console.log("**** All Characters ****");
  return model.Character.findAll({
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
  const promises = []
  let name = data.name;
  var str = name.replace(/\s+/g, "");
  const newCharacter = {
    Id: str,
    CurrentName: name,
  };
  const characterCreated = model.Character.create(newCharacter)
  promises.push(characterCreated)
  characterCreated
  .then(w => {
    return model.Character.findOne({
      where: {
        Id: str
      }
    })
})
.catch(err => {
    //console.log(err)
    res.send(err).status(500)
})

  return characterCreated;
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
};

module.exports = queries;
