"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Actividad extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.Actividad.belongsTo(models.Administrador, {
        foreignKey: "id_administrador",
      });
    }
  }
  Actividad.init(
    {
      nombre_actividad: DataTypes.STRING,
      tipo: DataTypes.STRING,
      descripcion: DataTypes.STRING,
      fecha_ini: DataTypes.DATE,
      fecha_fin: DataTypes.DATE,
      hora: DataTypes.DATE,
      id_administrador: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Actividad",
    }
  );
  return Actividad;
};