module.exports = {
  UploadBack: {
    url: "C:\\Users\\gossi\\OneDrive\\Documents\\projects\\New-Warrior-game\\front-app\\public\\images",
  },
  JWT: {
    secret: "GossipCoco",
    expire: "24h",
  },
  BDD: {
    SQLServer: {
      database: "CoralieProjectLGDC",
      dialect: "mssql",
      host: "honorin",
      trustServerCertificate: true,
      dialectOptions: {
        authentication: {
          options: {
            instanceName: "sa",
            userName: "sa",
            password: "01127806",
          },
        },
        options: {
          instanceName: "sqlexpress",
        },
      },
      options: {
        trustServerCertificate: true,
        //port: 1433 // Default Port
      },
      logging: false,
    },
    SQLite: {
      dialect: "sqlite",
      storage: "../../bdd.db",
    },
  },
};
