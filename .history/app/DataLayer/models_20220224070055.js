const { DataTypes,  sequelize, Op   } = require('sequelize');

const connection = require('./connection')

const User = connection.define('User', {
    Id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    LastName: {
        type: DataTypes.STRING
    },
    FirstName: {
        type: DataTypes.STRING
    },
    Login: {
        type: DataTypes.STRING
    },
    Email: {
        type: DataTypes.STRING
    },
    Password: {
        type: DataTypes.STRING
    },
    UserName: {
        type: DataTypes.STRING
    },
    Avatar: {
        type: DataTypes.STRING
    },
    Birthday:{
        type: DataTypes.DATE
    },
    Inscription: {
        type: DataTypes.DATE
    }
},{freezeTableName: true, timestamps: false })

const Level = connection.define('Level', {
    Id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    Name:{
        type: DataTypes.STRING
    },
    Image:{
        type: DataTypes.STRING
    },
},{freezeTableName: true, timestamps: false })

const Permission = connection.define('Permission', {
    Id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    Name:{
        type: DataTypes.STRING
    },
    Permission: {
        type: DataTypes.INTEGER
    }
},{freezeTableName: true, timestamps: false })

const Admin = connection.define('Admin', {
    Id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    Name:{
        type: DataTypes.STRING
    },
    Image:{
        type: DataTypes.STRING
    },
},{freezeTableName: true, timestamps: false })

const Member = connection.define('Member', {
    Id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    Name:{
        type: DataTypes.STRING
    },
    Image:{
        type: DataTypes.STRING
    },
},{freezeTableName: true, timestamps: false })

const Banned = connection.define('Banned', {
    Id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    Name:{
        type: DataTypes.STRING
    },
    Image:{
        type: DataTypes.STRING
    },
},{freezeTableName: true, timestamps: false })

const Character = connection.define('Character',{
    Id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    CurrentName:{
        type: DataTypes.STRING
    },
    Genre: {
        type: DataTypes.STRING
    },
    KitName: {
        type: DataTypes.STRING
    },
    ApprenticeName: {
        type: DataTypes.STRING
    },
    WarriorName: {
        type: DataTypes.STRING
    },
    OlderName: {
        type: DataTypes.STRING
    },
    LeaderName: {
        type: DataTypes.STRING
    },
    Age: {
        type: DataTypes.INTEGER
    },
    Description:{
        type: DataTypes.TEXT
    },
    Personnality:{
        type: DataTypes.TEXT
    },
    Biography:{
        type: DataTypes.TEXT
    },
    Image:{
        type: DataTypes.STRING
    },
},{freezeTableName: true, timestamps: false })

const ExistingCharacter = connection.define('ExistingCharacter', {
    Id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    FirstApparition:{
        type: DataTypes.STRING
    },
},{freezeTableName: true, timestamps: false })

const OriginalCharacter = connection.define('OriginalCharacter', {
    Id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    FreeUsing:{
        type: DataTypes.BOOLEAN
    }
},{freezeTableName: true, timestamps: false })

const KittyPet = connection.define('KittyPet', {
    Id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    Name:{
        type: DataTypes.STRING
    },
    Image:{
        type: DataTypes.STRING
    },
},{freezeTableName: true, timestamps: false })

const Loner = connection.define('Loner', {
    Id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    Name:{
        type: DataTypes.STRING
    },
    Image:{
        type: DataTypes.STRING
    },
},{freezeTableName: true, timestamps: false })

const Warrior = connection.define('Warrior', {
    Id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    Name:{
        type: DataTypes.STRING
    },
    Image:{
        type: DataTypes.STRING
    },
},{freezeTableName: true, timestamps: false })

const Clan = connection.define('Clan', {
    Id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    Name:{
        type: DataTypes.STRING
    },    
    Description:{
        type: DataTypes.TEXT
    },
    Image:{
        type: DataTypes.STRING
    },
},{freezeTableName: true, timestamps: false })

const Grade = connection.define('Grade', {
    Id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    Name:{
        type: DataTypes.STRING
    },
    Image:{
        type: DataTypes.STRING
    },
},{freezeTableName: true, timestamps: false })

const Location = connection.define('Location', {
    Id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    Name:{
        type: DataTypes.STRING
    },    
    Description:{
        type: DataTypes.STRING
    },
    Image:{
        type: DataTypes.STRING
    },
},{freezeTableName: true, timestamps: false })

const UserCharacter = connection.define('UserCharacter', {
    Id: {
        type: DataTypes.STRING,
        primaryKey: true,
    }
},{freezeTableName: true, timestamps: false })

const Game = connection.define('Game', {
    Id: {
        type: DataTypes.STRING,
        primaryKey: true,
    }
},{freezeTableName: true, timestamps: false })

const GameCharacter = connection.define('GameCharacter', {
    Id: {
        type: DataTypes.STRING,
        primaryKey: true,
    }
},{freezeTableName: true, timestamps: false })

const Fiction = connection.define('Fiction', {
    Id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    Title: {
        type: DataTypes.STRING,
    },
    Summary: {
        type: DataTypes.TEXT,
    },
    Image: {
        type: DataTypes.STRING,
    }
},{freezeTableName: true, timestamps: false })

const Chapter = connection.define('Chapter', {
    Id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    Title: {
        type: DataTypes.STRING,
    },
    Content: {
        type: DataTypes.TEXT,
    },
    Image: {
        type: DataTypes.STRING,
    }
},{freezeTableName: true, timestamps: false })

const Battle = connection.define('Battle', {
    Id: {
        type: DataTypes.STRING,
        primaryKey: true,
    },
    Title: {
        type: DataTypes.STRING,
    },
    Content: {
        type: DataTypes.TEXT
    }
},{freezeTableName: true, timestamps: false })

const UsersGame = connection.define('UsersGame', {
    Id: {
        type: DataTypes.STRING,
        primaryKey: true,
    }
},{freezeTableName: true, timestamps: false })

User.belongsTo(Level)
Level.hasMany(User)

User.belongsTo(Permission)
Permission.hasMany(User)

Admin.belongsTo(Permission, { foreignKey: 'Id' })
Permission.hasOne(Admin, { foreignKey: 'Id' })

Member.belongsTo(Permission, { foreignKey: 'Id' })
Permission.hasOne(Member, { foreignKey: 'Id' })

Banned.belongsTo(Permission, { foreignKey: 'Id' })
Permission.hasOne(Banned, { foreignKey: 'Id' })

ExistingCharacter.belongsTo(Character, { foreignKey: 'Id' })
Character.hasOne(ExistingCharacter, { foreignKey: 'Id' })

OriginalCharacter.belongsTo(Character, { foreignKey: 'Id' })
Character.hasOne(OriginalCharacter, { foreignKey: 'Id' })

OriginalCharacter.belongsTo(User)
User.hasMany(OriginalCharacter)

KittyPet.belongsTo(Character, {foreignKey: 'Id' })
Character.hasOne(KittyPet, { foreignKey: 'Id' })

Loner.belongsTo(Character, {foreignKey: 'Id' })
Character.hasOne(Loner, { foreignKey: 'Id' })

Warrior.belongsTo(Character, {foreignKey: 'Id' })
Character.hasOne(Warrior, { foreignKey: 'Id' })

Warrior.belongsTo(Clan)
Clan.hasMany(Warrior)

KittyPet.belongsTo(Clan)
Clan.hasMany(KittyPet)

Loner.belongsTo(Clan)
Clan.hasMany(Loner)

Location.belongsTo(Clan, { foreignKey: 'Id' })
Clan.hasMany(Location)

Grade.belongsTo(Character, {foreignKey: 'Id' })
Character.hasOne(Grade, {foreignKey: 'Id' })

UserCharacter.belongsTo(User, {foreignKey : 'Id' })
User.hasMany(UserCharacter)

UserCharacter.belongsTo(Character, {foreignKey : 'Id' })
Character.hasMany(UserCharacter)

GameCharacter.belongsTo(Game, {foreignKey : 'Id' })
Game.hasMany(GameCharacter)

GameCharacter.belongsTo(Character, {foreignKey : 'Id' })
Character.hasMany(GameCharacter)

UsersGame.belongsTo(Game, {foreignKey : 'Id' })
Game.hasMany(UsersGame)

UsersGame.belongsTo(User, {foreignKey : 'Id' })
User.hasMany(UsersGame)

Fiction.belongsTo(Game, { foreignKey: 'Id' })
Game.hasMany(Fiction)

Chapter.belongsTo(Fiction, { foreignKey: 'Id' })
Fiction.hasMany(Chapter)

Chapter.belongsTo(Chapter, { foreignKey: 'Id' })
Chapter.hasOne(Chapter, { foreignKey: { name: 'NextChapterId'} })

const models = {
    User,
    Permission,
    Admin,
    Member,
    Banned,
    Character,
    ExistingCharacter,
    OriginalCharacter,
    Grade,
    Location,
    Level,
    UserCharacter,
    Game,
    Fiction,
    Chapter,
    UsersGame,
    GameCharacter,
    KittyPet,
    Loner,
    Warrior,
    Clan,
    Battle,
    Utils: {
        Op,
        sequelize
    }
}
module.exports = models;