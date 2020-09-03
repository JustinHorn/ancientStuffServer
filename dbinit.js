const { Sequelize, DataTypes } = require("sequelize");

const user = process.env.PGUSER;
const host = process.env.PGHOST;
const password = process.env.PGPASSWORD;
const database = process.env.PGDATABASE;
const port = process.env.PGPORT;

const sequelize = new Sequelize(
  `postgres://${user}:${password}@${host}:${port}/${database}`
); // Example for postgres
const stuff = sequelize.define(
  "stuff",
  {
    id: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    stats: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: DataTypes.STRING,
    type: DataTypes.STRING,
  },
  { timestamps: false }
);

const videos = sequelize.define(
  "videos",
  {
    id: {
      type: DataTypes.INTEGER,
      defaultValue: Sequelize.UUIDV4,
      allowNull: false,
      unique: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    source: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  { timestamps: false }
);

module.exports = {
  stuff,
  videos,
  sequelize,
};
