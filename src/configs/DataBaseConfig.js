class DataBaseConfig {
  static connection() {
    const { dbName, dbUser, dbPassword, dbHost, dbPort, dbDialect } =
      global.dbProperties;

    return {
      dialect: dbDialect,
      host: dbHost,
      username: dbUser,
      password: dbPassword,
      database: dbName,
      port: dbPort,
      logging: false,
      timezone: "-03:00",
      define: {
        underscored: false,
        underscoredAll: false,
        freezeTableName: true,
        timestamps: true,
      },
    };
  }
}

export default DataBaseConfig;
